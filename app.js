// VARIABLES DECLARADAS
let numMaximo = 10;
let numeroSecreto = 0;
let intentos = 1;
let listaNumSorteados = [];
//FUNCION PARA HACER USO DEL PARRAFO DE MANERA DINAMICA
function asignarTextoAelemento (elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

//GENERA UN NUMERO ALEATORIO
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numMaximo) + 1;

    console.log (numeroGenerado);
    console.log (listaNumSorteados);
    if (listaNumSorteados.length == numMaximo){
        asignarTextoAelemento ('p', 'No hay más números para sortear');
    }
    else{
        if (listaNumSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};
// VERIFICA QUE EL NUMERO INGRESADO POR EL USUARIO SEA IGUAL AL GENERADO
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log (intentos);
    if (numeroUsuario === numeroSecreto){
    asignarTextoAelemento('p', `¡Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} !`); 
    document.getElementById ('reiniciar').removeAttribute('disabled');
}
        else {
            if (numeroUsuario < numeroSecreto){
            asignarTextoAelemento('p','El número secreto es mayor')    
        }
        else {
            asignarTextoAelemento('p','El número secreto es menor')
        }
        intentos++;
        LimpiarCja();
};
return
};
//LIMPIA LA CAJA PARA NO HACER QUE EL JUGADOR TENGA QUE LIMPIARLA
function LimpiarCja(){
    document.querySelector('#valorUsuario').value = '';
}
//LAS CONDICIONES DEL JUEGO A LAS PREDETERMINADAS
function condiIniciales(){
    asignarTextoAelemento ('h1', 'JUEGO DEL NÚMERO SECRETO');
asignarTextoAelemento ('p',  `Indica un numero entre el 1 y el ${numMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    
}
// REINICIA EL JUEGO A LAS CONDICIONES INICIALES
function reiniciarJuego(){
    //limpiar caja
    LimpiarCja();
    //indicar el intervalo
    //reiniciar intentos
    //generar un nuevo numero secreto
    condiIniciales();
    //deshabilitar el boton de nuevo juego  
    document.getElementById ('reiniciar').setAttribute('disabled', 'true');
    console.log (numeroSecreto);
}

condiIniciales();
