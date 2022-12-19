import AeropuertoFactoryDAO from '../model/DAOs/aeropuertoFactory.js'
import config from '../config.js'

class ApiAeropuerto {

    constructor() {
        this.AeropuertoDAO = AeropuertoFactoryDAO.get(config.PERSISTENCIA)
    }

    async obtenerDatos() { 
        let datos = await this.AeropuertoDAO.obtenerDatos()
        return datos
    }

    async guardarDatos(datos) { 
        return await this.AeropuertoDAO.guardarDatos(datos) 
    }

    
}

export default ApiAeropuerto
