// Items de menú izquierdo
let linkProfile = document.getElementById("linkProfile");
let linkPayment = document.getElementById("linkPayment");
let linkPurchase = document.getElementById("linkPurchase");
let linkLogOut = document.getElementById("linkLogOut");
let linkDeposit = document.getElementById("linkDeposit");//Deposit


const cardsImages = {
  bbva:"https://res.cloudinary.com/darjvaffy/image/upload/v1728622014/tarjeta_bbva_hrajq7.jpg",
  banorte: "https://res.cloudinary.com/darjvaffy/image/upload/v1728626782/banorte_ty3rmr.jpg",
  banamex: "https://res.cloudinary.com/darjvaffy/image/upload/v1728626838/banamex_l2ictv.jpg",
  santander: "https://res.cloudinary.com/darjvaffy/image/upload/v1728626929/santander_kszsgg.jpg",
  hsbc: "https://res.cloudinary.com/darjvaffy/image/upload/v1728626957/hsbc_cnfarn.jpg",
  azteca: "https://res.cloudinary.com/darjvaffy/image/upload/v1729046673/banco_azteca-removebg-preview_uq4i45.png",
  otro: "https://res.cloudinary.com/darjvaffy/image/upload/v1729046581/banco_neutro-removebg-preview_dicuhu.png"
}

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
// Función para verificar si el número de tarjeta ya está registrado
function esNumeroTarjetaDuplicado(numeroTarjeta) {
  const tarjetasExistentes = document.querySelectorAll('.cajaCuentaDeposito p:nth-of-type(4)');
  for (let i = 0; i < tarjetasExistentes.length; i++) {
    const numeroExistente = tarjetasExistentes[i].textContent.replace('Número de tarjeta: ', '').trim();
    if (numeroExistente === numeroTarjeta) {
      return true; // El número de tarjeta ya existe
    }
  }
  return false;
}

//Funcion para cambiar la imagen seleccionando las opciones
function cambiarImagen() {
    // Obtén el valor ingresado en el campo "Número de cuenta"
    const banco = document.getElementById('banco-ipt').value.toLowerCase();
    const tarjetaImg = document.getElementById('tarjetaImg');
    
    // Cambia la imagen en función del número de cuenta
    if (banco === 'bbva') {
      tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1728622014/tarjeta_bbva_hrajq7.jpg';
    } else if (banco === 'banorte') {
      tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626782/banorte_ty3rmr.jpg';
    } else if (banco === 'banamex') {
        tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626838/banamex_l2ictv.jpg';
    } else if (banco === 'santander') {
        tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626929/santander_kszsgg.jpg';
    } else if (banco === 'hsbc') {
        tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626957/hsbc_cnfarn.jpg';
    } else if (banco === 'azteca') {
        tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1729046673/banco_azteca-removebg-preview_uq4i45.png';
    } else {
      // Imagen predeterminada si no coincide el número de cuenta
      tarjetaImg.src = 'https://res.cloudinary.com/darjvaffy/image/upload/v1729046581/banco_neutro-removebg-preview_dicuhu.png';
    }
}
// funcion de insertar card
function createCardFetch(raw){
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

   const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://3.16.180.62/api/paymentmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataCard) => {
     if (dataCard.idCard != null) {
      sessionStorage.setItem("idCard", dataCard.idCard); 
    // Crear un nuevo div que será la tarjeta solo si todas las validaciones se cumplen
  const nuevaTarjeta = document.createElement('div');
  nuevaTarjeta.classList.add('cajaCuentaDeposito');
        // Actualizamos referencias de las funciones de los botones
  // Añadir el contenido de la tarjeta
  nuevaTarjeta.innerHTML = `
    <h5>${dataCard.nameBank} - ${dataCard.typeCard}</h5>
    <div class="cajaCuentaDepositoForm">
      <img src="${document.getElementById('tarjetaImg').src}" class="card-img-top" alt="${dataCard.nameBank}" style="border-radius: 10px; width: 100px;">
      <div>
        <p><strong>Titular de la tarjeta:</strong> ${dataCard.nameCard}</p>
        <p><strong>Entidad bancaria:</strong> ${dataCard.nameBank}</p>
        <p><strong>Tipo de tarjeta:</strong> ${dataCard.typeCard}</p>
        <p><strong>Número de tarjeta:</strong> ${dataCard.numberCard}</p>
        <p><strong>Fecha de caducidad:</strong> ${dataCard.dateCard}</p>
        <p><strong>CVV:</strong> ${dataCard.cvvCard}</p>
      </div>
    </div>
  `;

  // Añadir la nueva tarjeta al contenedor 'infoAdmin'
  document.getElementById('infoAdmin').appendChild(nuevaTarjeta);

  // Limpiar los campos de entrada
  document.getElementById('InfoProfile').reset();

  // Mostrar el mensaje de éxito de SweetAlert
  Swal.fire({
    title: "Registro exitoso",
    text: "Tu tarjeta fue agregada",
    imageUrl: "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
    imageWidth: 350,
    imageHeight: 200,
    imageAlt: "Custom image",
    icon: "success",
  });
      }
       else {
         //Mostramos mensaje de error
        alertFailure(
          "Registro fallido",
          `La cuenta de depósito ya se encuentra registrada`
        );
      }
    })
    .catch((error) => console.error(error));

}


