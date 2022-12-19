class AeropuertoMemDAO {

    constructor() {
        this.datos = []
    }

    guardarDatos = async dato => {
        try {
            this.datos.push(dato)
            return dato
        }
        catch(error) {
            console.log('error en guardarDatos:',error)
            let dato = {}

            return dato
        }
    }

    obtenerDatos = async () => {
        try {
            return this.datos
        }
        catch(error) {
            console.log('error en obtenerDatos', error)
            return []
        }
    }
}

export default AeropuertoMemDAO