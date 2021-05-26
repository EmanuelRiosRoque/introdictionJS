// Objetos

const produto = {
    nombreProducto : 'Monitor de 20 Pulgadas',
    precio : 300,
    disponible : true,
}



//Mostrar Objetos
//console.log(produto.precio);
//console.log(produto.nombreProducto);
//console.log(produto.disponible);

//Otra forma
//console.log(produto['precio'])
//console.log(produto['precio'])
//console.log(produto['precio'])

//Agregar nuevas propiedades
produto.imagen = 'imagen.jpg';

//Eliminar Propiedades
delete produto.disponible;

console.log(produto);
