let numeroSecreto = 0;
let intentos = 0;
let listanumerossorteados =[];
let numeromaximo = 20;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento() {
    let numerousuario = parseInt(document.getElementById('valorusuario').value);
    if(numerousuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${ intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numerousuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    let valorcaja = document.querySelector('#valorusuario').value = '';
}

function numeroaleatorio(){
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numerogenerado);
    console.log(listanumerossorteados);

    if(listanumerossorteados.length == numeromaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

    if(listanumerossorteados.includes(numerogenerado)){
        return numeroaleatorio();
    }else{
        listanumerossorteados.push(numerogenerado);
        return numerogenerado
    }
    }
}
function condicionesiniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Seleciona un numero del 1 al ${numeromaximo}`);
    numeroSecreto = numeroaleatorio();
    intentos = 1;
}

function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();

