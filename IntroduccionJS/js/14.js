// Aregos o Arrays
//sirven para enlisatra un conjunto de cosas
//Para identificar arreglos simpre lleva cochetes:
const numeros = [10,20,30,40,50];



//Forma correcta de ver el contendio de un arreglo es:





//Acceder valores de un arreglo
//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

//  Conocer la extencion de un areglo   
//console.log(meses.length);
//console.log(numeros.length);

//numeros.forEach( function(numero){
   // console.log(numero);
//})

//agregar elementos

//numeros[5] = 60;
//numeros[6] = 70;

//Metodo PUSH

numeros.push(60);
numeros.push(70);

//Agregar multiples elementos

numeros.push(80,90,100,110);//Agrega datos al final del arreglo

//Metodo UNSHIFT

numeros.unshift(-10, -20, -30); //Agrega datos al inicio del arreglo





console.table(numeros);

//Eliminar elementos de un arreglo

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

//meses.pop(); //Elimina el ultimo elemento del arreglo
//meses.shift();//Elimina el primer elemnto del arreglo

//Eliminar un valor en especifico
meses.splice(3, 1);

console.table(meses);



//Rest Operator o Spread Operator
//const nuevoArreglo = [...meses, 'Junio']; //simula un .push
const nuevoArreglo = ['Junio', ...meses]; //simula un .unshift
console.log(nuevoArreglo);

