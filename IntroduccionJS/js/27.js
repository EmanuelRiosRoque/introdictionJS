//Programacion Orientada a Objetos

//Objet Literal

// const producto = {
//     nombre:'Tablet',
//     precio: 200
// }

//Objet Constructor

//Cliente
function cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
cliente.prototype.fotmatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

//Producto
function producto(nombre, precio, local, id, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.local = local;
    this.id = id;
    this.disponible = disponible;
}
//Crear una funcion que solo se utiliza en un objeto en especifico
producto.prototype.fotmatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio} en el local de ${this.local} con el codigo ${this.id}`;
}


const cliente1 = new cliente('Emanuel', 'Rios');
const producto2 = new producto('Monitor Curvo de 49"',800,'Coppel',154751,true);
const producto3 = new producto('Monitor Curvo de 88"',1100,'Walmart',541264,true);
const producto4 = new producto('Monitor Curvo de 120"',2000,'Walmart',545454,true);
const producto5 = new producto('Monitor Curvo de 300"',4100,'Walmart',454547,true);
const producto6 = new producto('Monitor Curvo de 400"',6000,'Walmart',545722,true);



console.log(cliente1.fotmatearCliente() );
console.log(producto2.fotmatearProducto() );
console.log(producto3.fotmatearProducto() );
console.log(producto4.fotmatearProducto() );
console.log(producto5.fotmatearProducto() );
console.log(producto6.fotmatearProducto() );

