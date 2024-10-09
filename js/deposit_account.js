// Identificador usuario loggeado-actual
sessionStorage.setItem("id_user_logged", "0");

let navUserProfile = document.getElementById("navUserProfile").classList.add("active");
let infoCliente = document.getElementById("infoCliente");
let infoClienteRow = document.getElementById("infoClienteRow");
let infoAdmin = document.getElementById("infoAdmin");

if (sessionStorage.getItem("id_user_logged") == 0) {
  infoClienteRow.classList.add("d-none");
  infoCliente.innerHTML = "";
  
  let dataDepositMethod = JSON.parse(localStorage.getItem("dataDepositMethod"));
  let htmlContent = "";
  htmlContent += ` 
  <h1 class=text-center>Reporte de métodos de depósito</h1><br>
  <div class="text-left">
  <a class="btn btn-primary btn-informacion" ">Agregar</a></div>
  <table class="table"> </tbody>
      <thead>
        <tr>
      <th scope="col">Id cuenta</th>
      <th scope="col">Nombre completo</th>
      <th scope="col">Banco</th>
      <th scope="col">Cuenta de banco</th>
      <th scope="col">Id usuario</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
`;
  for (i = 0; i < dataDepositMethod.length; i++) {
    htmlContent += `
      <tr>
      <th scope="row">${dataDepositMethod[i].id_account}</th>
      <td>${dataDepositMethod[i].name_account}</td>
      <td>${dataDepositMethod[i].name_bank}</td>
      <td>${dataDepositMethod[i].account_bank}</td>
      <td>${dataDepositMethod[i].users_id_user}</td>
      <td><button type="button" class="btn btn-primary  btn-information" id="btnModificarAdm" onclick="modificarInfo(${dataDepositMethod[i].id_account})">Modificar</button></td>
      <td><button type="button" class="btn btn-primary  btn-information" id="btnEliminarAdm" onclick="eliminarInfo(${dataDepositMethod[i].id_account})">Eliminar</button></td>
    </tr>
    `;
  }
  htmlContent += `</table>`;
  infoAdmin.insertAdjacentHTML("beforeend", htmlContent);

  // Métodos
  function modificarInfo(id_account) {
    console.log(id_account);
  }
    function eliminarInfo(id_account) {
    console.log(id_account);
  }
} else if (sessionStorage.getItem("id_user_logged") == null) {
  infoCliente.classList.add("d-none");
  infoAdmin.classList.add("d-none");
  if ((window.location.pathname = "/pages/product_list.html")) {
    // local
    window.location.href = "../pages/sign_in.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
  }
} else {
  // Escondemos la vista de administrador
  infoAdmin.innerHTML="";
  //Variables inputs y botones
  let nameText = document.getElementById("name-ipt");
  let bankText = document.getElementById("bank-ipt");
  let accountText = document.getElementById("account-ipt");
  let btnAgregar = document.getElementById("btnAgregar");
  let btnModificar = document.getElementById("btnModificar");
  let btnEliminar = document.getElementById("btnEliminar");

  // Recuperamos todos los registros
  let dataDepositMethod = JSON.parse(localStorage.getItem("dataDepositMethod"));

  // Recuperamos el id del usuario actual logeado
  let id_user_logged = parseInt(sessionStorage.getItem("id_user_logged"));

  // Creamos una variable para el objeto método de depósito del usuario actual
  let datumDepositMethod = null;

  // Recuperamos ese objeto en caso que exista, caso contrario se queda null
    for (i = 0; i < dataDepositMethod.length; i++) {
    if (dataDepositMethod[i].users_id_user == id_user_logged) {
      datumDepositMethod = dataDepositMethod[i];
      break;
    } 
  }

  // Si existe mostramos la información, caso contrario se queda vacío el input
  if (datumDepositMethod != null) {
    nameText.value = datumDepositMethod.name_account;
    bankText.value = datumDepositMethod.name_bank;
    accountText.value = datumDepositMethod.account_bank;
  } else {
    nameText.value = "";
    bankText.value = "";
    accountText.value = "";
  }
  //Eventos

  // Evento agregar, se valida si existe ya un registro, siendo así no se puede
  // agregar nuevamente, solo editar o eliminar
  btnAgregar.addEventListener("click", (event) => {
    event.preventDefault();
    // Si es null, podemos agregar registro, si no lanzamos sweet alert
    if (datumDepositMethod == null) {
      // Validamos que no haya campos vacíos, si no lanzamos sweet alert
      if (nameText.value != "" && bankText.value != "" && accountText.value != "") {
        // Simulamos el autoincrement de id_account
        let contadorDeposit = parseInt(localStorage.getItem("contadorDeposit")) + 1;
        localStorage.setItem("contadorDeposit", JSON.stringify(contadorDeposit));
        // Reasignamos valores al objeto
        datumDepositMethod = {
          id_account: contadorDeposit,
          name_account: nameText.value,
          name_bank: bankText.value,
          account_bank: accountText.value,
          users_id_user: id_user_logged,
        };
        // Agregamos a todos los registros y de manera local (actualizamos)
        dataDepositMethod.push(datumDepositMethod);
        localStorage.setItem("dataDepositMethod",JSON.stringify(dataDepositMethod));
        
        // Mostramos mensaje de éxito
        Swal.fire({
          title: "Registro exitoso",
          text: "Tu cuenta de depósito fue agregada",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });// Sweet alert

      } else {
        Swal.fire({
          title: "Registro fallido",
          text: "Ningún campo puede estar vacío",
          icon: "error",
        });// Sweet alert
      }//else
    } else {
      Swal.fire({
        title: "Registro fallido",
        text: "No puedes agregar un registro existente, solo modificarlo o eliminarlo",
        icon: "error",
      });// Sweet alert
    }//else
  });//btnAgregar.addEventListener()

  // Evento modificar, se valida si existe ya un registro, siendo así sí se puede
  // editar o eliminar, pero no agregar
  btnModificar.addEventListener("click", (event) => {
    event.preventDefault();
    // Variable temporal/nuevo para los nuevos datos
    let datumDepositMethodNew = null;
    //Validación si es null, hay que agregar una cuenta primero
    if (datumDepositMethod != null)  {
      if (nameText.value != "" && bankText.value != "" && accountText.value != "") {
        // Reasignamos valores al objeto temporal
        datumDepositMethodNew = {
          id_account: datumDepositMethod.id_account,//este no cambia
          name_account: nameText.value,
          name_bank: bankText.value,
          account_bank: accountText.value,
          users_id_user: datumDepositMethod.users_id_user,//este no cambia
        };
        // Buscamos el índice del objeto y ahí guardamos la información actualizada
        for (i = 0; i < dataDepositMethod.length; i++) {
            if (dataDepositMethod[i] == datumDepositMethod) {
              dataDepositMethod[i] = datumDepositMethodNew;
              break;
            } 
        }

        // Actualizamos las referencias
        datumDepositMethod = datumDepositMethodNew;
        localStorage.setItem("dataDepositMethod",JSON.stringify(dataDepositMethod));
        
        // Show success message
        Swal.fire({
          title: "Modificación exitosa",
          text: "Tu cuenta de depósito fue modificada",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });
        flag = false;
      } else {
        //falla event.preventDefault();
        Swal.fire({
          title: "Modificación fallida",
          text: "Ningún campo puede estar vacío.",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Modificación fallida",
        text: "No existe un registro previo, agrega uno primero.",
        icon: "error",
      });
    }
  });//btnModificar.addEventListener

  // Evento modificar, se valida si existe ya un registro, siendo así sí se puede
  // editar o eliminar, pero no agregar
  btnEliminar.addEventListener("click", (event) => {
    event.preventDefault();
    //Validación si es null, hay que agregar una cuenta primero
    if (datumDepositMethod != null)  {
      if (nameText.value != "" && bankText.value != "" && accountText.value != "") {
        //Buscamos el objeto dentro de todos los registros y con el índice y splice lo eliminamos
        for (i = 0; i < dataDepositMethod.length; i++) {
            if (dataDepositMethod[i] == datumDepositMethod) {
              dataDepositMethod.splice(i,1);
              break;
            } 
        }
        // Actualizamos referencias
        localStorage.setItem("dataDepositMethod",JSON.stringify(dataDepositMethod));
        //Devolvemos en blanco los inputs y ponemos null el objeto recuperado al no existir más
        //Y el contador tiene que actualizarse también para liberar ese espacio de un registro más
        nameText.value = "";
        bankText.value = "";
        accountText.value = "";
        datumDepositMethod = null;
        let contadorDeposit = parseInt(localStorage.getItem("contadorDeposit")) - 1;
        localStorage.setItem("contadorDeposit", JSON.stringify(contadorDeposit));
        // Show success message
        Swal.fire({
          title: "Eliminación exitosa",
          text: "Tu cuenta de depósito fue eliminada",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });
        
      } else {
        Swal.fire({
          title: "Eliminación fallida",
          text: "Ningún campo puede estar vacío.",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Eliminación fallida",
        text: "No existe un registro previo, agrega uno primero.",
        icon: "error",
      });
    }
  });//btnEliminar.addEventListener
}

//sendOpinion()

// exampleModal.addEventListener("show.bs.modal", function (event) {
//   // Button that triggered the modal
//   var button = event.relatedTarget;
//   // Extract info from data-bs-* attributes
//   var recipient = button.getAttribute("data-bs-whatever");
//   // If necessary, you could initiate an AJAX request here
//   // and then do the updating in a callback.
//   //
//   // Update the modal's content.
//   var modalTitle = exampleModal.querySelector(".modal-title");
//   var modalBodyInput = exampleModal.querySelector(".modal-body input");

//   modalTitle.textContent = "New message to " + recipient;
//   modalBodyInput.value = recipient;
// });
