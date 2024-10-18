
// nav bar active
let navSignIn = document
.getElementById("navSignIn")
.classList.add("active");

// Expresión regular para validar la contraseña 
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_#*?&])[A-Za-z\d@$!%_#*?&]{8,}$/;  
// Expresión regular para validar el teléfono 
const phoneRegex = /^(?!([0-9])\1{5,9})(?!.*000{4,})([2-9]\d{1}\d{8})$/;
// Expresión regular para validar el nombre (solo letras, con un mínimo de 2 caracteres)
const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
// Expresión regular para validar el correo electrónico
const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

// Función para mostrar sweet alert de éxito
function alertSuccess(titleShow, textShow) {
  Swal.fire({
    title: titleShow,
    text: textShow,
    imageUrl:
      "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
    imageWidth: 350,
    imageHeight: 200,
    imageAlt: "Custom image",
    icon: "success",
  }); //function alertSuccess()
}

// Función para mostrar sweet alert de error
function alertFailure(titleShow, textShow) {
  Swal.fire({
    title: titleShow,
    text: textShow,
    imageAlt: "Custom image",
    icon: "error",
  });
} //function alertFailure()

function addNewUser(raw){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://3.16.180.62/api/users/", requestOptions)
  .then((response) => response.json())
  .then((user) => {
    
    if (user.idUser != null) {
      document.getElementById('userForm').reset();
      // Mostrar mensaje de éxito
      alertSuccess('Registro exitoso', 'Felicidades has creado una nueva cuenta, ahora puedes dirigirte a iniciar sesión.');
        // Reiniciar el formulario una vez que el usuario cierra la alerta de éxito

    } else {
      alertFailure("Registro fallido", `El email ${user.email} ya se encuentra registrado, prueba con otro.`);
    }
   })
  .catch((error) => console.error(error));

}

document.getElementById('btnSignIn').addEventListener('click', function (e) {
    e.preventDefault();  // Evita que el formulario se envíe automáticamente

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('inputPassword2').value;
    const confirmPassword = document.getElementById('inputPassword6').value;
  const userType = "client";
  const birthdate = document.getElementById('birthdate').value;

    // Validar nombre
  if (!nameRegex.test(name)) {
    alertFailure('Nombre inválido','El nombre debe contener al menos 2 letras y solo puede incluir letras.');
        return;}

    // Validar teléfono
  if (!phoneRegex.test(phone)) {
    alertFailure('Teléfono inválido','El teléfono debe contener solo dígitos y tener 10 caracteres.');
        return;}

    // Validar correo electrónico
  if (!emailRegex.test(email)) {
    alertFailure('Correo Electrónico inválido','Por favor, ingresa un correo electrónico válido.');
        return;}

    // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    alertFailure('Error de contraseña','Las contraseñas no coinciden.');
        return;}

    // Validar contraseña con regex
  if (!passwordRegex.test(password)) {
    alertFailure('Contraseña inválida','La contraseña debe tener al menos 8 caracteres, incluir letras, número y un caracter especial.');
        return;}

    // Crear objetoJSON
    let usuarioObj = JSON.stringify({
        fullName: name, 
        phoneNumber: phone, 
        email: email, 
        birthDate: birthdate, 
        password: password,
        typeUser: userType 
    });//usuarioObj
  
  addNewUser(usuarioObj);
});
