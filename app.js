require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Paciente, Medico, Cita, Historial, Recomendacion } = require('./models/models.js');

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB Hospital Luciani"))
    .catch(err => console.error("❌ Error:", err));

// --- MÓDULO CRUD (PACIENTES) ---

// CREATE (Crear)
app.post('/pacientes', async (req, res) => {
    const nuevo = new Paciente(req.body);
    await nuevo.save();
    res.send({ mensaje: "Paciente creado", data: nuevo });
});

// READ (Leer todos y consulta sencilla)
app.get('/pacientes', async (req, res) => {
    const lista = await Paciente.find();
    res.json(lista);
});

// Consulta sencilla: Buscar por Cédula
app.get('/pacientes/:cedula', async (req, res) => {
    const p = await Paciente.findOne({ cedula: req.params.cedula });
    res.json(p);
});

// UPDATE (Actualizar)
app.put('/pacientes/:id', async (req, res) => {
    const act = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(act);
});

// DELETE (Borrar)
app.delete('/pacientes/:id', async (req, res) => {
    await Paciente.findByIdAndDelete(req.params.id);
    res.send("Paciente eliminado con éxito");
});

// --- FUNCIÓN PARA LLENAR LA BASE DE DATOS (PARA LAS CAPTURAS) ---
app.get('/instalar-datos', async (req, res) => {
    // Datos de ejemplo: 4 por cada una de las 5 colecciones
    await Paciente.insertMany([
        {cedula:"V-1", nombre:"Juan Perez", edad:45, telefono:"0414-123"},
        {cedula:"V-2", nombre:"Ana Sosa", edad:30, telefono:"0412-456"},
        {cedula:"V-3", nombre:"Luis Rivas", edad:65, telefono:"0416-789"},
        {cedula:"V-4", nombre:"Marta Diaz", edad:22, telefono:"0424-000"}
    ]);
    await Medico.insertMany([
        {nombre:"Dr. Garcia", especialidad:"Cardiología", carnet:"M1", consultorio:"A-10"},
        {nombre:"Dra. Blanca", especialidad:"Pediatría", carnet:"M2", consultorio:"B-05"},
        {nombre:"Dr. Lopez", especialidad:"Traumatología", carnet:"M3", consultorio:"C-12"},
        {nombre:"Dra. Martinez", especialidad:"Ginecología", carnet:"M4", consultorio:"D-01"}
    ]);
    await Cita.insertMany([
        {fecha:"2023-10-01", hora:"08:00", paciente:"Juan Perez", motivo:"Chequeo"},
        {fecha:"2023-10-01", hora:"09:00", paciente:"Ana Sosa", motivo:"Control"},
        {fecha:"2023-10-02", hora:"10:00", paciente:"Luis Rivas", motivo:"Dolor"},
        {fecha:"2023-10-02", hora:"11:00", paciente:"Marta Diaz", motivo:"Consulta"}
    ]);
    await Historial.insertMany([
        {pacienteId:"V-1", diagnostico:"Hipertensión", fechaIngreso:"2023-01-10", antecedentes:"Asma"},
        {pacienteId:"V-2", diagnostico:"Gripe", fechaIngreso:"2023-05-12", antecedentes:"Ninguno"},
        {pacienteId:"V-3", diagnostico:"Fractura", fechaIngreso:"2023-06-15", antecedentes:"Diabetes"},
        {pacienteId:"V-4", diagnostico:"Alergia", fechaIngreso:"2023-08-20", antecedentes:"Rinitis"}
    ]);
    await Recomendacion.insertMany([
        {paciente:"Juan", doctor:"Garcia", tratamiento:"Losartan", diasDuracion:30},
        {paciente:"Ana", doctor:"Blanca", tratamiento:"Vitamina C", diasDuracion:7},
        {paciente:"Luis", doctor:"Lopez", tratamiento:"Reposo absoluto", diasDuracion:15},
        {paciente:"Marta", doctor:"Martinez", tratamiento:"Antialérgico", diasDuracion:5}
    ]);
    res.send("✅ Base de datos poblada con éxito. Revisa MongoDB Compass.");
});

app.get('/', (req, res) => {
    res.send('¡Bienvenido al sistema del Hospital Domingo Luciani!');
});

app.listen(4000, () => console.log("🚀 Servidor corriendo en http://localhost:4000"));