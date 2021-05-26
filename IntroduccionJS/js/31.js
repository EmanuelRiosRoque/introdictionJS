const Boton = document.querySelector('#boton');

Boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`) ) 
});



if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion',{
        icon:'img/img1.jpg',
        body:'Codigo con emanuel, las mejores paginas web'
    })
}