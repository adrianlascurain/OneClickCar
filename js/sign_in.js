// nav bar active
let navSignIn = document
.getElementById("navSignIn")
.classList.add("active");

// Expresión regular para validar la contraseña 
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  
// Expresión regular para validar el teléfono 
const phoneRegex = /^(?!([0-9])\1{5,9})(?!.*000{4,})([2-9]\d{1}\d{8})$/;
// Expresión regular para validar el nombre (solo letras, con un mínimo de 2 caracteres)
const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
// Expresión regular para validar el correo electrónico
const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

document.getElementById('btnSignIn').addEventListener('click', function (e) {
    e.preventDefault();  // Evita que el formulario se envíe automáticamente

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('inputPassword2').value;
    const confirmPassword = document.getElementById('inputPassword6').value;
    const userType = "client"

    // Validar nombre
    if (!nameRegex.test(name)) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido',
            text: 'El nombre debe contener al menos 2 letras y solo puede incluir letras.',
        });
        return;
    }

    // Validar teléfono
    if (!phoneRegex.test(phone)) {
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'El teléfono debe contener solo dígitos y tener 10 caracteres.',
        });
        return;
    }

    // Validar correo electrónico
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo Electrónico inválido',
            text: 'Por favor, ingresa un correo electrónico válido.',
        });
        return;
    }

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error de contraseña',
            text: 'Las contraseñas no coinciden.',
        });
        return;
    }

    // Validar contraseña con regex
    if (!passwordRegex.test(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe tener al menos 8 caracteres, incluir letras, número y un caracter especial.',
        });
        return;
    }

    // Crear objetoJSON
    const usuarioObj = {
        name: name, 
        phone: phone, 
        email: email, 
        birthdate: birthdate, 
        password: password,
        userType: userType 
    };//usuarioObj
    //guardar en LocalStorage
    localStorage.setItem(email, JSON.stringify(usuarioObj));  //usando  email com 'clave'

    // Mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        text: 'Los datos han sido guardados correctamente en local storage.',
    }).then(() => {
        // Reiniciar el formulario una vez que el usuario cierra la alerta de éxito
        document.getElementById('userForm').reset();
    });
});
