//Declaracion de Funcion

function sumar(numero1 = 0, numero2 = 0) { //nuemro1 numero2 son parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); //valores reales / Argumentos
sumar(10, 20);
sumar(10, 30);
sumar(10, 40);
sumar(10, 50);
sumar(10);


//Exprecion de la funcion

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);