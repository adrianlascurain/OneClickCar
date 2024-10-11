// noSerieTextAdd.value
// tipoTextAdd.value
// marcaTextAdd.value
// nombreTextAdd.value
// anioTextAdd.value
// kilTextAdd.value
// transTextAdd.value
// precioTextAdd.value
// imgTextAdd.value
// duenosTextAdd.value
// descripTextAdd.value
// verifTextAdd.value
// vendTextAdd.value
// idVendedorTextAdd.value

let navUserProfile = document.getElementById("navUserProfile").classList.add("active");
let infoCliente = document.getElementById("infoCliente");
let infoAdmin = document.getElementById("infoAdmin");
let nameTextNew = document.getElementById("name-ipt-new");
let bankTextNew = document.getElementById("bank-ipt-new");
let accountTextNew = document.getElementById("account-ipt-new");

let noSerieTextAdd= document.getElementById("noSerie-ipt-add");
let tipoTextAdd = document.getElementById("tipo-ipt-add");
let marcaTextAdd = document.getElementById("marca-ipt-add");
let nombreTextAdd = document.getElementById("nombre-ipt-add");
let anioTextAdd= document.getElementById("anio-ipt-add");
let kilTextAdd = document.getElementById("kil-ipt-add");
let transTextAdd = document.getElementById("trans-ipt-add");
let precioTextAdd = document.getElementById("precio-ipt-add");
let imgTextAdd= document.getElementById("img-ipt-add");
let duenosTextAdd = document.getElementById("duenos-ipt-add");
let descripTextAdd = document.getElementById("descrip-ipt-add");
let verifTextAdd = document.getElementById("verif-ipt-add");
let vendTextAdd= document.getElementById("vend-ipt-add");
let idVendedorTextAdd = document.getElementById("idVendedor-ipt-add");


let noSerieTextNew= document.getElementById("noSerie-ipt-new");
let tipoTextNew = document.getElementById("tipo-ipt-new");
let marcaTextNew = document.getElementById("marca-ipt-new");
let nombreTextNew = document.getElementById("nombre-ipt-new");
let anioTextNew= document.getElementById("anio-ipt-new");
let kilTextNew = document.getElementById("kil-ipt-new");
let transTextNew = document.getElementById("trans-ipt-new");
let precioTextNew = document.getElementById("precio-ipt-new");
let imgTextNew= document.getElementById("img-ipt-new");
let duenosTextNew = document.getElementById("duenos-ipt-new");
let descripTextNew = document.getElementById("descrip-ipt-new");
let verifTextNew = document.getElementById("verif-ipt-new");
let vendTextNew= document.getElementById("vend-ipt-new");

let btnModificarAdm = document.getElementById("btn-modificar-adm");
let btnAgregarAdm = document.getElementById("btn-agregar-adm");

let linkProfile = document.getElementById("linkProfile");
let linkPayment = document.getElementById("linkPayment");
let linkPurchase = document.getElementById("linkPurchase");
let linkLogOut = document.getElementById("linkLogOut");
let linkDeposit = document.getElementById("linkDeposit");

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
linkLogOut.addEventListener("click",(event) =>{
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
})//logOutBtn click

