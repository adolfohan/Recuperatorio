class AeropuertoMemDAO {

    constructor() {
        this.datos = [
            {nombreYApellido: 'Adolfo Han', pasaporte: 33511838, fechaNacimiento: '06/01/1988', horaVuelo: 19}
        ]
    }

    guardarDatos = async pasajero => {
        try {
            pasajero.nombreYApellido = String(nombreYApellido)
            pasajero.pasaporte = parseInt(pasaporte)

        this.datos.push(pasajero)

        return await Promise.resolve(pasajero)
        }
        catch(error) {
            console.log('error en guardarDatos:',error)
            let dato = {}

            return dato
        }
    }

    obtenerDatos = async () => {
        try {
            return await Promise.resolve(this.datos)
        }
        catch(error) {
            console.log('error en obtenerDatos', error)
            return []
        }
    }

    getHoraActual() {
        return new Date();
    }
}

export default AeropuertoMemDAO