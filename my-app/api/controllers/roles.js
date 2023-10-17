const { response } = require('express')

//Importar modelos
const Roles = require('../models/roles')


const rolesGet = async (req, res = response) => {

    const roles = await Roles.find()

    res.json({
        roles
    })
}

const rolesPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    try {
        const roles = new Roles(body)
        await roles.save()
        mensaje = "Exito en la insersion de roles"
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.log(Object.values(error.errors).map(val => val.message))
            mensaje = Object.values(error.errors).map(val => val.message)
        }
    }
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

const rolesPut = async (req, res = response) => {
    const { nombreRol,PermisosRol,estadorol } = req.body//modificar
    let mensaje = ""
    try {
        const roles = await Roles.findOneAndUpdate({ nombreRol: nombreRol}, {PermisosRol:PermisosRol,estadorol: estadorol})//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado exitosamente roles"
    } catch (error) {
        mensaje = "No modificado error"
    }
    res.json({
        msg: mensaje
    })
}

const rolesDelete = async (req, res = response) => {
    const {_id} = req.query
    let mensaje = " "
    try {
        const roles = await Roles.deleteOne({ _id: _id })
        mensaje = "Eliminado exitosamente de roles"
    } catch (error) {
        mensaje = "No eliminado error"
    }
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

module.exports = {
    rolesGet,
    rolesPost,
    rolesPut,
    rolesDelete
}