// Crear tabla para dar dinamismo a los datos mostrados
function createTableAdm(dataCarsGeneral) {
  infoAdmin.innerHTML = "";
  let htmlContent = "";
  htmlContent += ` 
  <h1 class=text-center>Reporte de historial de vehículos</h1><br>
  <div class="text-left">
  <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar</a></div>
  <div class="table-responsive">
  <table class="table table-bordered  border-secondary align-middle"> 
      <thead>
        <tr>
      <th scope="col">Id vehículo</th>
      <th scope="col">Número de serie</th>
      <th scope="col">Tipo</th>
      <th scope="col">Marca</th>
      <th scope="col">Nombre</th>
      <th scope="col">Año</th>
      <th scope="col">Kilometraje</th>
      <th scope="col">Transmisión</th>
      <th scope="col">Precio</th>
      <th scope="col">Enlace imagen</th>
      <th scope="col">Dueños anteriores</th>
      <th scope="col">Descripción</th>
      <th scope="col">Verificado</th>
      <th scope="col">Vendido</th>
      <th scope="col">Id vendedor</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
`;
  for (i = 0; i < dataCarsGeneral.length; i++) {
    htmlContent += `
      <tr>
      <th scope="row">${dataCarsGeneral[i].id_car}</th>
      <td>####pendiente###</td> 
      <td>${dataCarsGeneral[i].type}</td>
      <td>${dataCarsGeneral[i].brand}</td>
      <td>${dataCarsGeneral[i].name}</td>
      <td>${dataCarsGeneral[i].year}</td>
      <td>${dataCarsGeneral[i].kilometer}</td>
      <td>${dataCarsGeneral[i].transmission}</td>
      <td>${dataCarsGeneral[i].price}</td>
      <td>${dataCarsGeneral[i].img}</td>
      <td>${dataCarsGeneral[i].owners}</td>
      <td>${dataCarsGeneral[i].description}</td>
      <td>${dataCarsGeneral[i].verified}</td>
      <td>${dataCarsGeneral[i].sold}</td>
      <td>${dataCarsGeneral[i].seller_id_user}</td>
      <td><button type="button" class="btn btn-primary" onclick="modificarInfo(${dataCarsGeneral[i].id_car})" data-bs-toggle="modal" data-bs-target="#modalModificar">Modificar</button></td>
      <td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="eliminarInfo(${dataCarsGeneral[i].id_car})">Eliminar</button></td>
    </tr>
    `;
  }
  htmlContent += `</tbody></table></div>`;
  infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
}

