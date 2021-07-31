
// const modal = document.getElementById("modal")
// const botonDeAbrirModal = document.getElementById("abrir-modal")
// const botonCerrarModal = document.getElementById("cerrar-modal")

// const mostrarModal = () => {
//   modal.style.display = "block"
// }

// botonDeAbrirModal.onclick = mostrarModal

// const CerrarModal = () => {
//     modal.style.display = "none"
// }

// botonCerrarModal.onclick = CerrarModal


// Hacela punto por punto. No trates de resolver todo a la vez.

// Vamos a crear una página para jugar a resolver una pregunta . Se espera que la misma:

// 1) Tenga dos span. El primero con una pregunta, o adivinanza. El segundo inicialmente estará vacío. 
// Que tenga tres botones con posibles respuestas. 
// 2) Al clickear la respuesta correcta, el botón debe ponerse de color verde 
// 3) Una vez logrado 3, que ademas el texto del segundo span se actualice mostrando ¡Respuesta correcta!; 
// 4) Una vez logrado el punto 3, si se clickea una respuesta incorrecta, se debe mostrar el botón con la respuesta 
// correcta con un color de fondo verde y los otros dos con un color de fondo rojo. 
// 5) Una vez logrado el punto 4, el texto del segundo span debe actualizarse mostrando ¡Respuesta equivocada!.

const botonRespuestaIncorrecta1 = document.getElementById ("opcion1")
const botonRespuestaCorrecta = document.getElementById ("opcion2")
const botonRespuestaIncorrecta2 = document.getElementById ("opcion3")
const mensajeRespuestaCorrectaOIncorrecta = document.getElementById ("mensaje")

const usuarioSeleccionoRespuestaCorrecta = () =>{
    botonRespuestaCorrecta.style.backgroundColor = "green"
    mensajeRespuestaCorrectaOIncorrecta.textContent = " ¡Respuesta correcta!"
    botonRespuestaIncorrecta1.style.backgroundColor ="red"
    botonRespuestaIncorrecta2.style.backgroundColor ="red"
    
}

const usuarioSeleccionoRespuestaIncorrecta1 = () => {
    botonRespuestaIncorrecta1.style.backgroundColor= "red"
    mensajeRespuestaCorrectaOIncorrecta.textContent = "Respuesta equivocada!."
    botonRespuestaCorrecta.style.backgroundColor = "green"
    botonRespuestaIncorrecta2.style.backgroundColor= "red"
}


const usuarioSeleccionoRespuestaIncorrecta2 = () => {
    botonRespuestaIncorrecta2.style.backgroundColor= "red"
    botonRespuestaCorrecta.style.backgroundColor = "green"
    botonRespuestaIncorrecta1.style.backgroundColor= "red"
    mensajeRespuestaCorrectaOIncorrecta.textContent = "Respuesta equivocada!."
}


botonRespuestaCorrecta.onclick = usuarioSeleccionoRespuestaCorrecta
botonRespuestaIncorrecta1.onclick = usuarioSeleccionoRespuestaIncorrecta1
botonRespuestaIncorrecta2.onclick = usuarioSeleccionoRespuestaIncorrecta2