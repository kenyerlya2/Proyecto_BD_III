# Proyecto Hospital Domingo Luciani

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
- DELETE `/pacientes/:id` : Eliminar por ID.s