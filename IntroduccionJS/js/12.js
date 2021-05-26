//"use strict"; //Correr java en modo estricto
// Objetos

const produto = {
    nombreProducto : 'Monitor de 20 Pulgadas',
    precio : 300,
    disponible : true,
}
//Object.freeze hace que ya no podamos agregar nuevas propiedades ni eliminar
Object.seal(produto)

produto.imagen = 'imagen.jpg';

//.freeze .seal seal si nos permite las propiedades existentes

console.log(produto);