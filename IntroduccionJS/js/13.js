// Unir objetos

const produto = {
    nombreProducto : 'Monitor de 20 Pulgadas',
    precio : 300,
    disponible : true,
}


const medidas = {
    peso : '1kg',
    medida : '1m',
}

const nuevoProducto = { ...produto,...medidas };

console.log(produto);
console.log(nuevoProducto);
