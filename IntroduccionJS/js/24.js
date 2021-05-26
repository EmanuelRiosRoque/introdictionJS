// For Loop

// for( let i = 0; i <= 10; i++ ) {
//     console.log(i);
// }



// for( let i = 1; i <= 100; i++ ) {
//     if( i % 2 === 0) {
//         console.log(`El numero ${i} es par`)
//     }
//     else{
//         console.log(`El numero ${i} es inpar`)
//     }
// }


const carrito =[
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


for( let i=0; i<carrito.length; i++) {
    console.log(carrito [i]);
}

// While loop

// let i=1;  //indice

// while(i<=100) { //condicion
//     if(i % 2===0){
//         console.log(`Este numero ${i} es PAR`)
//     } 
//     else{
//         console.log(`Este numero ${i} es IMPAR`)
//     }

//     i++ //incrmento
// }

// let i = 0;

// while(i < carrito.length){
//     console.log(carrito[i].nombre);

//     i++
// }


// Do while lopp

let i=0;

do{
    console.log(i);

    i++
}while( i < 10);

//El do while ejecuta el codigo al menos una vez y despues evalua
//y el while primero revisa si se cumple la condicion y luego ejecuta

