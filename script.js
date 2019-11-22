let botonEmpezar = document.querySelector("#botonPlay")
let puntaje = document.querySelector("#puntaje")
let puntos = 0
let $intentos = document.querySelector("#intentos")
let intentos = 0
let textoArriba = document.querySelector("#textoarriba")
let gameover = document.querySelector("#gameover")
let cuadrados = document.querySelector("#cuadrados")




let numeroRandom = function () {   //funcion que genera los numeros random para los cuadrados

    return Math.floor(Math.random() * (5 - 1)) + 1;

}



// variables globales necesarias

let numeroRandomVar = 0 // Para ir agregando al array la cantidad necesaria
let numerosSorteados = [] // Da la combinacion de cuadrados que salieron.
let cantidadDeClicksAutomaticos = 0; // Para ir agregando mas dificultad en los niveles ( mas clicks)

// Inicio del juego, se crea un array que contiene el numero de cada cuadrado.
// El boton empezar tiene la funcion en el html para iniciar fase1

let fase1 = function () {
    
    textoArriba.style.display ="block"
    cuadrados.style.display = "block" 
    gameover.textContent = ""
    numerosSorteados = []
    $intentos.textContent = "Intentos: " + intentos
    botonEmpezar.style.display= "none"
    textoArriba.display= "true"
    textoArriba.textContent = "PRESTA ATENCION"
    textoArriba.style.color = "RED"

    let intervalo = setInterval(() => {

        numeroRandomVar = numeroRandom()
    

        if (numerosSorteados.length > cantidadDeClicksAutomaticos) {
            clearInterval(intervalo)
            return
        }

        else if (numeroRandomVar == 1) {
            bloque1.style.backgroundColor = "rgba(0, 0, 255, 1)"; 
            bloque1.style.border = "thick solid black"
            bloque1.textContent = numerosSorteados.length + 1
            setTimeout(function () {
                bloque1.style.backgroundColor = "rgba(0, 0, 255, 0.9)";
                bloque1.textContent = "";
                bloque1.style.border = "none"
                
            }, 1000)

        }
        else if (numeroRandomVar == 2) {
            bloque2.style.backgroundColor = "rgba(255, 0, 0, 1)";
            bloque2.style.border = "thick solid black"
            bloque2.textContent = numerosSorteados.length + 1
            setTimeout(function () {
                bloque2.style.backgroundColor = "rgba(255, 0, 0, 0.9)"
                bloque2.textContent = "";
                bloque2.style.border = "none"
            }, 1000)
        }
        else if (numeroRandomVar == 3) {
            bloque3.style.backgroundColor = "rgba(0,255,0, 1)";
            bloque3.style.border = "thick solid black"
            bloque3.textContent = numerosSorteados.length + 1
            setTimeout(function () {
                bloque3.style.backgroundColor = "rgba(0,255,0, 0.9)"
                bloque3.textContent = ""
                bloque3.style.border = "none"
            }, 1000)
        }
        else if (numeroRandomVar == 4) {
            bloque4.style.backgroundColor = "rgba(255,255,0, 1)";
            bloque4.style.border = "thick solid black"
            bloque4.textContent = numerosSorteados.length + 1   
            setTimeout(function () {
                bloque4.style.backgroundColor = "rgba(255,255,0, 0.9)"
                bloque4.textContent = ""
                bloque4.style.border = "none"
            }, 1000)
        }
        numerosSorteados.push(numeroRandomVar)
        if(cantidadDeClicksAutomaticos + 1 == numerosSorteados.length)
        {
            textoArriba.textContent = "TU TURNO"
            textoArriba.style.color = "GREEN"
        }
    }, 2000);

}

//hasta aca fue la primera parte donde salen elegidos al azar cada cuadradado.

// ahora es la parte donde le usuario empeieza a hacer clicks 

//variables globales fase 2
 
let numerosSeleccionados = []  // Array que va generando el usuario para luego compararlo con el que se genero aleatoriamente.
let clickHecho = -1  // para ir verificando si va bien o si perdio mientras va ingresando clicks.



let siguienteNivelResetearVariables = function(){ // funcion que se ejecuta si gana, reseteando las variables globales y agregando mas cantidad de clicks random (mayor dificultad)
   
    cantidadDeClicksAutomaticos = cantidadDeClicksAutomaticos + 1
    numerosSorteados = []
    numerosSeleccionados = []
    clickHecho = -1
    
}

let perdisteEmpezarDeNuevo = function() // funcion que se ejecuta si el usuario comete un error (pierde), resetea todo y empieza de nuevo.
{
    textoArriba.style.display ="none"
    cuadrados.style.display = "none" 
    gameover.textContent = "GAME OVER"
    intentos = intentos + 1
    $intentos.textContent = "Intentos: " + intentos
    botonEmpezar.style.display= "block"
    puntos = 0;
    puntaje.textContent = "Puntaje: "  + puntos


    
    siguienteNivelResetearVariables()
    cantidadDeClicksAutomaticos = 0
}


// Aca van las 4 funciones correspondientes cada una a un cuadrado, cada vez que apreta uno, agrega el numero respectivo al array y lo compara con el aleatorio, si va bien sigue hasta ganar, si no coincide pierde.

let click1 = function () {

    
    clickHecho++
    numerosSeleccionados.push(1)
    console.log(numerosSeleccionados)

    puntos = puntos + 100 
    puntaje.textContent = "Puntaje: "  + puntos

    if (numerosSorteados.length == numerosSeleccionados.length && (JSON.stringify(numerosSeleccionados)==JSON.stringify(numerosSorteados)))
    {
        siguienteNivelResetearVariables()
        fase1()
    }

    else if (numerosSorteados[clickHecho] != numerosSeleccionados[clickHecho]){
        perdisteEmpezarDeNuevo()
    }
}
       

let click2 = function () {

    
    clickHecho++
    numerosSeleccionados.push(2)
    console.log(numerosSeleccionados)
    puntos = puntos + 100 
    puntaje.textContent = "Puntaje: "  + puntos

    if (numerosSorteados.length == numerosSeleccionados.length && (JSON.stringify(numerosSeleccionados)==JSON.stringify(numerosSorteados)))
    {
        siguienteNivelResetearVariables()
        fase1()
    }
    else if (numerosSorteados[clickHecho] != numerosSeleccionados[clickHecho]){
        perdisteEmpezarDeNuevo()
    }
  
}
let click3 = function () {

    clickHecho++
    numerosSeleccionados.push(3)
    console.log(numerosSeleccionados)
    puntos = puntos + 100 
    puntaje.textContent = "Puntaje: "  + puntos

    
    if (numerosSorteados.length == numerosSeleccionados.length && (JSON.stringify(numerosSeleccionados)==JSON.stringify(numerosSorteados)))
    {
        siguienteNivelResetearVariables()
        fase1()
    }


    else if (numerosSorteados[clickHecho] != numerosSeleccionados[clickHecho]){
        perdisteEmpezarDeNuevo()
    }
}
let click4 = function () {


    clickHecho++
    numerosSeleccionados.push(4)
    console.log(numerosSeleccionados)
    puntos = puntos + 100 
    puntaje.textContent = "Puntaje: "  + puntos
    if (numerosSorteados.length == numerosSeleccionados.length && (JSON.stringify(numerosSeleccionados)==JSON.stringify(numerosSorteados)))
    {
        siguienteNivelResetearVariables()
        fase1()
    }
    else if (numerosSorteados[clickHecho] != numerosSeleccionados[clickHecho]){
        perdisteEmpezarDeNuevo()
    }
}