// Función para guardar y agregar la tarjeta solo si todas las validaciones se cumplen
document.getElementById('btnAgregar').addEventListener('click', function () {
  // Capturar los valores de los inputs
  const titular = document.getElementById('name-ipt');
  const tipoTarjeta = document.getElementById('bank-ipt');
  const entidadBancaria = document.getElementById('banco-ipt');
  const numeroTarjeta = document.getElementById('account-ipt');
  const fechaCaducidad = document.getElementById('fecha-ipt');
  const cvv = document.getElementById('cvv-ipt');

  // Evento para permitir solo la entrada de números en el campo de número de tarjeta
  numeroTarjeta.addEventListener('input', function () {
    const valorAnterior = this.value;
    // Remover cualquier carácter que no sea un dígito
    this.value = this.value.replace(/\D/g, '');
  });

  
  // Evento para permitir solo la entrada de números en el campo de CVV
  cvv.addEventListener('input', function () {
    // Remover cualquier carácter que no sea un dígito
    this.value = this.value.replace(/\D/g, '');
  });
  
  

  // Limpiar errores previos
  titular.classList.remove('error-input');
  tipoTarjeta.classList.remove('error-input');
  entidadBancaria.classList.remove('error-input');
  numeroTarjeta.classList.remove('error-input');
  fechaCaducidad.classList.remove('error-input');
  cvv.classList.remove('error-input');

  let isValid = true; // Bandera para verificar si todos los campos son válidos


  // Validaciones
  if (titular.value.length < 3) {
    titular.classList.add('error-input');
    isValid = false;
  }

  // Validar que se haya seleccionado un tipo de tarjeta
  if (tipoTarjeta.value === "empty") {
    tipoTarjeta.classList.add('error-input');
    isValid = false;
  }

  // Validar que se haya seleccionado una entidad bancaria
  if (entidadBancaria.value === "vacio") {
    entidadBancaria.classList.add('error-input');
    isValid = false;
  }

  const numeroValido = /^\d{13,16}$/.test(numeroTarjeta.value);
  if (!numeroValido) {
    numeroTarjeta.classList.add('error-input');
    isValid = false;
  }

  const cvvValido = /^\d{3}$/.test(cvv.value);
  if (!cvvValido) {
    cvv.classList.add('error-input');
    isValid = false;
  }

  // Verificar que la fecha de caducidad no sea menor que la fecha actual
  const fechaActual = new Date();
  const fechaCaducidadDate = new Date(fechaCaducidad.value + "-01");

  if (fechaCaducidadDate < fechaActual || fechaCaducidad.value === "") {
    fechaCaducidad.classList.add('error-input');
    isValid = false;
  }

  // Si no es válida la información, mostrar alerta de error y no añadir la tarjeta
  if (!isValid) {
    Swal.fire({
      title: "Registro fallido",
      text: "Ningún campo puede estar vacío",
      icon: "error",
    }); // Sweet alert
    return; // Salir si hay error
  }

  // Validar si el número de tarjeta ya está registrado
  if (esNumeroTarjetaDuplicado(numeroTarjeta.value.trim())) {
    numeroTarjeta.classList.add('error-input');
    isValid = false;
    Swal.fire({
      title: "Tarjeta duplicada",
      text: `El número de tarjeta ${numeroTarjeta.value} ya está registrado. Por favor, verifica la información.`,
      icon: "error",
    });
    return; // Salir si hay tarjeta duplicada
  }

  // Crear un nuevo div que será la tarjeta solo si todas las validaciones se cumplen
  const nuevaTarjeta = document.createElement('div');
  nuevaTarjeta.classList.add('cajaCuentaDeposito');

    // Crear un ID único para la tarjeta
    const tarjetaId = `tarjeta-${Date.now()}`;
    nuevaTarjeta.id = tarjetaId;
  // objeto
  let idUserLogged = parseInt(sessionStorage.getItem("idUser"));

    const raw = JSON.stringify({
    nameCard: titular.value,
    typeCard: tipoTarjeta.value,
    numberCard: numeroTarjeta.value,
    nameBank: entidadBancaria.value,
    dateCard: fechaCaducidad.value,
    cvvCard: cvv.value,
    usersIdUser: idUserLogged,
    });
  createCardFetch(raw);


});

