const mongoose = require('mongoose');

// 1. Colección Pacientes
const Paciente = mongoose.model('Paciente', new mongoose.Schema({
    cedula: String, nombre: String, edad: Number, telefono: String
}));

// 2. Colección Médicos
const Medico = mongoose.model('Medico', new mongoose.Schema({
    nombre: String, especialidad: String, carnet: String, consultorio: String
}));

// 3. Colección Citas
const Cita = mongoose.model('Cita', new mongoose.Schema({
    fecha: String, hora: String, paciente: String, motivo: String
}));

// 4. Colección Historiales
const Historial = mongoose.model('Historial', new mongoose.Schema({
    pacienteId: String, diagnostico: String, fechaIngreso: String, antecedentes: String
}));

// 5. Colección Recomendaciones
const Recomendacion = mongoose.model('Recomendacion', new mongoose.Schema({
    paciente: String, doctor: String, tratamiento: String, diasDuracion: Number
}));

module.exports = { Paciente, Medico, Cita, Historial, Recomendacion };