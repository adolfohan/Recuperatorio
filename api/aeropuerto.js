import AeropuertoFactoryDAO from '../model/DAOs/aeropuertoFactory.js'
import config from '../config.js'
import validaciones from '../validaciones/pasajeros.js'

class ApiAeropuerto {

    constructor() {
        this.AeropuertoDAO = AeropuertoFactoryDAO.get(config.PERSISTENCIA)
    }

    async obtenerDatos() { 
        let datos = await this.AeropuertoDAO.obtenerDatos()
        return datos
    }

    async guardarDatos(datos) { 
        datos.pasaporte = parseInt(datos.pasaporte)
        datos.nombreYApellido = String(datos.nombreYApellido)
        let val = validaciones.validar(datos)
        if(val.result) {
            return await this.AeropuertoDAO.guardarDatos(datos)
        }
        else {
            return val.error
        }
    }

    async proximoASalir(hora){
        horaVuelo = this.AeropuertoDAO.datos.horaVuelo
        horaActual = new Date()
        horaActual = horaActual.getHours()

        if((horaActual - horaVuelo) < 1){
            console.log("Pasajero con prioridad");
        }

    }

    
}

export default ApiAeropuerto
