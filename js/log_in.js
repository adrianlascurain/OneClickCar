

// navbar active
let navLogIn = document
.getElementById("navLogIn")
.classList.add("active");

// elementos DOM
const btnLogin = document.getElementById("btnLogIn");

const txtEmail = document.getElementById("correo-ipt")
const txtPassword = document.getElementById("password-ipt");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//bandera
let isValid = true;


//Validaciones al dar click en botón "Iniciar sesión"
btnLogin.addEventListener("click", function (event) {
    event.preventDefault();
    txtEmail.style.border = "";
    txtPassword.style.border = "";
    alertValidaciones.style.display = "none";
    alertValidacionesTexto.innerHTML = "";
    isValid = true;

    //Email vacío
    if (txtEmail.value.trim() === "") {
        txtEmail.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El <strong>CORREO</strong> no puede estar vacío<br>";
        alertValidaciones.style.display = "block";
        isValid = false;

    }//if email vacío

    //Contraseña vacía
    if (txtPassword.value.trim() === "") {
        txtPassword.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "La <strong>CONTRASEÑA</strong> no puede estar vacía <br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }//if password va

    //Autenticación 
    if (isValid) {
        const email = txtEmail.value.trim();
        const password = txtPassword.value.trim();

        //Validación de usuario en localStorage
        const usuario = localStorage.getItem("userCredentials");

        if (usuario) {
            //pasar a objeto
            const usuarioObj = JSON.parse(usuario);

            //verificar contraseña
            if (usuarioObj.password === password) {
                txtEmail.value = "";
                txtPassword.value = "";
                // Identificador usuario loggeado-actual
                sessionStorage.setItem("id_user_logged", "2");
                window.location.href = "../index.html";
            } else {
                Swal.fire({
                    title: "Credenciales inválidas",
                    text: "Por favor, ingrese un correo y contraseña válidos",
                    icon: "error",
                }); //cierre msj error
                
                txtEmail.style.border = "solid red medium";
                txtPassword.style.border = "solid red medium";
                alertValidacionesTexto.innerHTML += "Las <strong>CREDENCIALES</strong> son incorrectas";
                alertValidaciones.style.display = "block";
            }//else password !===


        } else {
            Swal.fire({
                title: "Credenciales inválidas",
                text: "Por favor, ingrese un correo y contraseña válidos",
                icon: "error",
            }); //cierre msj error

            txtEmail.style.border = "solid red medium";
            txtPassword.style.border = "solid red medium";
            alertValidacionesTexto.innerHTML += "Las <strong>CREDENCIALES</strong> son incorrectas";
            alertValidaciones.style.display = "block";
        }//else usuario existente

    }//if isValid


}); //cierre btnLogin