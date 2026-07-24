<<<<<<< HEAD
# Proyecto Hospital Domingo Luciani

=======
# Proyecto_BD_III
Desarrollo de un módulo para registro y consultas de historias medicas del hospital Domingo Luciani.
>>>>>>> 9c20bd3f9791a8e330146eff48d267d8c8972a29
Sistema de gestión de pacientes y citas médicas desarrollado con Node.js y MongoDB.

## Requisitos
- Node.js
- MongoDB Compass o Atlas

## Instalación y Uso
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Configurar el archivo `.env` con su conexión de MongoDB.
4. Ejecutar el servidor: `npm start`.
5. **IMPORTANTE**: Visitar `http://localhost:3000/instalar-datos` una sola vez para cargar los 20 registros iniciales requeridos.

## Endpoints del CRUD (Pacientes)
- GET `/pacientes` : Listar todos.
- GET `/pacientes/:cedula` : Buscar uno (Consulta sencilla).
- POST `/pacientes` : Crear uno nuevo.
- PUT `/pacientes/:id` : Actualizar por ID.
<<<<<<< HEAD
- DELETE `/pacientes/:id` : Eliminar por ID.s
=======
- DELETE `/pacientes/:id` : Eliminar por ID.s
>>>>>>> 9c20bd3f9791a8e330146eff48d267d8c8972a29
