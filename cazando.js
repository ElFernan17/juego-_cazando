let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

function graficarGato(){
    context.fillStyle = "orange"
    context.fillRect(canvas.width/2,canvas.height/2,15,30)
} 