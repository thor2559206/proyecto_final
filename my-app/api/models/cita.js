const { Schema, model } = require('mongoose');

const CitaSchema = Schema({
    nombreYapellido: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: [true, 'El nombre ya existe'],
        match: [/^[A-Za-z\s]+$/, 'El nombre solo debe contener letras y espacios']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es requerida'],
        min: [new Date(), 'La fecha no puede ser menor a la fecha actual'],
        get: function(value) {
            return value.toISOString().split('T')[0]; // Obtener solo la parte de la fecha en formato ISO
        }
    },
    hora: {
        type: String,
        required: [true, 'La hora es requerida'],
        minlength: [5, 'Debe tener el formato HH:MM'],
        maxlength: [5, 'Debe tener el formato HH:MM']
    },
    restricciones: {
        type: String,
        required: [true, 'Las restricciones son requeridas'],
        match: [/^[A-Za-z0-9\s]+$/, 'Las restricciones solo deben contener letras, números y espacios']
    },
    tiposervicio: {
        type: String,
        required: true,
        enum: ['evaluacion', 'nutricion']
    },
    estado: {
        type: String,
        required: true,
        enum: ['Asistio', 'Pendiente', 'Cancelo']
    }
});

const Cita = model('Cita', CitaSchema);
module.exports = Cita;
