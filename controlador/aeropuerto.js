import ApiAeropuerto from '../api/aeropuerto.js'

class ControladorAeropuerto {

    constructor() {
        this.apiAeropuerto = new ApiAeropuerto()
    }

    guardarDatos = async (req,res) => {
        try {
            let datos = req.body
            await this.apiAeropuerto.guardarDatos(datos)

            res.redirect('/')
        }
        catch(error) {
            console.log('error guardarDatos', error)
        }
    }

    obtenerDatos = async (req,res) => {
        try {
            let datos = await this.apiAeropuerto.obtenerDatos()

            res.json({datos})
        }
        catch(error) {
            console.log('error obtenerDatos', error)
        }
    }
}

export default ControladorAeropuerto
