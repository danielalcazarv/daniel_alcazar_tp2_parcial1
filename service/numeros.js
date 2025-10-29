import NumerosMemoria from "../model/DAOs/numerosMem.js";

class ServicioNumeros {

    constructor() {
        this.nrosMem = new NumerosMemoria
    }

    async obtenerNumeros () {
        let nros = await this.nrosMem.obtenerNumeros()
        return {
            numeros:{nros}
        }
    }

    async obtenerPromedio () {
        let nros = await this.nrosMem.obtenerNumeros()
        if (nros.length == 0) {
            return 0 
        }
        const suma  = nros.reduce((acc, numero) => acc + numero, 0)
        const prom = suma / nros.length
        return {
            promedio:prom
        }
    }

    async obtenerMinMax () {
        let nros = await this.nrosMem.obtenerNumeros()

        if (nros.length == 0) {
            return { min: null, max: null }
        }
        const min = Math.min(...nros)
        const max = Math.max(...nros)

        return { 
            minimo:min, 
            maximo:max
        }
    }
    
    async obtenerCantidad () {
        let nros = await this.nrosMem.obtenerNumeros()
        
        return {
            cantidad: nros.length
        }
    }

    async guardarNumero (nro) {
        return await this.nrosMem.guardarNumero(nro)
    }
}

export default ServicioNumeros