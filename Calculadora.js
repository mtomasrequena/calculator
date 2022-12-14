class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return (num2 == 0)? "Syntax Error" : num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
  
    sin(num1) {
        return Math.sin(num1);
    }

    cos(num1) {
        return Math.cos(num1);
    }

    tan(num1) {
        return Math.tan(num1);
    }

    raiz(num1) {
        return Math.sqrt(num1);
    }

    factorial (num1) {
        var r = 1;
        for(var i = num1; i>0; i--){
            r *= i;
        }
        return r;
    }

    funcion(num1, num2) {
        // Abcisas al origen
        var raiz = -(num2)/num1;
        //Ordenada al origen
        var ordenada =  num2;
        
        var pendiente;

        if(num1 > 0) {
            pendiente = 'Pendiente +';
        } else {
            pendiente = 'Pendiente -';
        }

        return "-  Raiz: "+`${raiz}`+ ";   / - Ordenada: "+`${ordenada}`+ ";  -\r"+`${pendiente}`;
    }

    cuil(num1, num2) {
        var dni = num2.toString();
        const digitos = [ 5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        var digitosMultiplicados = [];
        var suma = 0;
        var genero = '20';
        var codigoVerificador;

        if(dni.length >8) return "Invalid DNI"; 
        
        if(num1=='2'){
            genero = '27';
        }

        var cifrasConocidas = genero + dni;
        
        for(var i=0; i<digitos.length; i++) {
            digitosMultiplicados.push(parseInt(cifrasConocidas[i]) * digitos[i]); 
        }

        for(var i=0; i<digitosMultiplicados.length; i++){
            suma += digitosMultiplicados[i];
        }

        var resultado = (suma/11) - Math.trunc(suma/11); 

        var resultadoProvisorio = resultado * 10;

        codigoVerificador = Math.trunc(resultadoProvisorio);

        codigoVerificador = codigoVerificador+"";

        return `${genero}`+ "-"+`${dni}`+ "-"+`${codigoVerificador[0]}`;
    }
}