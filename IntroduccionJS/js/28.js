// Clases

class Producto {
    constructor(nombre, precio, local, id, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.local = local;
        this.id = id;
        this.disponible = disponible;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio} en el local de ${this.local} con el codigo ${this.id}`;
    }
    formatearPrecio(){
        return `El precio del prodto ${this.nombre} es de $${this.precio}`;
    }
}


const producto2 = new Producto('Monitor Curvo de 49"',800,'Coppel',154751,true);
const producto3 = new Producto('Monitor Curvo de 88"',1100,'Walmart',541264,true);
const producto4 = new Producto('Monitor Curvo de 120"',2000,'Walmart',545454,true);
const producto5 = new Producto('Monitor Curvo de 300"',4100,'Walmart',454547,true);
const producto6 = new Producto('Monitor Curvo de 400"',6000,'Walmart',545722,true);

//Herencia



class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn;
    }
    formatearProducto(){
        return `El libro es ${this.nombre} tiene un precio de $${this.precio} su ISBN es:${this.isbn}`;
    }
}

const libro = new Libro('El arte de la guerra',400,'6545485746548');

console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto() );



// console.log(producto2.formatearPrecio() );
// console.log(producto3.formatearProducto() );
// console.log(producto4.formatearProducto() );
// console.log(producto5.formatearProducto() );
// console.log(producto6.formatearProducto() );


