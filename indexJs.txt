//Declaracion de 4 constantes: 
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual   = document.getElementById('valor-actual');
//Aca obtenemos todos los elementos tipo numero y los guardamos en una lista (ARRAY)
const botonesNumeros       = document.querySelectorAll('.numero');
//Aca obtenemos todos los elementos tipo numero y los guardamos en una lista (ARRAY)
const botonesOperadores    = document.querySelectorAll('.operador');

// Instancio la clase DISPLAY y le paso como argumentos las dos variables obtenidas mas arriba
const display = new Display(displayValorAnterior, displayValorActual);

//Aca recorremos la lista de numeros y se agrega un evento por cada click que se da en los botones TIPO NUMERO. Y ese evento de click llama a una funcion que agrega los numeros en el display.
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Aca recorremos la lista de elemtnos de SIGNOS y OPERACIONES y se agrega un evento por cada click que se da en los botones tipo "".operador" y ese evento de click llama a una funcion computar del display.
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});