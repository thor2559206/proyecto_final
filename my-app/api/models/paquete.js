const { response } = require('express');
const Paquete = require('../models/paquete');

const paqueteGet = async (req, res = response) => {
    try {
        const paquetes = await Paquete.find();
        res.json({
            paquetes
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener paquetes'
        });
    }
};

const paquetePost = async (req, res = response) => {
    const { paquetes, servicios, frecuencia, total, precioventa, estado } = req.body;
    try {
        const paquete = new Paquete({
            paquetes,
            servicios,
            frecuencia,
            total,
            precioventa,
            estado
        });
        await paquete.save();
        res.json({
            msg: 'Éxito en la inserción de paquetes'
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                errors: validationErrors
            });
        } else {
            res.status(500).json({
                error: 'Error al insertar el paquete'
            });
        }
    }
};

const paquetePut = async (req, res = response) => {
    const { _id } = req.query; // Obtener el ID del paquete
    const { paquetes, servicios, frecuencia, total, precioventa, estado } = req.body;
    try {
        const paquete = await Paquete.findByIdAndUpdate(_id, {
            paquetes,
            servicios,
            frecuencia,
            total,
            precioventa,
            estado
        }, { new: true });
        if (!paquete) {
            return res.status(404).json({
                error: 'Paquete no encontrado'
            });
        }
        res.json({
            msg: 'Paquete modificado',
            paquete
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al modificar el paquete'
        });
    }
};

const paqueteDelete = async (req, res = response) => {
    const { _id } = req.query; // Obtener el ID del paquete
    try {
        const paquete = await Paquete.findByIdAndDelete(_id);
        if (!paquete) {
            return res.status(404).json({
                error: 'Paquete no encontrado'
            });
        }
        res.json({
            msg: 'Paquete eliminado'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar el paquete'
        });
    }
};

module.exports = {
    paqueteGet,
    paquetePost,
    paquetePut,
    paqueteDelete
};
