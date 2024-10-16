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

function validatePassword(emailInserted, passwordInserted) {



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": emailInserted,
  "password": passwordInserted
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/api/login/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.accessToken!=null){
    console.log(result);
    sessionStorage.setItem("token", result.accessToken);
      sessionStorage.setItem("user", emailInserted);
      txtEmail.value = "";
    txtPassword.value = "";
      recoverNameId(emailInserted);
    }
    else {
          
                Swal.fire({
                    title: "Credenciales inválidas",
                    text: "Por favor, ingrese un correo y contraseña válidos",
                    icon: "error",
                }); //cierre msj error
                
                txtEmail.style.border = "solid red medium";
                txtPassword.style.border = "solid red medium";
                alertValidacionesTexto.innerHTML += "Las <strong>CREDENCIALES</strong> son incorrectas";
                alertValidaciones.style.display = "block";
    }
   })
  .catch((error) => {
    console.error(error); 

  });

}

function recoverNameId(emailUser){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

fetch(`http://localhost:8080/api/users/email/${emailUser}`, requestOptions)
  .then((response) => response.json())
  .then((userData) => {
    // if (userData != null) {
      console.log(userData);
    sessionStorage.setItem("fullName", JSON.stringify(userData.fullName));
    sessionStorage.setItem("idUser", JSON.stringify(userData.idUser));
     window.location.href = "../index.html";
    // } else { console.error("No fue posible leer las credenciales del usuario" + error) }

  }).catch((error) => console.error(error));


  }

    
   

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

      // Aquí llamar a validatePassword(email, password)
      validatePassword(email, password);

        //Validación de usuario en localStorage
        const usuario = localStorage.getItem("userCredentials");

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

    


}); //cierre btnLogin