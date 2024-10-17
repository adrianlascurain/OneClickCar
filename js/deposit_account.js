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
let linkDeposit = document.getElementById("linkDeposit");
// Input de ventana modal modificar administrador
let nameTextNew = document.getElementById("name-ipt-new");
let bankTextNew = document.getElementById("bank-ipt-new");
let accountTextNew = document.getElementById("account-ipt-new");
// Input de ventana modal agregar administrador
let nameTextAdd = document.getElementById("name-ipt-add");
let bankTextAdd = document.getElementById("bank-ipt-add");
let accountTextAdd = document.getElementById("account-ipt-add");
let idUserTextAdd = document.getElementById("iduser-ipt-add");
// Botones para modificar y agregar info en tabla administrador
let btnModificarAdm = document.getElementById("btn-modificar-adm");
let btnAgregarAdm = document.getElementById("btn-agregar-adm");
// Elementos del cliente
let nameText = document.getElementById("name-ipt");
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

  fetch("http://localhost:8080/api/depositmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataDepositMethod) => {
      infoAdmin.innerHTML = "";
      let htmlContent = "";
      htmlContent += ` 
        <h1 id="titleReport">Reporte de métodos de depósito</h1><br>
        <div class="text-left">
        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar</a></div>
        <div class="table-responsive">
        <table class="table table-striped table-bordered  border-secondary align-middle"> 
            <thead>
              <tr>
            <th scope="col ">Id cuenta</th>
            <th scope="col ">Nombre completo</th>
            <th scope="col ">Banco</th>
            <th scope="col ">Cuenta de banco</th>
            <th scope="col ">Id usuario</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
      `;
      for (i = 0; i < dataDepositMethod.length; i++) {
        htmlContent += `
            <tr>
            <th scope="row ">${dataDepositMethod[i].idAccount}</th>
            <td>${dataDepositMethod[i].nameAccount}</td>
            <td>${dataDepositMethod[i].nameBank}</td>
            <td>${dataDepositMethod[i].accountBank}</td>
            <td>${dataDepositMethod[i].usersIdUser}</td>
            <td><button type="button" class="btn btn-primary" onclick="modInfoAdm(${dataDepositMethod[i].idAccount})" data-bs-toggle="modal" data-bs-target="#modalModificar">Modificar</button></td>
            <td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="delDepositAdmFetch(${dataDepositMethod[i].idAccount})">Eliminar</button></td>
          </tr>
          `;
      }
      htmlContent += `</tbody></table></div>`;
      infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
    })
    .catch((error) => console.error(error));
} // Function createTableAdmFetch()

// Función que agrega un deposito con put a la DB
function addDepositAdmFetch() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    nameAccount: nameTextAdd.value,
    nameBank: bankTextAdd.value,
    accountBank: accountTextAdd.value,
    usersIdUser: idUserTextAdd.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/depositmethods/", requestOptions)
    .then((response) => response.text())
    .then((dataDepositMethod) => {
      
      if (dataDepositMethod.length > 0) {
        (nameTextAdd.value = ""),
          (bankTextAdd.value = ""),
          (accountTextAdd.value = ""),
          (idUserTextAdd.value = ""),
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Registro exitoso", "La cuenta de depósito fue agregada");
      } else {
        // Mostrar mensaje error
        alertFailure(
          "Registro fallido",
          `La cuenta de depósito ${accountTextAdd.value} ya se encuentra registrada`
        );
      }
    })
    .catch((error) => console.error(error));
} //function addDepositAdmFetch()

