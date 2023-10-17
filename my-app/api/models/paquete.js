const { Schema, model } = require('mongoose');

const PaqueteSchema = Schema({
    paquetes: {
        type: String,
        required: true,
        match: /^[A-Za-z\s]+$/, // Validación de coincidencia para letras y números
    },

    servicios: {
        type: [String], // Array de strings
        required: true,
        validate: {
            validator: function (value) {
                // Validación personalizada para cada elemento del array
                return value.every((item) => /^[A-Za-z\s]+$/.test(item)); // Coincidencia para letras y espacios en cada elemento
            },
            message: 'Los servicios solo deben contener letras',
        },
    },
    frecuencia: {
        type: String, 
        required: true,
        match: /^[A-Za-z\s]+$/, 
    },

    total: {
        type: Number,
        required: true,
        min: [4000, 'El total mínimo permitido es 4000'],
        max: [1000000, 'El total máximo permitido es 1000000'],
    },

    precioventa: {
        type: Number,
        required: true,
        min: [4000, 'El precio de venta mínimo permitido es 5000'],
        max: [1000000, 'El precio de venta máximo permitido es 1000000'],
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = model('Paquete', PaqueteSchema);