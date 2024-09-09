// Implementa una función de JavaScript que valide los tipos de entrada y la corrección cuando se presiona el botón Enviar
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9XWPUGj3d1O00oX7k");


const btnSubmit = document.getElementById("btnSubmitMensaje");
const txtNombre = document.getElementById("name-ipt");
const txtNumber = document.getElementById("tel-ipt");
const txtEmail = document.getElementById("correo-ipt");
const txtMensaje = document.getElementById("coment-ipt")
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
// funciones RegExp
const telefonoRegex = /^\d{10}$/;
const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
// bandera
let isValid = true;


btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtEmail.style.border = "";
    alertValidaciones.style.display = "none";
    alertValidacionesTexto.innerHTML = "";
    isValid = true;
    // Validación nombre usuario
    if (txtNombre.value.length < 2) {
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML = "El <strong> NOMBRE </strong> no es correcto. <br>"
        alertValidaciones.style.display = "block"
        isValid = false;
    } //cierre validación nombre usuario

    // Validación número de teléfono --RegExp
    if (!telefonoRegex.test(txtNumber.value)) {
        txtNumber.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El <strong> TELÉFONO </strong> no es correcto <br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }
    // Validación correo --RegExp
    if (!emailRegex.test(txtEmail.value)) {
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El <strong>CORREO</strong> no es correcto";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    //todo correcto
    if (isValid) {
        btnSubmit.value = 'Enviando...';
        //construcción objeto JSON
        const templateObject = {
            from_name: txtNombre.value,
            to_name: "OneClickCar",
            message: txtMensaje.value,
            phone_number: txtNumber.value,
            email: txtEmail.value
        }; //cierre template JSON

        const serviceID = 'OneClickCar_contacto';
        const templateID = 'formulario_contacto'

        emailjs.send(serviceID, templateID, templateObject)
            .then(() => {
                btnSubmit.value = 'Enviar Mensaje';
                // limpiar datos
                txtNombre.value="";
                txtNumber.value="";
                txtEmail.value="";
                txtMensaje.value="";
                Swal.fire({
                    title: "Mensaje enviado correctamente",
                    text: "Uno de nuestros agentes se comunicará contigo a la brevedad",
                    icon: "success"
                }); //cierre msj success

            }, (err) => {
                btnSubmit.value = 'Enviar Mensaje';
                Swal.fire({
                    title: "Error al enviar mensaje",
                    text: "Ocurrió un problema, probar más tarde",
                    icon: "error"
                }); // cierre msj error
            });
    } //cierre IsValid


}); //cierre btnSubmit

}); //cierre total
