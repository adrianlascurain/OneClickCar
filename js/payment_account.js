let navUserProfile = document
  .getElementById("navUserProfile")
  .classList.add("active");
// Contendedores para la información del cliente y la del administrador
let infoCliente = document.getElementById("infoCliente");
let infoAdmin = document.getElementById("infoAdmin");
// Items de menú izquierdo
let linkProfile = document.getElementById("linkProfile");
let linkPayment = document.getElementById("linkPayment");
let linkPurchase = document.getElementById("linkPurchase");
let linkLogOut = document.getElementById("linkLogOut");
let linkDeposit = document.getElementById("linkDeposit");//Deposit
// Input de ventana modal modificar administrador
let nameCardTextNew = document.getElementById("nameCard-ipt-new");
let typeCardTextNew = document.getElementById("typeCard-ipt-new");
let numberCardTextNew = document.getElementById("numberCard-ipt-new");
let dateCardTextNew = document.getElementById("dateCard-ipt-new");
let cvvCardTextNew = document.getElementById("cvvCard-ipt-new");
let nameBankTextNew = document.getElementById("nameBank-ipt-new");
// Input de ventana modal agregar administrador
let nameCardTextAdd = document.getElementById("nameCard-ipt-add");
let typeCardTextAdd = document.getElementById("typeCard-ipt-add");
let numberCardTextAdd = document.getElementById("numberCard-ipt-add");
let dateCardTextAdd = document.getElementById("dateCard-ipt-add");
let cvvCardTextAdd = document.getElementById("cvvCard-ipt-add");
let idUserTextAdd = document.getElementById("idUser-ipt-add");
let nameBankTextAdd = document.getElementById("nameBank-ipt-add");
// Botones para modificar y agregar info en tabla administrador
let btnModificarAdm = document.getElementById("btn-modificar-adm");
let btnAgregarAdm = document.getElementById("btn-agregar-adm");
// Elementos del cliente
let nameCardText = document.getElementById("name-ipt");
let bankText = document.getElementById("bank-ipt");
let accountText = document.getElementById("account-ipt");
let btnSubContainer = document.getElementById("btnSubContainer");

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

// ------------------------Funciones fetch para el administrador
// Actualiza la tabla cada vez que se le llama con un get a la DB
function createTableAdmFetch() {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "GET",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/paymentmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataPaymentMethod) => {
      infoAdmin.innerHTML = "";
      let htmlContent = "";
      htmlContent += ` 
        <h1 id="titleReport">Reporte de métodos de pago</h1><br>
        <div class="text-left">
        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar</a></div>
        <div class="table-responsive">
        <table class="table table-bordered  border-secondary align-middle"> 
            <thead>
              <tr>
            <th scope="col ">Id tarjeta</th>
            <th scope="col ">Nombre completo</th>
            <th scope="col ">Tipo tarjeta</th>
            <th scope="col ">Número tarjeta</th>
            <th scope="col ">Fecha vencimiento</th>
            <th scope="col ">CVV</th>
            <th scope="col ">Id usuario</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
      `;
      for (i = 0; i < dataPaymentMethod.length; i++) {
        htmlContent += `
            <tr>
            <th scope="row ">${dataPaymentMethod[i].idCard}</th>
            <td>${dataPaymentMethod[i].nameCard}</td>
            <td>${dataPaymentMethod[i].typeCard}</td>
            <td>${dataPaymentMethod[i].numberCard}</td>
            <td>${dataPaymentMethod[i].dateCard}</td>
            <td>${dataPaymentMethod[i].cvvCard}</td>
            <td>${dataPaymentMethod[i].usersIdUser}</td>
            <td><button type="button" class="btn btn-primary" onclick="modInfoAdm(${dataPaymentMethod[i].idCard})" data-bs-toggle="modal" data-bs-target="#modalModificar">Modificar</button></td>
            <td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="delPaymentAdmFetch(${dataPaymentMethod[i].idCard})">Eliminar</button></td>
          </tr>
          `;
      }
      htmlContent += `</tbody></table></div>`;
      infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
    })
    .catch((error) => console.error(error));
} // Function createTableAdmFetch()

// Función que agrega un paymento con put a la DB
function addPaymentAdmFetch() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    nameCard: nameCardTextAdd.value,
    nameBank: nameBankTextAdd.value,
    typeCard: typeCardTextAdd.value,
    numberCard: numberCardTextAdd.value,
    dateCard: typeCardTextAdd.value,
    cvvCard: cvvCardTextAdd.value,
    usersIdUser: idUserTextAdd.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/paymentmethods/", requestOptions)
    .then((response) => response.text())
    .then((dataPaymentMethod) => {
      
      if (dataPaymentMethod.idCard != null) {
        (nameCardTextAdd.value = ""),
          (nameBankTextAdd.value = ""),
          (typeCardTextAdd.value = ""),
          (numberCardTextAdd.value = ""),
          (dateCardTextAdd.value = ""),
          (cvvCardTextAdd.value = ""),
          (idUserTextAdd.value = ""),
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Registro exitoso", "La cuenta de pago fue agregada");
      } else {
        // Mostrar mensaje error
        alertFailure(
          "Registro fallido",
          `La cuenta de pago ${dataPaymentMethod.numberCard} ya se encuentra registrada`
        );
      }
    })
    .catch((error) => console.error(error));
} //function addPaymentAdmFetch()

