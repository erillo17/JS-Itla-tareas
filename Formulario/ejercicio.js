console.log('Hola')

// accion para obtener el formulario
const miFormulario = document.querySelector("#my-form")

function eventoSubmit(evento) {
    // Quitar comportamiento por defecto del evento
    evento.preventDefault()

    // Desde aqui va mi logica para el evento...
    
    // Obtener los inputs del formulario
    const inputs = evento.target.elements;

    // Obtener los valos de los inputs
    const contenido = inputs["contenido"].value;
    const height =  inputs["height"].value;
    const width = inputs["width"].value;

    // Cambiar texto de la caja
    const elementoCaja = document.querySelector("#caja")
    elementoCaja.textContent = contenido;

    // Cambiar ancho de la caja
    elementoCaja.style.width = width + 'px'

    // Cambiar altura de la caja
    elementoCaja.style.height = height + 'px'
}


miFormulario.addEventListener("submit", eventoSubmit)
// eventoSubmit(evento)