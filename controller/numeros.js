import ServicioNumeros from "../service/numeros.js";

class ControladorNumeros {

    constructor(){
        this.serviciosNumeros = new ServicioNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            const nros = await this.serviciosNumeros.obtenerNumeros()

            res.json({ numeros: nros })
        } catch (error) {
            console.log('error obtenerNumeros', error)
            res.status(500).json({ error: error.message })
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const prom = await this.serviciosNumeros.obtenerPromedio()

            res.json(prom)
        } catch (error) {
            console.log('error obtenerPromedio', error)
            res.status(500).json({ error: error.message })
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            const minMax = await this.serviciosNumeros.obtenerMinMax()

            res.json({minMax})
        } catch (error) {
            console.log('error obtenerMinMax', error)
            res.status(500).json({ error: error.message })
        }
    }

    obtenerCantidad = async (req, res) => {
        try {
            const cant = await this.serviciosNumeros.obtenerCantidad()

            res.json({cant})
        } catch (error) {
            console.log('error obtenerCantidad', error)
            res.status(500).json({ error: error.message })
        }
    }

    guardarNumero = async (req, res) => {
        try {
            const { numero } = req.body
            if (numero == undefined) {
                
            }
            let nroGuardado = await this.serviciosNumeros.guardarNumero(numero)

            res.json(nroGuardado)
        } catch (error) {
            console.log('error guardarNumero', error)
            res.status(500).json({ error: error.message })
        }
    }
}

export default ControladorNumeros