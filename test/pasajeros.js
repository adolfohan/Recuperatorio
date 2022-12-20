import supertest from 'supertest';
const request = supertest('http://localhost:8080')

import {expect} from 'chai'
import generador from '../generador/pasajeros.js'

describe('test api rest full', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await request.get('/aeropuerto/entrada')
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un pasajero', async () => {
            let pasajero = generador.get()
            console.log(pasajero)


            let response = await request.post('/aeropuerto/entrada').send(pasajero)
            expect(response.status).to.eql(200)

            const user = response.body
            expect(user).to.include.keys('nombreYApellido','pasaporte','fechaNacimiento','horaVuelo')
            expect(user.nombreYApellido).to.eql(pasajero.nombreYApellido)
            expect(user.pasaporte).to.eql(pasajero.pasaporte)
            expect(user.fechaNacimiento).to.eql(pasajero.fechaNacimiento)
            expect(user.horaVuelo).to.eql(pasajero.horaVuelo)
        })
    })
})
