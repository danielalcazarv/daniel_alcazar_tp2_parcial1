class NumerosMemoria {

    constructor() {
        this.numeros = []
    }

    obtenerNumeros = async () => {
        try {
            return this.numeros

        } catch (error) {
            console.log('error en obtenerNumeros', error)
            return []
        }
    }

    guardarNumero = async nro => {
        try {
            const nuevoNro = nro
            this.numeros.push(nuevoNro)
            return nuevoNro

        } catch (error) {
            console.log('error en guardarNumeros', error)
            let nro = {}
            return nro
        }
    }
}

export default NumerosMemoria