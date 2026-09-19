let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//constantes
const anchoGato = 40
const altoGato = 80

const anchoComida = 10
const altoComida = 10

//variables


let gatoX = 0
let gatoY = 0

let comidaX = 0
let comidaY = 0

function graficarGato(){
   
    graficarRectangulo(gatoX,gatoY,anchoGato,altoGato,"pink");
} 

function graficarComida(){
    
    graficarRectangulo(comidaX,comidaY,anchoComida,altoComida,"blue");
}

function iniciarJuego(){
    gatoX = canvas.width/2
    gatoY = canvas.height/2
    comidaX = canvas.width-100
    comidaY = canvas.height-100

    actualizarPantalla();
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
    detectarColision();
}

function moverDerecha(){
    gatoX = gatoX + 10
    actualizarPantalla();
    detectarColision();
}

function moverArriba(){
    gatoY = gatoY - 10
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY = gatoY + 10
    actualizarPantalla();
    detectarColision();
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let puntos = 0

function detectarColision(){
    if(
    gatoX < comidaX + anchoComida &&
    gatoX + anchoGato > comidaX &&
    gatoY < comidaY + altoComida &&
    gatoY + altoGato > comidaY) 

    {    alert("te la comiste >;)")

        comidaX = numeroAleatorio(0, canvas.width)
        comidaY = numeroAleatorio(0, canvas.height)

        actualizarPantalla();

        puntos = puntos + 1

        mostrarTextoSpan( "puntos" , puntos );

    }
}

let segundos = 10

function restarTiempo(){

    segundos = segundos - 1

    mostrarTextoSpan( "tiempo", segundos );
}

const tiempo = setInterval(()=>
    {
        restarTiempo();


        if (segundos == 0) {
            clearInterval(tiempo);
            alert("Juego Terminado!!");
        }
    } , 1000
);

const revisarPuntaje = setInterval(()=>
    {

        if (puntos == 6) {
            clearInterval(tiempo);
            alert("Ganaste");
        }
    } , 1000
);

function reiniciarJuego(){

    
    if (segundos == 0)
    {
        const tiempo = setInterval(()=>
    {
        restarTiempo();


        if (segundos == 0) {
            clearInterval(tiempo);
            alert("Juego Terminado!!");
        }
    } , 1000
);
    }
segundos = 10

    puntos = 0

    iniciarJuego();

    mostrarTextoSpan( "puntos" , puntos );
    mostrarTextoSpan( "tiempo", segundos );

}

function desaparecerPersonaje(){
    context.clearRect(gatoX,gatoY,anchoGato,altoGato)
}

