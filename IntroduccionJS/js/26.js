//This

const reservacion = {
    nombre: 'Emanuel',
    apellido:'Rios',
    total: 800,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y sucantidad a pagar es de $${this.total}`)
    }
}

reservacion.informacion();