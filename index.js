
const modal = document.getElementById("modal")
const botonDeAbrirModal = document.getElementById("abrir-modal")
const botonCerrarModal = document.getElementById("cerrar-modal")

const mostrarModal = () => {
  modal.style.display = "block"
}

botonDeAbrirModal.onclick = mostrarModal

const CerrarModal = () => {
    modal.style.display = "none"
}

botonCerrarModal.onclick = CerrarModal