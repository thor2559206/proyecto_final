const express = require('express')
const {dbConnection} = require('../database/config')
const cors = require('cors')//Seguridad extra
const bodyParser = require('body-parser')

class Server{


    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.citaPath = '/api/citas' //Ruta pública
        this.servicioPath = '/api/servicios' 
        this.paquetePath = '/api/paquetes'
        this.rolesPath = '/api/roles'
        this.suscripcionesPath = '/api/suscripciones'
        this.middlewares()
        this.routes()
        this.conectarbs()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors())
        this.app.use(bodyParser.json())
    }

    routes() {
       this.app.use(this.citaPath, require('../routes/citas'))
       this.app.use(this.servicioPath, require('../routes/servicios'))
       this.app.use(this.paquetePath, require('../routes/paquetes'))
       this.app.use(this.suscripcionesPath, require('../routes/suscripciones'))
       this.app.use(this.rolesPath, require('../routes/roles'));
    }

    async conectarbs(){
        await dbConnection()
    }
}

module.exports = Server
