const usuarioAutenticado = new Promise( function(resolve, reject){
    const auth = false;


    if(auth){
        resolve('Usuario Autentificado'); //PROMISE se cumplre
    }else{
        reject('Usuario No Auntentificado'); //PROMISE no se cumple
    }
});

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado)
    })
    //Para leer un reject:
    .catch(function(error){
        console.log(error)
    })



//En los promises existen tres valores posible
//Pending: El promis no se ah cumplido, pero tampoco se ah rechazado.
//Fulfilled: Ya se cumplio el promise.
// Reject: Cuando no se cumple el promise