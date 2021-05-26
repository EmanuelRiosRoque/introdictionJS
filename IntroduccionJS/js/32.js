// Async / Await   

function descargarNuevosClientes(){
    return new Promise(resolve => {
       console.log('Descargando Clientes... Espere...');

       setTimeout( () => {
            resolve('Clientes Fueron Descargados')
       },5000)


    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
       console.log('Descargando pedidos... Espere...');

       setTimeout( () => {
            resolve('Los pedidos fueron Descargados')
       },3000)


    });
}

async function app() {
    try {
                         //Forma Incorrecta
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

                         //Forma Correcta
        const resultado = await Promise.all([ descargarNuevosClientes(),descargarUltimosPedidos() ])
        console.log(resultado [0] );
        console.log(resultado [1] );
    } catch (error) {
        console.log(error)
    }
}

app();

// console.log('Este codigo no se bloquea');






// setTimeout(function(){
//     console.log('Set Timeout....')
// },5000)