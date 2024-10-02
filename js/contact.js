// esperar a que todo el contenido de la página se cargue
window.onload = function () {
  const iframe = document.querySelector('.maps iframe');
  iframe.classList.add('loaded');
};


let navContact = document
  .getElementById("navContact")
  .classList.add("active");

// Implementa una función de JavaScript que valide los tipos de entrada y la corrección cuando se presiona el botón Enviar
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("9XWPUGj3d1O00oX7k");

  const btnSubmit = document.getElementById("btnSubmitMensaje");
  const txtNombre = document.getElementById("name-ipt");
  const txtNumber = document.getElementById("tel-ipt");
  const txtEmail = document.getElementById("correo-ipt");
  const txtMensaje = document.getElementById("coment-ipt");
  const alertValidaciones = document.getElementById("alertValidaciones");
  const alertValidacionesTexto = document.getElementById(
    "alertValidacionesTexto"
  );
  // funciones RegExp
  const nameRegex = /^[A-Za-z\s]{2,}$/; //(solo letras, con un mínimo de 2 caracteres)
  const telefonoRegex = /^(?!([0-9])\1{5,9})(?!.*000{4,})([2-9]\d{1}\d{8})$/;
  const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  // bandera
  let isValid = true;


  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";
    alertValidaciones.style.display = "none";
    alertValidacionesTexto.innerHTML = "";
    isValid = true;
    // Validación nombre usuario
    if (!nameRegex.test(txtNombre.value)) {
      txtNombre.style.border = "solid red medium";
      alertValidacionesTexto.innerHTML +=
        "El <strong> NOMBRE </strong> no es correcto. <br>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } //if txtNombre

    // Validación número de teléfono --RegExp
    if (!telefonoRegex.test(txtNumber.value)) {
      txtNumber.style.border = "solid red medium";
      alertValidacionesTexto.innerHTML +=
        "El <strong> TELÉFONO </strong> no es correcto <br>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } //if txtNumber

    // Validación correo --RegExp
    if (!emailRegex.test(txtEmail.value)) {
      txtEmail.style.border = "solid red medium";
      alertValidacionesTexto.innerHTML +=
        "El <strong>CORREO</strong> no es correcto <br>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } //if txtEmail

    //Validación caja de comentario
    if (txtMensaje.value.trim() === "") {
      txtMensaje.style.border = "solid red medium";
      alertValidacionesTexto.innerHTML += "El <strong> COMENTARIO </strong> no puede estar vacío.";
      alertValidaciones.style.display = "block";
      isValid = false;
    } //if txtMensaje

    //todo correcto
    if (isValid) {
      btnSubmit.value = "Enviando...";
      //construcción objeto JSON
      const templateObject = {
        from_name: txtNombre.value,
        to_name: "OneClickCar",
        message: txtMensaje.value,
        phone_number: txtNumber.value,
        email: txtEmail.value,
      }; //cierre template JSON

      const serviceID = "OneClickCar_contacto";
      const templateID = "formulario_contacto";

      emailjs.send(serviceID, templateID, templateObject).then(
        () => {
          btnSubmit.value = "Enviar Mensaje";
          // limpiar datos
          txtNombre.value = "";
          txtNumber.value = "";
          txtEmail.value = "";
          txtMensaje.value = "";
          Swal.fire({
            title: "Mensaje enviado correctamente",
            text: "Uno de nuestros agentes se comunicará contigo a la brevedad",
            icon: "success",
          }); //cierre msj success
        },
        (err) => {
          btnSubmit.value = "Enviar Mensaje";
          Swal.fire({
            title: "Error al enviar mensaje",
            text: "Ocurrió un problema, probar más tarde",
            icon: "error",
          }); // cierre msj error
        }//cierre err
      ); //then
    } //cierre IsValid
  }); //cierre btnSubmit
}); //cierre total