// Función que recupera la información específica del usuario y la muestra en el modal
function showInfoModAdmFetch(idCard) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

  const requestOptions = {
    method: "GET",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/paymentmethods/${idCard}`, requestOptions)
    .then((response) => response.json())
    .then((datumPaymentMethod) => {
      
      nameCardTextNew.value = datumPaymentMethod.nameCard;
      typeCardTextNew.value = datumPaymentMethod.typeCard;
     numberCardTextNew.value = datumPaymentMethod.numberCard;
      dateCardTextNew.value = datumPaymentMethod.dateCard;
      cvvCardTextNew.value = datumPaymentMethod.cvvCard;
    })
    .catch((error) => console.error(error));
} //showInfoModAdmFetch

// Función que modifica la información insertada en el modal
function modPaymentAdmFetch(idCard) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "PUT",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://localhost:8080/api/paymentmethods/${idCard}?nameCard=${nameCardTextNew.value}&typeCard=${typeCardTextNew.value}&numberCard=${numberCardTextNew.value}&dateCard=${dateCardTextNew.value}&cvvCard=${cvvCardTextNew.value}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      
      createTableAdmFetch();
    })
    .catch((error) => console.error(error));
}

// Función que elimina el registro al dar click en el botón
function delPaymentAdmFetch(idCard) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "DELETE",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/paymentmethods/${idCard}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      
      createTableAdmFetch();
      alertSuccess(
        "Eliminación exitosa",
        "La cuenta de pago fue eliminada"
      );
    })
    .catch((error) => console.error(error));
}

       function modInfoAdm(idCard) {
          showInfoModAdmFetch(idCard);

          btnModificarAdm.addEventListener("click", (event) => {
            event.preventDefault();
            //Validación de campos vacíos
            if (
              nameCardTextNew.value != "" &&
              nameBankTextNew.value != "" &&
              typeCardTextNew.value != "" &&
              numberCardTextNew.value != "" &&
              dateCardTextNew.value != "" &&
              cvvCardTextNew.value != ""
            ) {
              modPaymentAdmFetch(idCard);
              // Show sucess message
              alertSuccess(
                "Modificación exitosa",
                "La cuenta de depósito fue modificada"
              );
            } else {
              // Show failure message
              alertFailure("Modificación fallida", "Ningún campo puede estar vacío.");
            }
          }); //btnModificarAdm.addEventListener
        }

// ------------------------Funciones fetch para el cliente

function validateUser() {
	
  let emailUser = sessionStorage.getItem("user");

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
      // Validamos si el usuario es administrado (0), nulo (no ha iniciado sesión) o >1 es cliente
      if (userData.typeUser == "admin") {
        infoCliente.classList.add("d-none");
        infoCliente.innerHTML = "";

        createTableAdmFetch();

        btnAgregarAdm.addEventListener("click", (event) => {
          event.preventDefault();
          // Validamos que no haya campos vacíos, si no lanzamos sweet alert
          if (
            nameCardTextAdd.value != "" &&
           nameBankTextAdd.value != "" &&
            typeCardTextAdd.value != "" &&
            numberCardTextAdd.value != "" &&
            dateCardTextAdd.value != "" &&
            cvvCardTextAdd.value != "" &&
            idUserTextAdd.value != ""
          ) {
            addPaymentAdmFetch();
          } else {
            alertFailure("Registro fallido", "Ningún campo puede estar vacío");
          } //else
        }); //btnAgregar.addEventListener()
        // Modificar información por administrador
 
      } else if (userData.typeUser == "client") {
                // Escondemos la vista de administrador
        infoAdmin.innerHTML = "";
        // Mostramos o no (si no tiene) datos de usuario
        //Aquí agregar código Luis José
        








      } else {
        infoCliente.classList.add("d-none");
        infoAdmin.classList.add("d-none");
        if ((window.location.pathname = "/pages/payment_account.html")) {
          // local
          window.location.href = "../pages/log_in.html";
        } else {
          // github
          window.location.href =
            "https://adrianlascurain.github.io/OneClickCar/pages/log_in.html";
        }
      }
    }).catch((error) => console.error(error));
}




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
  if ((window.location.pathname = "/pages/payment_account.html")) {
    // local
    window.location.href = "../pages/payment_account.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/payment_account.html";
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

// Código a ejecutarse al inicio
validateUser();