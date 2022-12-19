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
        // router.get('/promedio', this.controladorNumeros.obtenerPromedio)
        // router.get('/minmax', this.controladorNumeros.obtenerMinMax)
        // router.get('/cantidad', this.controladorNumeros.obtenerCantidad)

        return router
    }
}

export default RouterAeropuerto