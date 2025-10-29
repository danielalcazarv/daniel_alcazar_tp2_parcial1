import ServicioNumeros from "../service/numeros.js";

class ControladorNumeros {

    constructor(){
        this.serviciosNumeros = new ServicioNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            const nros = await this.serviciosNumeros.obtenerNumeros()

            res.json(nros)
        } catch (error) {
            console.log('error obtenerNumeros', error)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const prom = await this.serviciosNumeros.obtenerPromedio()

            res.json(prom)
        } catch (error) {
            console.log('error obtenerPromedio', error)
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            const minMax = await this.serviciosNumeros.obtenerMinMax()

            res.json({minMax})
        } catch (error) {
            console.log('error obtenerMinMax', error)
        }
    }

    obtenerCantidad = async (req, res) => {
        try {
            const cant = await this.serviciosNumeros.obtenerCantidad()

            res.json({cant})
        } catch (error) {
            console.log('error obtenerCantidad', error)
        }
    }

    guardarNumero = async (req, res) => {
        try {
            let nro = req.body
            let nroGuardado = await this.serviciosNumeros.guardarNumero(nro)

            res.json(nroGuardado)
        } catch (error) {
            console.log('error guardarNumero', error)
        }
    }
}

export default ControladorNumeros