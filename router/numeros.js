import express from 'express'

import ControladorNumeros from '../controller/numeros.js'

class RouterNumeros {

    constructor () {
        this.controladorNumeros = new ControladorNumeros()
        this.router = express.Router()
    }

    start() {
        this.router.get('/entrada', this.controladorNumeros.obtenerNumeros())
        this.router.get('/promedio', this.controladorNumeros.obtenerPromedio())
        this.router.get('/minmax', this.controladorNumeros.obtenerMinMax())
        this.router.get('/cantidad', this.controladorNumeros.obtenerCantidad())
        this.router.post('/', this.controladorNumeros.guardarNumero())

        return this.router
    }
}

export default RouterNumeros