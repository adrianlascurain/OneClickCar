// nav bar active
let navSignIn = document
.getElementById("navSignIn")
.classList.add("active");

// Expresión regular para validar la contraseña
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Al menos 8 caracteres, una letra y un número.
// Expresión regular para validar el teléfono (formato sencillo: solo dígitos, entre 7 y 15 caracteres)
const phoneRegex = /^\d{7,15}$/;
// Expresión regular para validar el nombre (solo letras, con un mínimo de 2 caracteres)
const nameRegex = /^[A-Za-z\s]{2,}$/;
// Expresión regular para validar el correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();  // Evita que el formulario se envíe automáticamente

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('inputPassword2').value;
    const confirmPassword = document.getElementById('inputPassword6').value;

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
            text: 'El teléfono debe contener solo dígitos y tener entre 7 y 15 caracteres.',
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
            text: 'La contraseña debe tener al menos 8 caracteres, incluir letras y al menos un número.',
        });
        return;
    }

    // Guardar los datos en local storage
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);  

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
