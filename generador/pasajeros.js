import { faker } from '@faker-js/faker';

const get = () => ({
    nombreYApellido: faker.name.firstName().split(' ')[0],
    pasaporte: faker.random.number(),
    fechaNacimiento: faker.date.birthdate(),
    horaVuelo: faker.random.number(min= 0, max=23)
})

export default {
    get
}