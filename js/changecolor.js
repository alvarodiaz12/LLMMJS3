let cab = document.getElementById("Cabecera");
cab.style.background = "black";
cab.innerHTML = "La página se encuentra en desarrollo";
cab.style.color = "#008080";
cab.style.textAlign = "center";

let colorTitulo = document.querySelector("h1");
function cambiarColor(){
colorTitulo.style.color = "red";
}

let subtitulo = document.getElementsByTagName("h2");
subtitulo[0].innerHTML = "Contenido del subtítulo";

let destacar = document.getElementsByClassName("destacado");
destacar[0].style.color = "blue";

let ej1 = document.querySelector("h2");
ej1.innerHTML = "¡Esto es un QuerySelector!"

let fecha = new Date();
let subcab = document.querySelectorAll("h2");
let cambioReloj = setInterval(
  ()=>{
    fecha = new Date();
    subcab[1].innerHTML = fecha.toLocaleTimeString() + " - " + fecha.toLocaleDateString() + " - " + fecha.toLocaleDateString('esp-Spain', { weekday: 'long' });
  },
1000);

let imagen = document.getElementsByTagName("img");
function cambiarImagen(){
  imagen[0].src= "images/Switch2.webp";
}

setInterval(function() {
  if (confirm("¿Desea continuar en esta página?")) {
  } else {
    window.location.href = "https://www.google.com/";
  }
}, 180000);


let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo= document.getElementById('btnamarillo');
let btnNaranja = document.getElementById('btnnaranja');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');

function setEnterRojo(){
  btnRojo.style.background = "#0000FF"
}

function setLeaveRojo(){
  btnRojo.style.background = "#FF0000"
}

function setDownRojo(){
  btnRojo.style.background = "#00FF00"
}

function setEnterVerde(){
  btnVerde.style.background = "#0000FF"
}

function setLeaveVerde(){
  btnVerde.style.background = "#FF0000"
}

function setDownVerde(){
  btnVerde.style.background = "#00FF00"
}

function setEnterAzul(){
  btnAzul.style.background = "#0000FF"
}

function setLeaveAzul(){
  btnAzul.style.background = "#FF0000"
}

function setDownAzul(){
  btnAzul.style.background = "#00FF00"
}

function setEnterAmarillo(){
  btnAmarillo.style.background = "#0000FF"
}

function setLeaveAmarillo(){
  btnAmarillo.style.background = "#FF0000"
}

function setDownAmarillo(){
  btnAmarillo.style.background = "#00FF00"
}

function setEnterNaranja(){
  btnNaranja.style.background = "#0000FF"
}

function setLeaveNaranja(){
  btnNaranja.style.background = "#FF0000"
}

function setDownNaranja(){
  btnNaranja.style.background = "#00FF00"
}

function setEnterReset(){
  btnReset.style.background = "#0000FF"
}

function setLeaveReset(){
  btnReset.style.background = "#FF0000"
}

function setDownReset(){
  btnReset.style.background = "#00FF00"
}

function setColorRojo() {
  if(btnRojo.value == "rojo") {
    box.style.background = "#FF0000";
  }
}

function setColorVerde() {
  if(btnVerde.value == "verde") {
    box.style.background = "#00FF00";
  }
}

function setColorAzul() {
  if(btnAzul.value == "azul") {
    box.style.background = "#0000FF";
  }
}

function setColorAmarillo() {
  if(btnAmarillo.value == "amarillo") {
    box.style.background = "#FFFF00";
  }
}

function setColorNaranja() {
  if(btnNaranja.value == "naranja") {
    box.style.background = "#ff8000";
  }
}

function setColorReset() {
  if(btnReset.value == "reset") {
    box.style.background = "#000000";
  }
}



