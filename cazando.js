let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//constantes
const anchoGato = 20
const altoGato = 40
const anchoComida = 10
const altoComida = 10

//variables
let gatoX = 0
let gatoY = 0
let comidaX = 0
let comidaY = 0

function graficarGato(){
   
    graficarRectangulo(gatoX,gatoY,anchoGato,altoGato,"orange");
} 

function graficarComida(){
    
    graficarRectangulo(comidaX,comidaY,anchoComida,altoComida,"red");
}

function iniciarJuego(){
    gatoX = canvas.width/2
    gatoY = canvas.height/2
    comidaX = canvas.width-10
    comidaY = canvas.height-10

    graficarComida();
    graficarGato();
}


function graficarRectangulo(x,y,ancho,alto,color){
    let xFloat = parseFloat(x);
    let yFloat = parseFloat(y);
    let anchoFloat = parseFloat(ancho);
    let altoFloat = parseFloat(alto);

    context.fillStyle = color
    context.fillRect(xFloat,yFloat,anchoFloat,altoFloat)
}

function limpiarCanva(){
    context.clearRect(0,0,500,500)
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverIzquierda(){
    gatoX = gatoX - 10
    actualizarPantalla();
}