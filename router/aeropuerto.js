import express from 'express'
const router = express.Router()

import ControladorAeropuerto from '../controlador/aeropuerto.js'

class RouterAeropuerto {

    constructor() {
        this.controladorAeropuerto = new ControladorAeropuerto()
    }

    start() {
        router.post('/entrada', this.controladorAeropuerto.guardarDatos)

        router.get('/entrada', this.controladorAeropuerto.obtenerDatos)
        router.get('/prioridad', this.controladorAeropuerto.obtenerPasajeroConPrioridad)

        return router
    }
}

export default RouterAeropuerto