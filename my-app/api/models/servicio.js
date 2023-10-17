const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
    servicio: {
        type: String,
        required: true,
        match: /^[A-Za-z0-9\s]+$/, // Validación de coincidencia para letras y números
    },
  
    cantidad: {
        type: Number,
        required: true,
        min : 1,
        max : 7
    },
  
    precio: {
        type: Number,
        required: true,
        min: [6000, 'El precio mínimo permitido es 6000'],
        max: [1000000, 'El precio máximo permitido es 1000000'],
    },
  
    estadoservicios: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = model('Servicio', ServicioSchema);