//sessionStorage.getItem("id_user_logged") == 0
if (true) {
  infoCliente.classList.add("d-none");
  infoCliente.innerHTML = "";
  
  let dataCarsGeneral = JSON.parse(localStorage.getItem("dataCarsGeneral"));

  createTableAdm(dataCarsGeneral);

  btnAgregarAdm.addEventListener("click", (event) => {
    event.preventDefault();
      // Validamos que no haya campos vacíos, si no lanzamos sweet alert
      if (noSerieTextAdd.value != "" &&
          tipoTextAdd.value != "" &&
          marcaTextAdd.value != "" &&
          nombreTextAdd.value != "" &&
          anioTextAdd.value != "" &&
          kilTextAdd.value != "" &&
          transTextAdd.value != "" &&
          precioTextAdd.value != "" &&
          imgTextAdd.value != "" &&
          duenosTextAdd.value != "" &&
          descripTextAdd.value != "" &&
          verifTextAdd.value != "" &&
          vendTextAdd.value != "" &&
          idVendedorTextAdd.value != "") {
        // Simulamos el autoincrement de id_account
        let contadorCarsGeneral = parseInt(localStorage.getItem("contadorCarsGeneral")) + 1;
        localStorage.setItem("contadorCarsGeneral", JSON.stringify(contadorCarsGeneral));
        // Reasignamos valores al objeto
        let datumCarsGeneral = {
          // noSerie: noSerieTextAdd.value,
          id_car: contadorCarsGeneral,
          type: tipoTextAdd.value,
          brand: marcaTextAdd.value,
          name: nombreTextAdd.value,
          year: anioTextAdd.value,
          kilometer: kilTextAdd.value,
          transmission: transTextAdd.value,
          price: precioTextAdd.value,
          img: imgTextAdd.value,
          owners: duenosTextAdd.value,
          description: descripTextAdd.value,
          verified: verifTextAdd.value,
          sold: vendTextAdd.value,
          seller_id_user: idVendedorTextAdd.value
        };
        // Agregamos a todos los registros y de manera local (actualizamos)
        dataCarsGeneral.push(datumCarsGeneral);
        localStorage.setItem("dataCarsGeneral",JSON.stringify(dataCarsGeneral));
        createTableAdm(dataCarsGeneral);
        // Mostramos mensaje de éxito
        Swal.fire({
          title: "Registro exitoso",
          text: "El carro fue agregado",
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
  });//btnAgregar.addEventListener()




  function modificarInfo(id_car) {

  // Creamos una variable para el objeto método de depósito del usuario actual
  let datumCarsGeneral = null;

  // Recuperamos ese objeto en caso que exista, caso contrario se queda null
    for (i = 0; i < dataCarsGeneral.length; i++) {
    if (dataCarsGeneral[i].id_car == id_car) {
      datumCarsGeneral = dataCarsGeneral[i];
      break;
    } 
  }

    
    
    // noSerieTextNew.value = datumCarsGeneral.noSerie;
    tipoTextNew.value = datumCarsGeneral.type;
    marcaTextNew.value = datumCarsGeneral.brand;
    nombreTextNew.value = datumCarsGeneral.name;
    anioTextNew.value = datumCarsGeneral.year;
    kilTextNew.value = datumCarsGeneral.kilometer;
    transTextNew.value = datumCarsGeneral.transmission;
    precioTextNew.value = datumCarsGeneral.price;
    imgTextNew.value = datumCarsGeneral.img;
    duenosTextNew.value = datumCarsGeneral.owners;
    descripTextNew.value = datumCarsGeneral.description;
    verifTextNew.value = datumCarsGeneral.verified;
    vendTextNew.value = datumCarsGeneral.sold;

    
  // Evento modificar, se valida si existe ya un registro, siendo así sí se puede
  // editar o eliminar, pero no agregar
  btnModificarAdm.addEventListener("click", (event) => {
    event.preventDefault();
    // Variable temporal/nuevo para los nuevos datos
    let datumCarsGeneralNew = null;
      // Validamos que no haya campos vacíos, si no lanzamos sweet alert
      if (noSerieTextNew.value != "" &&
          tipoTextNew.value != "" &&
          marcaTextNew.value != "" &&
          nombreTextNew.value != "" &&
          anioTextNew.value != "" &&
          kilTextNew.value != "" &&
          transTextNew.value != "" &&
          precioTextNew.value != "" &&
          imgTextNew.value != "" &&
          duenosTextNew.value != "" &&
          descripTextNew.value != "" &&
          verifTextNew.value != "" &&
          vendTextNew.value != "") {
        // Reasignamos valores al objeto temporal
        datumCarsGeneralNew = {
          id_car: datumCarsGeneral.id_car,//este no cambia
          type: tipoTextNew.value,
          brand: marcaTextNew.value,
          name: nombreTextNew.value,
          year: anioTextNew.value,
          kilometer: kilTextNew.value,
          transmission: transTextNew.value,
          price: precioTextNew.value,
          img: imgTextNew.value,
          owners: duenosTextNew.value,
          description: descripTextNew.value,
          verified: verifTextNew.value,
          sold: vendTextNew.value,
          seller_id_user: datumCarsGeneral.seller_id_user,//este no cambia
        };
        // Buscamos el índice del objeto y ahí guardamos la información actualizada
        for (i = 0; i < dataCarsGeneral.length; i++) {
            if (dataCarsGeneral[i] == datumCarsGeneral) {
              dataCarsGeneral[i] = datumCarsGeneralNew;
              break;
            } 
        }

        // Actualizamos las referencias
        datumCarsGeneral = datumCarsGeneralNew;
        localStorage.setItem("dataCarsGeneral",JSON.stringify(dataCarsGeneral));
        createTableAdm(dataCarsGeneral);
        // Show success message
        Swal.fire({
          title: "Modificación exitosa",
          text: "La cuenta de depósito fue modificada",
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
  });//btnModificarAdm.addEventListener
  }

  function eliminarInfo(id_car) {
  
  //Buscamos el objeto dentro de todos los registros y con el índice y splice lo eliminamos
        for (i = 0; i < dataCarsGeneral.length; i++) {
            if (dataCarsGeneral[i].id_car == id_car) {
              dataCarsGeneral.splice(i,1);
              break;
            } 
        }
        // Actualizamos referencias
  localStorage.setItem("dataCarsGeneral", JSON.stringify(dataCarsGeneral));
  createTableAdm(dataCarsGeneral);
        // Show success message
        Swal.fire({
          title: "Eliminación exitosa",
          text: "El vehículo fue eliminado",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });
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