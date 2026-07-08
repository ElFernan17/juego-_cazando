let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//constantes
const anchoGato = 20
const altoGato = 40
const anchoComida = 10
const altoComida = 10

//variables
let gatoX = canvas.width/2
let gatoY = canvas.height/2
let comidaX = 490
let comidaY = 490

function dibujarGato(){
    context.fillStyle = "orange"
    context.fillRect(gatoX,gatoY,anchoGato,altoGato)
} 

function dibujarComida(){
    context.fillStyle = "red"
    context.fillRect(comidaX,comidaY,anchoComida,altoComida)
}

function iniciarJuego(){
    dibujarComida();
    dibujarGato();
}