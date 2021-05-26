// Objetos

const produto = {
    nombreProducto : 'Monitor de 20 Pulgadas',
    precio : 300,
    disponible : true,
}


//Forma anterior
//const precioProducto = produto.precio;
//const nombreProducto = produto.nombreProducto;

//console.log(precioProducto)
//console.log(nombreProducto)


// DISTRUCTURING 
const {precio, nombreProducto} = produto;


console.log(precio);
console.log(nombreProducto);