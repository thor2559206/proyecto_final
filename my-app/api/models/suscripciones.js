const { Schema, model } = require('mongoose');

const SuscripcionesSchema = Schema({
    tipoPaquete: {
        type: String,
        required: [true, 'El tipo de paquete es requerido'],
        match: [/^[A-Za-z\s]+$/, 'El nombre solo debe contener letras y espacios']
    },
    fechaPago: {
        type: [{
            type: Date,
        }],
        required: [true, 'La fecha de pago es requerida'],
    },
    estadoSuscripcion: { 
        type: Boolean,
        required: true,
    }
});

module.exports = model('Suscripciones', SuscripcionesSchema);