// Asignar la fecha actual como el mínimo para el campo de fecha de caducidad
document.getElementById('fecha-ipt').addEventListener('focus', function () {
  const hoy = new Date();
  const anio = hoy.getFullYear();
  const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Formatear el mes con dos dígitos
  this.min = `${anio}-${mes}`;
});





// funcion modificar


let tarjetaSeleccionada = null; // Variable para almacenar la tarjeta seleccionada

// Mapeo de las imágenes de los bancos
const imagenesBancos = {
  azteca: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626957/hsbc_cnfarn.jpg',
  banamex: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626838/banamex_l2ictv.jpg',
  banorte: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626782/banorte_ty3rmr.jpg',
  bbva: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728622014/tarjeta_bbva_hrajq7.jpg',
  hsbc: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626957/hsbc_cnfarn.jpg',
  santander: 'https://res.cloudinary.com/darjvaffy/image/upload/v1728626929/santander_kszsgg.jpg',
  otro: 'https://res.cloudinary.com/darjvaffy/image/upload/v1729046581/banco_neutro-removebg-preview_dicuhu.png' // Imagen por defecto para otros bancos
};


// Evento para seleccionar una tarjeta
document.getElementById('infoAdmin').addEventListener('click', function (event) {
  const tarjeta = event.target.closest('.cajaCuentaDeposito');
  
  if (tarjeta) {
    // Remover la clase seleccionada de cualquier otra tarjeta
    const tarjetas = document.querySelectorAll('.cajaCuentaDeposito');
    tarjetas.forEach(t => t.classList.remove('selected'));

    // Añadir la clase seleccionada a la tarjeta clickeada
    tarjeta.classList.add('selected');
    tarjetaSeleccionada = tarjeta;

    // Habilitar el botón de modificar
    document.getElementById('btnModificar').disabled = false;
    document.getElementById('btnEliminar').disabled = false;

    // Rellenar el formulario con los datos de la tarjeta seleccionada
    const titular = tarjeta.querySelector('p:nth-of-type(1)').textContent.replace('Titular de la tarjeta: ', '');
    const entidadBancaria = tarjeta.querySelector('p:nth-of-type(2)').textContent.replace('Entidad bancaria: ', '');
    const tipoTarjeta = tarjeta.querySelector('p:nth-of-type(3)').textContent.replace('Tipo de tarjeta: ', '');
    const numeroTarjeta = tarjeta.querySelector('p:nth-of-type(4)').textContent.replace('Número de tarjeta: ', '');
    const fechaCaducidad = tarjeta.querySelector('p:nth-of-type(5)').textContent.replace('Fecha de caducidad: ', '');
    const cvv = tarjeta.querySelector('p:nth-of-type(6)').textContent.replace('CVV: ', '');

    document.getElementById('name-ipt').value = titular;
    document.getElementById('banco-ipt').value = entidadBancaria.toLowerCase();
    document.getElementById('bank-ipt').value = tipoTarjeta.toLowerCase();
    document.getElementById('account-ipt').value = numeroTarjeta;
    document.getElementById('fecha-ipt').value = fechaCaducidad;
    document.getElementById('cvv-ipt').value = cvv;
  }
});

// Función para obtener la URL de la imagen según la entidad bancaria
function obtenerImagenBanco(entidadBancaria) {
  return imagenesBancos[entidadBancaria] || imagenesBancos['otro'];
}

