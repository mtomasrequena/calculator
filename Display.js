class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = { //Esto es una lista de los signos para imprimir por el DISPLAY en la funcion imprimirValores()
            sumar       : '+',
            restar      : '-', 
            multiplicar : 'x',
            dividir     : '%',
            factorial   : '!',
            factorial   : '!',
            raiz        : '√',
            sin         : 'sin',
            cos         : 'cos',
            tan         : 'tan',
            funcion     : 'f(x)',
            cuil        : 'CUIL',
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    // A esta funcion se le pasa el VALUE que esta en el html en cada operador.
    computar(tipo) {
        this.tipoOperacion !== 'igual';
        if(this.tipoOperacion !== 'sin' && this.tipoOperacion !== 'cos' && this.tipoOperacion !== 'tan' && this.tipoOperacion !== 'factorial' && this.tipoOperacion !== 'raiz') {
            this.calcular();
        } else {
            this.calcularEspeciales();
        }
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        if(this.valorActual == 0) this.valorAnterior = this.valorActual;
        this.valorActual = '';
        if(this.tipoOperacion == 'raiz'){
            this.imprimirRaiz();
        } else {
            this.imprimirValores();
        }
    }

    agregarNumero(numero) {
        //Aca se valida que solo se pueda poner un solo punto:
        if(numero === '.' && this.valorActual.includes('.')) return;
        //Aca se concatenan numeros para formarlos con los diferentes botones.
        this.valorActual = this.valorActual.toString() + numero.toString();
        //Aca se va a llamar a la funcion IMPRIMIR VALORES que pone los valores en el display
        this.imprimirValores();
    }

    // Imprimir valores: actualiza los numeros que le estas pasando por cada click y actualiza el display
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    imprimirRaiz() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.signos[this.tipoOperacion] || ''} ${this.valorAnterior}`;
    }

    //Esta funcion se encarga de pasar los numeros que poaee el DISPLAY a la CLASE calculadora y realizar las operaciones segun el tipo de operacion
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return;
        // Aca se le pasa al calculador el tipo de operacion y los numeros correspondientes para ejecutar sus metodos.
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    
    // Este metodo es similar al de arriba (Calcular()) a diferencia de que solo necesita un numero para funcionar y el otro numero esta fijado en CERO.
    // Este metodo es el que llevara a cabo los calculos que requieran de un solo numero
    calcularEspeciales() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = 0;

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}