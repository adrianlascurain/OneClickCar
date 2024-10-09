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
      
      let contadorCarsOnSale=parseInt(localStorage.getItem("contadorCarsOnSale"))+1;
      localStorage.setItem("contadorCarsOnSale", JSON.stringify(contadorCarsOnSale));
      // Objeto con los datos del vehículo
      let vehiculo = {
        id_car: contadorCarsOnSale,
        type: type,
        brand: brand,
        name: name,
        year: parseInt(year),
        kilometer: parseInt(kilometer),
        transmission: transmission,
        price: parseInt(price),
        img: localStorage.getItem("image_url"), 
        owners: parseInt(owners),
        description: description,
        verified: 0,
        sold: 0,
        seller_id_user: parseInt(sessionStorage.getItem("id_user_logged")),
      };
      console.log(parseInt(sessionStorage.getItem("id_user_logged")))
      // // fetch pendiente modificar
      // const promesa = fetch("http://localhost:8080/api/productos/addProduct", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(vehiculo),
      // });
      // promesa
      //   .then((response) => {
      //     response
      //       .json()
      //       .then((dataCarsFetch) => {
      //         if (localStorage.getItem("dataCarsOnSale") != null) {
      //           filterDataCars(
      //             JSON.parse(localStorage.getItem("dataCarsOnSale"))
      //           );
      //           createGroupCarousels();
      //         } else {
      //           console.log(dataCarsFetch);
      //           localStorage.setItem(
      //             "dataCarsOnSale",
      //             JSON.stringify(dataCarsFetch)
      //           );
      //           filterDataCars(
      //             JSON.parse(localStorage.getItem("dataCarsOnSale"))
      //           );
      //           createGroupCarousels();
      //         }
      //       })
      //       .catch((error) => console.log("Problema con el json", error));
      //   })
      //   .catch((err) =>
      //     console.log("Existió un problema con la solicitud", err)
      //   );
      // //modificar pendiente

      // Obtención de los datos en el localStorage
      let dataCarsOnSale = obtenerVehiculos();

      // Se agrega el nuevo vehículo al arreglo
      dataCarsOnSale.push(vehiculo);

      // Almacenar en localStorage
      localStorage.setItem("dataCarsOnSale", JSON.stringify(dataCarsOnSale));

      // Mensaje de éxito
             Swal.fire({
          title: "Vehículo registrado con éxito.",
          text: "Se iniciará con el proceso de verificación conforme a las políticas de OneClickCar, pronto te contactaremos para más indicaciones.",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });

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
  if (localStorage.getItem("dataCarsOnSale") != null) {
    let dataCars = localStorage.getItem("dataCarsOnSale");
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
        Vehículos en total registrados: <strong>${contadorCarsOnSaleCar}</strong>
        </div>`
  );
}