// Evento para modificar la tarjeta seleccionada
document.getElementById('btnModificar').addEventListener('click', function () {
  if (!tarjetaSeleccionada) return;

  // Validar de nuevo los inputs (puedes reutilizar la función de validación existente)
  const titular = document.getElementById('name-ipt');
  const tipoTarjeta = document.getElementById('bank-ipt');
  const entidadBancaria = document.getElementById('banco-ipt');
  const numeroTarjeta = document.getElementById('account-ipt');
  const fechaCaducidad = document.getElementById('fecha-ipt');
  const cvv = document.getElementById('cvv-ipt');

  let isValid = true; // Bandera de validación

  // Validaciones (igual que las ya definidas)
  if (titular.value.length < 3) {
    titular.classList.add('error-input');
    isValid = false;
  }

  if (tipoTarjeta.value === "empty") {
    tipoTarjeta.classList.add('error-input');
    isValid = false;
  }

  if (entidadBancaria.value === "vacio") {
    entidadBancaria.classList.add('error-input');
    isValid = false;
  }

  const numeroValido = /^\d{13,16}$/.test(numeroTarjeta.value);
  if (!numeroValido) {
    numeroTarjeta.classList.add('error-input');
    isValid = false;
  }

  const cvvValido = /^\d{3}$/.test(cvv.value);
  if (!cvvValido) {
    cvv.classList.add('error-input');
    isValid = false;
  }

  const fechaActual = new Date();
  const fechaCaducidadDate = new Date(fechaCaducidad.value + "-01");
  if (fechaCaducidadDate < fechaActual || fechaCaducidad.value === "") {
    fechaCaducidad.classList.add('error-input');
    isValid = false;
  }

  if (!isValid) {
    Swal.fire({
      title: "Modificación fallida",
      text: "Algunos campos contienen errores.",
      icon: "error",
    });
    return;
  }

    // Crear objeto con los datos de la tarjeta
    const dataCard = {
      nameCard: titular.value,
      nameBank: entidadBancaria.value.toLowerCase(),
      typeCard: tipoTarjeta.value.toLowerCase(),
      numberCard: numeroTarjeta.value,
      dateCard: fechaCaducidad.value,
      cvvCard: cvv.value
    };

      // Hacer el fetch para enviar los datos a la base de datos
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
      const requestOptions = {
        method: "PUT",
            headers: myHeaders,
        redirect: "follow",
      };
    
      fetch(`http://3.16.180.62/api/paymentmethods/${sessionStorage.getItem("idCard")}?nameCard=${titular.value}&nameBank=${entidadBancaria.value}&typeCard=${tipoTarjeta.value}&numberCard=${numeroTarjeta.value}&dateCard=${fechaCaducidad.value}&cvvCard=${cvv.value}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          
          if (result.idCard != null) {
    

  // Actualizar la tarjeta seleccionada con los nuevos valores
  tarjetaSeleccionada.querySelector('h5').textContent = `${dataCard.nameBank} - ${dataCard.typeCard}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(1)').textContent = `Titular de la tarjeta: ${dataCard.nameCard}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(2)').textContent = `Entidad bancaria: ${dataCard.nameBank}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(3)').textContent = `Tipo de tarjeta: ${dataCard.typeCard}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(4)').textContent = `Número de tarjeta: ${dataCard.numberCard}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(5)').textContent = `Fecha de caducidad: ${dataCard.dateCard}`;
  tarjetaSeleccionada.querySelector('p:nth-of-type(6)').textContent = `CVV: ${dataCard.cvvCard}`;

  // Cambiar la imagen de la tarjeta según la entidad bancaria seleccionada
  const nuevaImagen = obtenerImagenBanco(dataCard.nameBank.toLowerCase());
  tarjetaSeleccionada.querySelector('img').src = nuevaImagen;

  // Limpiar el formulario y deseleccionar la tarjeta
  document.getElementById('InfoProfile').reset();
  tarjetaSeleccionada.classList.remove('selected');
  tarjetaSeleccionada = null;

  // Deshabilitar el botón modificar de nuevo
  document.getElementById('btnModificar').disabled = true;
  document.getElementById('btnEliminar').disabled = true;

  Swal.fire({
    title: "Modificación exitosa",
    text: "La tarjeta ha sido actualizada.",
    icon: "success",
  });
} else {
  Swal.fire({
    title: "Error",
    text: "No se pudo actualizar la tarjeta en la base de datos.",
    icon: "error",
  });
}
})
.catch(error => {
  console.error('Error al actualizar la tarjeta:', error);
});
});




