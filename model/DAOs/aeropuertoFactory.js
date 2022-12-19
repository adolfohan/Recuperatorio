import AeropuertoMemDAO from './aeropuertoMem.js'

class AeropuertoFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            default: return new AeropuertoMemDAO()
        }
    }
}

export default AeropuertoFactoryDAO