import Joi from 'joi'

const validar = pasajero => {
    const pasajeroSchema = Joi.object({
        nombreYApellido: Joi.string().alphanum().required(),
        pasaporte: Joi.number().integer().min(0).required(),
    })

    const { error } = pasajeroSchema.validate(pasajero)
    if(error) {
        return { result: false, error }
    }
    else {
        return { result: true }
    }
}

export default {
    validar
}
