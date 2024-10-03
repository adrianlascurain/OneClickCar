let contadorId = 0;

document.addEventListener("DOMContentLoaded", function () {
  let formRegistro = document.querySelector("form");

  if (formRegistro) {
    formRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      // Datos del formulario
      let type = document.getElementById("tipo").value;
      let brand = document.getElementById("marca").value;
      let name = document.getElementById("modelo").value;
      let year = document.getElementById("anio").value;
      let kilometer = document.getElementById("kilometraje").value;
      let transmission = document.getElementById("transmision").value;
      let seller = document.getElementById("propietario").value;
      let owners = document.getElementById("num_prop").value;
      let contact = document.getElementById("contacto").value;
      let price = document.getElementById("precio").value;
      let description = document.getElementById("descripcion").value;
      let img = document.getElementById("imagenes");
      let termsCheckbox = document.getElementById("terms");
      let privacyCheckbox = document.getElementById("privacy");

      // Array para almacenar los campos vacíos
      let camposFaltantes = [];

      // Validar que cada campo esté lleno, si no, agregarlo a la lista
      if (type === "") camposFaltantes.push("Tipo de vehículo");
      if (brand === "") camposFaltantes.push("Marca");
      if (name === "") camposFaltantes.push("Modelo");
      if (year === "") camposFaltantes.push("Año");
      if (kilometer === "") camposFaltantes.push("Kilometraje");
      if (transmission === "") camposFaltantes.push("Transmisión");
      if (seller === "") camposFaltantes.push("Propietario");
      if (owners === "") camposFaltantes.push("Número de propietarios");
      if (contact === "") camposFaltantes.push("Contacto");
      if (price === "") camposFaltantes.push("Precio");
      if (description === "") camposFaltantes.push("Descripción");
      if (!termsCheckbox.checked)
        camposFaltantes.push("Términos y condiciones");
      if (!privacyCheckbox.checked)
        camposFaltantes.push("Política de privacidad");

      // Si hay campos faltantes, mostrar alerta en formato de lista y detener el envío
      if (camposFaltantes.length > 0) {
        let mensajeError = "Faltan los siguientes campos por llenar:";
        mensajeError += `<ul>${camposFaltantes
          .map((campo) => `<li><strong>${campo}</strong></li>`)
          .join("")}</ul>`;
        mostrarAlerta(mensajeError);

        return;
      }
      // if (img.files.length > 0) {
      // let reader = new FileReader();

      // reader.onload = function(event) {
      // Convertir la imagen a base64
      // let imgBase64 = event.target.result;
      contadorId++;
      console.log(contadorId);
      localStorage.setItem("contadorId", JSON.stringify(contadorId));
      // Objeto con los datos del vehículo
      let vehiculo = {
        id_cars: contadorId,
        type: type,
        brand: brand,
        name: name,
        year: parseInt(year),
        seller: seller,
        kilometer: parseInt(kilometer),
        transmission: transmission,
        price: parseInt(price),
        owners: parseInt(owners),
        // contact: contact,
        img: localStorage.getItem("image_url"), // Guardar la imagen en base64
        description: description,
        verified: false,
        sold: false,
      };

      // Obtención de los datos en el localStorage
      let dataCars = obtenerVehiculos();

      // Se agrega el nuevo vehículo al arreglo
      dataCars.push(vehiculo);

      // Almacenar en localStorage
      localStorage.setItem("dataCars", JSON.stringify(dataCars));

      // Mensaje de éxito
      alert("El vehículo se ha registrado con éxito");

      // Limpiar los campos del formulario
      formRegistro.reset();
      // };

      // Leer la imagen como DataURL (base64)
      // reader.readAsDataURL(img.files[0]);
      // } else {
      //   alert("Por favor, selecciona una imagen.");
      // }
    });
  } else {
    console.error("No se encontró el formulario en el DOM.");
  }
});

// Función para obtener los vehículos almacenados
function obtenerVehiculos() {
  if (localStorage.getItem("dataCars") != null) {
    let dataCars = localStorage.getItem("dataCars");
    return dataCars ? JSON.parse(dataCars) : [];
  }
}

// Función para mostrar la alerta en caso de error
function mostrarAlerta(mensaje) {
  let alertDiv = document.getElementById("alertaVehiculos");
  alertDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    ${mensaje}
  </div>`;
}

function printTotal(div) {
  div.insertAdjacentHTML(
    "afterbegin",
    `<div class="alert alert-primary" role="alert">
        Vehículos en total registrados: <strong>${contadorId}</strong>
        </div>`
  );
}

if (localStorage.getItem("contadorId") == null) {
  localStorage.setItem("contadorId", "30");
}
if (localStorage.getItem("contadorId") != null) {
  contadorId = JSON.parse(localStorage.getItem("contadorId"));
}
