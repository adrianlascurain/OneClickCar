const btnLogin = document.getElementById("btnLogIn");

const txtEmail = document.getElementById("correo-ipt")
const txtPassword = document.getElementById("password-ipt");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//función RegExp
const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
//bandera
let isValid = true;

btnLogin.addEventListener("click", function (event) {
    event.preventDefault();
    txtEmail.style.border = "";
    txtPassword.style.border = "";
    alertValidaciones.style.display = "none";
    alertValidacionesTexto.innerHTML = "";
    isValid = true;
    //Validación Email -- RegExp
    if (!emailRegex.test(txtEmail.value)) {
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El <strong>CORREO</strong> no es correcto <br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //cierre validación Email

    //validación contraseña
    if (txtPassword.value.length < 8) {
        txtPassword.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML += "La <strong>CONTRASEÑA</strong> no es correcta";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //cierre validación contraseña


    //todo correcto
    if (isValid) {
        btnLogin.value = "Iniciar sesión";
        txtEmail.value = "";
        txtPassword.value = "";

    }

}); //cierre btnLogin