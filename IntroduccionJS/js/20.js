//Crear metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciondo Cancion con el ID: ${id}`)
    },
    pausar : function(){
        console.log('pausando...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}


reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(254);
reproductor.crearPlaylist('HeavyMETAL');
reproductor.reproducirPlaylist('HeavyMETAL');

