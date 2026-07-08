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
   
    dibujarRectangulo(gatoX,gatoY,anchoGato,altoGato,"orange");
} 

function dibujarComida(){
    
    dibujarRectangulo(comidaX,comidaY,anchoComida,altoComida,"red");
}

function iniciarJuego(){
    dibujarComida();
    dibujarGato();
}

function dibujarRectangulo(x,y,ancho,alto,color){
    let xFloat = parseFloat(x);
    let yFloat = parseFloat(y);
    let anchoFloat = parseFloat(ancho);
    let altoFloat = parseFloat(alto);

    context.fillStyle = color
    context.fillRect(xFloat,yFloat,anchoFloat,altoFloat)
}