// Función que recupera la información específica del usuario y la muestra en el modal
function showInfoModAdmFetch(idAccount) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

  const requestOptions = {
    method: "GET",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/depositmethods/${idAccount}`, requestOptions)
    .then((response) => response.json())
    .then((datumDepositMethod) => {
      
      nameTextNew.value = datumDepositMethod.nameAccount;
      bankTextNew.value = datumDepositMethod.nameBank;
      accountTextNew.value = datumDepositMethod.accountBank;
    })
    .catch((error) => console.error(error));
} //showInfoModAdmFetch

// Función que modifica la información insertada en el modal
function modDepositAdmFetch(idAccount) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "PUT",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://localhost:8080/api/depositmethods/${idAccount}?nameAccount=${nameTextNew.value}&nameBank=${bankTextNew.value}&accountBank=${accountTextNew.value}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      
      createTableAdmFetch();
    })
    .catch((error) => console.error(error));
}

// Función que elimina el registro al dar click en el botón
function delDepositAdmFetch(idAccount) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "DELETE",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/depositmethods/${idAccount}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      
      createTableAdmFetch();
      alertSuccess(
        "Eliminación exitosa",
        "La cuenta de depósito fue eliminada"
      );
    })
    .catch((error) => console.error(error));
}

// ------------------------Funciones fetch para el cliente
// Función para mostrar (si hay) información en el contenedor del cliente
function showInfoModClientFetch() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  btnSubContainer.innerHTML = "";
  const requestOptions = {
    method: "GET",
        headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/depositmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataDepositMethod) => {
      let idUserLogged = parseInt(sessionStorage.getItem("idUser"));

      //Buscamos el objeto dentro de todos los registros y con el índice y splice lo eliminamos
      for (i = 0; i < dataDepositMethod.length; i++) {
        if (dataDepositMethod[i].usersIdUser == idUserLogged) {
          // Si existe mostramos la información, caso contrario se queda vacío el input
          nameText.value = dataDepositMethod[i].nameAccount;
          bankText.value = dataDepositMethod[i].nameBank;
          accountText.value = dataDepositMethod[i].accountBank;
          btnSubContainer.insertAdjacentHTML(
            "beforeend",
            `
              
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnAgregar"
                  onclick="addDepositClient()"
                >
                  Agregar
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnModificar" onclick="modDepositCliFetch(${dataDepositMethod[i].idAccount})"
                >
                  Modificar
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnEliminar"
                  onclick="delDepositCliFetch(${dataDepositMethod[i].idAccount})"
                >
                  Eliminar
                </button>
             
            `
          );
          break;
        } else if (i == dataDepositMethod.length - 1) {
          btnSubContainer.insertAdjacentHTML(
            "beforeend",
            `
              
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnAgregar"
                  onclick="addDepositClient()"
                >
                  Agregar
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnModificar" onclick="modDepositCliFetch(null)"
                >
                  Modificar
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-information"
                  id="btnEliminar"
                  onclick="delDepositCliFetch(null)"
                >
                  Eliminar
                </button>
             
            `
          );
          alertFailure(
            "Agrega un método de pago",
            "Aún no tienes un método de pago registrado procede a agregarlo"
          );
        }
      }
    })
    .catch((error) => console.error(error));
}
// Función para validar datos en inputs y llamar a post-fetch
function addDepositClient() {
  if (nameText.value != "" && bankText.value != "" && accountText.value != "") {
    addDepositClientFetch();
  } else {
    alertFailure("Registro fallido", "Ningún campo puede estar vacío.");
  }
}
// Función para agregar registro en DB
function addDepositClientFetch() {
  let idUserLogged = parseInt(sessionStorage.getItem("idUser"));

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const raw = JSON.stringify({
    nameAccount: nameText.value,
    nameBank: bankText.value,
    accountBank: accountText.value,
    usersIdUser: idUserLogged,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/depositmethods/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      
      if (result.length > 0) {
        // Actualizamos referencias de las funciones de los botones
        showInfoModClientFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Registro exitoso", "La cuenta de depósito fue agregada");
      } else {
        // Mostramos mensaje de error
        alertFailure(
          "Registro fallido",
          `La cuenta de depósito ${accountTextAdd.value} ya se encuentra registrada`
        );
      }
    })
    .catch((error) => console.error(error));
}
// Función para modificar registro en DB
function modDepositCliFetch(idAccount) {
  if (idAccount != null) {
    if (
      nameText.value == "" &&
      bankText.value == "" &&
      accountText.value == ""
    ) {
      alertFailure("Modificación fallida", "Ningún campo puede estar vacío.");
    } else {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

      const requestOptions = {
        method: "PUT",
            headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost:8080/api/depositmethods/${idAccount}?nameAccount=${nameText.value}&nameBank=${bankText.value}&accountBank=${accountText.value}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          
          if (result.length > 0) {
            alertSuccess(
              "Modificación exitosa",
              "La cuenta de depósito fue modificada"
            );
          } else {
            // Mostramos mensaje de error
            alertFailure(
              "Modificación fallida",
              `No existe la cuenta de depósito, procede a agregar una o actualizar los datos.`
            );
          }
        })
        .catch((error) => console.error(error));
    }
  } else {
    // Mostramos mensaje de error
    alertFailure(
      "Agrega un método de pago",
      "Aún no tienes un método de pago registrado procede a agregarlo."
    );
  }
}
// Función para eliminar registro en DB
function delDepositCliFetch(idAccount) {
  if (idAccount != null) {
      const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
    const requestOptions = {
      method: "DELETE",
          headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/api/depositmethods/${idAccount}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        
        if (result.length > 0) {
          nameText.value = "";
          bankText.value = "";
          accountText.value = "";
          alertSuccess(
            "Eliminación exitosa",
            "La cuenta de depósito fue eliminada"
          );
        } else {
          alertFailure(
            "Eliminación fallida",
            "No existe la cuenta de depósito, procede a agregar una."
          );
        }
      })
      .catch((error) => console.error(error));
  } else {
    alertFailure(
      "Agrega un método de pago",
      "Aún no tienes un método de pago registrado procede a agregarlo."
    );
  }
}
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
            nameTextAdd.value != "" &&
            bankTextAdd.value != "" &&
            accountTextAdd.value != "" &&
            idUserTextAdd.value != ""
          ) {
            addDepositAdmFetch();
          } else {
            alertFailure("Registro fallido", "Ningún campo puede estar vacío");
          } //else
        }); //btnAgregar.addEventListener()
        // Modificar información por administrador
 
      } else if (userData.typeUser == "client") {
                // Escondemos la vista de administrador
        infoAdmin.innerHTML = "";
        // Mostramos o no (si no tiene) datos de usuario
        showInfoModClientFetch();

      } else {
        infoCliente.classList.add("d-none");
        infoAdmin.classList.add("d-none");
        if ((window.location.pathname = "/pages/deposit_account.html")) {
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


       function modInfoAdm(idAccount) {
          showInfoModAdmFetch(idAccount);

          btnModificarAdm.addEventListener("click", (event) => {
            event.preventDefault();
            //Validación de campos vacíos
            if (
              nameTextNew.value != "" &&
              bankTextNew.value != "" &&
              accountTextNew.value != ""
            ) {
              modDepositAdmFetch(idAccount);
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
      "https://adrianlascurain.github.io/OneClickCar/pages/deposit_method.html";
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

validateUser();