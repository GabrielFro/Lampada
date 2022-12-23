
const img = document.getElementById("lamp");
const on = document.getElementById("on");
const off = document.getElementById("off");





function isQuebrada(){
    return lamp.src.indexOf('quebrada')>-1;
}

function ligada(){
    if(!isQuebrada()){
        lamp.src='img/ligada3.png';
        
    }
}

function desligada(){
    if(!isQuebrada()){
       lamp.src='img/desligada.png';
    }
}

function quebrada(){
    if(!isQuebrada()){
        lamp.src='img/quebrada.png';
    }
}

on.addEventListener('click', ligada);
off.addEventListener('click', desligada);
Lampada.addEventListener('mouseover',ligada);
Lampada.addEventListener('mouseleave',desligada);
Lampada.addEventListener('click', quebrada);