// Evento para eliminar la tarjeta seleccionada
document.getElementById('btnEliminar').addEventListener('click', function () {
  if (!tarjetaSeleccionada) return;

  // Confirmar la eliminación
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción eliminará la tarjeta seleccionada.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarla",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {

      const dataCard = {
        numberCard: tarjetaSeleccionada.querySelector('p:nth-of-type(4)').textContent.replace('Número de tarjeta: ', '')
      };
  
      // Hacer el fetch para eliminar la tarjeta en la base de datos
      const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`http://3.16.180.62/api/paymentmethods/${sessionStorage.getItem("idCard")}`, requestOptions)
  .then((response) => response.text())
  .then((result) => 
{

      // Eliminar la tarjeta del DOM
      tarjetaSeleccionada.remove();

      // Limpiar el formulario y deshabilitar botones
      document.getElementById('InfoProfile').reset();
      tarjetaSeleccionada = null;
      document.getElementById('btnModificar').disabled = true;
      document.getElementById('btnEliminar').disabled = true;

      Swal.fire({
        title: "Tarjeta eliminada",
        text: "La tarjeta ha sido eliminada correctamente.",
        icon: "success",
      });
    })
    .catch((error) => console.error(error));
 } 
    })
  }
);

function getCards () {

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch (`http://3.16.180.62/api/paymentmethods/`, requestOptions)
  .then((response) => response.json())
    .then((paymentmethods) => {
      let idUserLogged = parseInt(sessionStorage.getItem("idUser"));
      //Buscamos el objeto dentro de todos los registros y con el índice y splice lo eliminamos
      const div = document.getElementById("cardsContainer")
        div.innerHTML=""
      for (i = 0; i < paymentmethods.length; i++) { 
        if (paymentmethods[i].usersIdUser == idUserLogged) {

                  nuevaTarjeta = `
            <h5 class="mx-auto">${paymentmethods[i].nameBank} - ${paymentmethods[i].typeCard}</h5>
            <div class="cajaCuentaDepositoForm">
              <img src="${cardsImages[paymentmethods[i].nameBank]}" class="card-img-top" alt="${paymentmethods[i].nameBank}" style="border-radius: 10px; width: 100px;">
              <div>
                <p><strong>Titular de la tarjeta:</strong> ${paymentmethods[i].nameCard}</p>
                <p><strong>Entidad bancaria:</strong> ${paymentmethods[i].nameBank}</p>
                <p><strong>Tipo de tarjeta:</strong> ${paymentmethods[i].typeCard}</p>
                <p><strong>Número de tarjeta:</strong> ${paymentmethods[i].numberCard}</p>
                <p><strong>Fecha de caducidad:</strong> ${paymentmethods[i].dateCard}</p>
                <p><strong>CVV:</strong> ${paymentmethods[i].cvvCard}</p>
              </div>
            </div>
          `;
        div.insertAdjacentHTML("beforeend", nuevaTarjeta);
        }
      } 
    }
  )
.catch((error) => console.error(error));
}
getCards();

// ------------------------ Elementos y eventos de la barra izquierda
linkProfile.addEventListener("click", (event) => {
  event.preventDefault();
  if ((window.location.pathname = "/pages/user_profile.html")) {
    // local
    window.location.href = "../pages/user_profile.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/user_profile.html";
  }
});

linkPurchase.addEventListener("click", (event) => {
  event.preventDefault();
  if ((window.location.pathname = "/pages/purchase_history.html")) {
    // local
    window.location.href = "../pages/purchase_history.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/purchase_history.html";
  }
});

linkPayment.addEventListener("click", (event) => {
  event.preventDefault();
  if ((window.location.pathname = "/pages/payment_account.html")) {
    // local
    window.location.href = "../pages/payment_account.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/payment_method.html";
  }
});

linkDeposit.addEventListener("click", (event) => {
  event.preventDefault();
  if ((window.location.pathname = "/pages/deposit_account.html")) {
    // local
    window.location.href = "../pages/deposit_account.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/deposit_account.html";
  }
});

// Clean session storage and go to login page
linkLogOut.addEventListener("click", (event) => {
  event.preventDefault();
  sessionStorage.clear();
  if ((window.location.pathname = "/pages/user_profile.html")) {
    // local
    window.location.href = "../pages/log_in.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/log_in.html";
  }
}); //logOutBtn click