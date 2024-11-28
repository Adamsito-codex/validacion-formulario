function SubmitEvent(event){
    if (!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )

    }
}

document.getElementById("formulario").addEventListener("submit", SubmitEvent);

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]');

    let validacionCorrecta = true;

    camposTexto.forEach(campo =>{
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        // chartAt le brindamos la posicion de la letra a cambiar poniendo la masyuscula con toUpperCase
        // y con slice se va a seleccionar el resto con slice manteniendo como era originalmente
        if(campo.value.length == ""){
            mostrarError(errorCampo, "este campo es requerido");
            validacionCorrecta = false;
        }else if(campo.value.length >0 && campo.value.length < 3){
            mostrarError(errorCampo, "este campo debe tener al menos 3 caracteres");
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo)
        }
    })

    // esto valida el email
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail")

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // este regex valida que el formato del mail sea correcto o incorrecto devolviendo un true o false
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail, "ingrese un correo electronico valido!");
    }

    // esto valida la edad
    let edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");
    
    if(edad.value <= 17){
        mostrarError(errorEdad, "para lograr digitar este formato debes ser mayor de edad");
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }

    // esto va a validar la actividad

    let actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");

    if(actividad.value == ""){
        mostrarError(errorActividad, "porfavor seleccione la actividad que ejerce.")
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

        // esto va a validar los estudios

    let nivelEstudio = document.getElementById("nivelEstudio");
    let errorNivelEstudio = document.getElementById("errorNivelEstudio");

    if(nivelEstudio.value == ""){
        mostrarError(errorNivelEstudio, "porfavor seleccione su nivel de estudios")
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio);
    }

    // esto va a validar los terminos

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!')
        validacionCorrecta = false
    } else {
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta // indicara si el formulario es valido o o no
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block"
}

const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none"
}