let navUserProfile = document.getElementById("navUserProfile").classList.add("active");
let infoCliente = document.getElementById("infoCliente");
let infoAdmin = document.getElementById("infoAdmin");
let headerAdmin = document.getElementById("headerAdmin");
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
let btnChangeCars = document.getElementById("btnChangeCars");
let btnChangeTrans = document.getElementById("btnChangeTrans");
let btnChangeComm = document.getElementById("btnChangeComm");

let linkProfile = document.getElementById("linkProfile");
let linkPayment = document.getElementById("linkPayment");
let linkPurchase = document.getElementById("linkPurchase");
let linkLogOut = document.getElementById("linkLogOut");
let linkDeposit = document.getElementById("linkDeposit");

let carouselSold = document.getElementById("carouselSold");
let carouselBought = document.getElementById("carouselBought");

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
function createTableAdmFetch() {
    const myHeaders = new Headers();
  
   const requestOptions = {
     method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/cars/", requestOptions)
    .then((response) => response.json())
    .then((dataCarsGeneral) => {
  infoAdmin.innerHTML = "";
  let htmlContent = "";
  htmlContent += ` 

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
      <th scope="row">${dataCarsGeneral[i].idCar}</th>
      <td>${dataCarsGeneral[i].nuSerial}</td> 
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
      <td>${dataCarsGeneral[i].usersIdSeller}</td>
      <td><button type="button" class="btn btn-primary" onclick="modificarInfo(${dataCarsGeneral[i].idCar})" data-bs-toggle="modal" data-bs-target="#modalModificar">Modificar</button></td>
      <td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="eliminarInfo(${dataCarsGeneral[i].idCar})">Eliminar</button></td>
    </tr>
    `;
  }
  htmlContent += `</tbody></table></div>`;
      infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
      })
    .catch((error) => console.error(error));
}//function createTableAdmFetch()

function createTableAdmFetchComm() {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`); 
  const requestOptions = {
     method: "GET",
     headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/comments/", requestOptions)
    .then((response) => response.json())
    .then((dataComments) => {
      infoAdmin.innerHTML = "";
      let htmlContent = "";
      htmlContent += ` 
  <div class="table-responsive">
  <table class="table table-bordered  border-secondary align-middle"> 
      <thead>
        <tr>
      <th scope="col">Id comentario</th>
      <th scope="col">Contenido</th>
      <th scope="col">Calificación</th>
      <th scope="col">Fecha comentario</th>
      <th scope="col">Aprobado</th>
      <th scope="col">Id vendedor</th>
      <th scope="col">Id comprador</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
`;
  for (i = 0; i < dataComments.length; i++) {
    htmlContent += `
      <tr>
      <th scope="row">${dataComments[i].idComment}</th>
      <td>${dataComments[i].content}</td>
      <td>${dataComments[i].rating}</td>
      <td>${dataComments[i].commentDate}</td>
      <td>${dataComments[i].approved}</td>
      <td>${dataComments[i].sellersIdSeller}</td>
      <td>${dataComments[i].usersIdUser}</td>`;
      
    if (dataComments[i].approved==0) {
      htmlContent += `<td><button type="button" class="btn btn-primary" onclick="approveComment(${dataComments[i].idComment})" >Aprobar</button></td>`;
    } else {
      htmlContent += `<td></td>`;
    }
      htmlContent +=`<td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="eliminarComment(${dataComments[i].idComment})">Eliminar</button></td>
    </tr>
    `;
  }
  htmlContent += `</tbody></table></div>`;
      infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
      })
    .catch((error) => console.error(error));
}//function createTableAdmFetch()

function createTableAdmFetchTrans() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

   const requestOptions = {
     method: "GET",
     headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/transactions/", requestOptions)
    .then((response) => response.json())
    .then((dataTransactions) => {
  infoAdmin.innerHTML = "";
  let htmlContent = "";
  htmlContent += ` 
  <div class="table-responsive">
  <table class="table table-bordered  border-secondary align-middle"> 
      <thead>
        <tr>
      <th scope="col">Id transacción</th>
      <th scope="col">Fecha transacción</th>
      <th scope="col">Id comprador</th>
      <th scope="col">Id vendedor</th>
      <th scope="col">Id vehículo</th>
      <th scope="col">Id método de pago</th>
      <th scope="col">Id cuenta depósito</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
`;
  for (i = 0; i < dataTransactions.length; i++) {
    htmlContent += `
      <tr>
      <th scope="row">${dataTransactions[i].idTransaction}</th>
      <td>${dataTransactions[i].dateTransaction}</td> 
      <td>${dataTransactions[i].usersIdBuyer}</td>
      <td>${dataTransactions[i].usersIdSeller}</td>
      <td>${dataTransactions[i].carsIdCars}</td>
      <td>${dataTransactions[i].paymentMethodIdCard}</td>
      <td>${dataTransactions[i].depositMethodIdAccount}</td>
    </tr>
    `;
  }
  htmlContent += `</tbody></table></div>`;
      infoAdmin.insertAdjacentHTML("beforeend", htmlContent);
      })
    .catch((error) => console.error(error));
}//function createTableAdmFetch()

// Función que agrega un car con put a la DB
function addCarAdmFetch() {
  const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
          nuSerial: noSerieTextAdd.value,
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
          usersIdSeller: idVendedorTextAdd.value
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/cars/", requestOptions)
    .then((response) => response.text())
    .then((dataCar) => {
     
      if (dataCar.length > 0) {
          noSerieTextAdd.value="";
          tipoTextAdd.value="";
          marcaTextAdd.value="";
          nombreTextAdd.value="";
          anioTextAdd.value="";
          kilTextAdd.value="";
          transTextAdd.value="";
          precioTextAdd.value="";
          imgTextAdd.value="";
          duenosTextAdd.value="";
          descripTextAdd.value="";
          verifTextAdd.value="";
          vendTextAdd.value="";
          idVendedorTextAdd.value="";
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Registro exitoso", "El vehículo fue agregado.");
      } else {
        // Mostrar mensaje error
        alertFailure("Registro fallido",`El número de serie ${noSerieTextAdd.value} ya se encuentra registrado`);
      }
    })
    .catch((error) => console.error(error));
} //function addDepositAdmFetch()

// Función que recupera la información específica del usuario y la muestra en el modal
function showInfoModAdmFetch(idCar) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/cars/${idCar}`, requestOptions)
    .then((response) => response.json())
    .then((dataCar) => {
     
      noSerieTextNew.setAttribute("disabled","true");
    noSerieTextNew.value = dataCar.nuSerial;
    tipoTextNew.value = dataCar.type;
    marcaTextNew.value = dataCar.brand;
    nombreTextNew.value = dataCar.name;
    anioTextNew.value = dataCar.year;
    kilTextNew.value = dataCar.kilometer;
    transTextNew.value = dataCar.transmission;
    precioTextNew.value = dataCar.price;
    imgTextNew.value = dataCar.img;
    duenosTextNew.value = dataCar.owners;
    descripTextNew.value = dataCar.description;
    verifTextNew.value = dataCar.verified;
      vendTextNew.value = dataCar.sold;
      idVendedorTextAdd.value = dataCar.usersIdSeller;
    })
    .catch((error) => console.error(error));
} //showInfoModAdmFetch

// Función que modifica la información insertada en el modal
function modCarAdmFetch(idCar) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
        `http://localhost:8080/api/cars/${idCar}?numSerial=${noSerieTextNew.value}&type=${tipoTextNew.value}&brand=${marcaTextNew.value}&name=${nombreTextNew.value}&=year${anioTextNew.value}&kilometer=${kilTextNew.value}&transmission=${transTextNew.value}&price=${precioTextNew.value}&img=${imgTextNew.value}&owners=${duenosTextNew.value}&description=${descripTextNew.value}&verified=${verifTextNew.value}&sold=${vendTextNew.value}&=usersIdSeller${idVendedorTextAdd.value}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((dataCar) => {
      
      if (dataCar.length > 0) {
          noSerieTextAdd.value="";
          tipoTextAdd.value="";
          marcaTextAdd.value="";
          nombreTextAdd.value="";
          anioTextAdd.value="";
          kilTextAdd.value="";
          transTextAdd.value="";
          precioTextAdd.value="";
          imgTextAdd.value="";
          duenosTextAdd.value="";
          descripTextAdd.value="";
          verifTextAdd.value="";
          vendTextAdd.value="";
          idVendedorTextAdd.value="";
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Modificación exitosa.", "El vehículo fue modificado.");
      } else {
        // Mostrar mensaje error
        alertFailure("Modificación fallida",`Revisa los datos ingresados`);
      }
      
    })
    .catch((error) => console.error(error));
}

function approveComment(idComment) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`http://localhost:8080/api/comments/${idComment}?approved=1`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    
    createTableAdmFetchComm();
    alertSuccess("Aprobación exitosa","El comentario fue aprobado.");
   })
  .catch((error) => console.error(error));
}

function eliminarComment(idComment) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/comments/${idComment}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
    
      createTableAdmFetchComm();
      alertSuccess("Eliminación exitosa","El comentario fue eliminado");
    })
    .catch((error) => console.error(error));

}

  function modificarInfo(idCar) {
    showInfoModAdmFetch(idCar);
  // Evento modificar, se valida si existe ya un registro, siendo así sí se puede
  // editar o eliminar, pero no agregar
  btnModificarAdm.addEventListener("click", (event) => {
    event.preventDefault();
    modCarAdmFetch(idCar)
  });//btnModificarAdm.addEventListener
  }

  function eliminarInfo(idCar) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
 const requestOptions = {
   method: "DELETE",
   headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/cars/${idCar}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
    
      createTableAdmFetch();
      alertSuccess(
        "Eliminación exitosa",
        "El vehículo fue eliminado"
      );
    })
    .catch((error) => console.error(error));
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
    if (userData.typeUser == "admin") {
      infoCliente.classList.add("d-none");
      infoCliente.innerHTML = "";
      
      createTableAdmFetch();


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
            addCarAdmFetch()
            
          } else {
            alertFailure("Registro fallido","Ningún campo puede estar vacío" );
          }//else
      });//btnAgregar.addEventListener()


      btnChangeCars.addEventListener("click", event => {
        infoAdmin.innerHTML = "";
        createTableAdmFetch();
      });
      btnChangeTrans.addEventListener("click", event => {
        infoAdmin.innerHTML = "";
        createTableAdmFetchTrans();
      });
      btnChangeComm.addEventListener("click", event => {
        infoAdmin.innerHTML = "";
        createTableAdmFetchComm();
      });
      
    } else if (userData.typeUser =="client") {
      // Escondemos la vista de administrador
      infoAdmin.innerHTML = "";
      headerAdmin.innerHTML = "";
      
      createCarouselSold();
      recoverBoughts();
      //------------------------------------------------PENDIENTE
    } else {
        infoCliente.classList.add("d-none");
      infoAdmin.classList.add("d-none");
      if ((window.location.pathname = "/pages/purchase_history.html")) {
        // local
        window.location.href = "../pages/sign_in.html";
      } else {
        // github
        window.location.href =
          "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
      }
    }
  }).catch((error) => console.error(error));
}
function recoverBoughts() {
  let idUserLogged = parseInt(sessionStorage.getItem("idUser"));
   const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

   const requestOptions = {
     method: "GET",
     headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/transactions/", requestOptions)
    .then((response) => response.json())
    .then((dataTransactions) => {
    
      let carsBought=[];
      if (dataTransactions[0] != null) {
        for (i = 0; i < dataTransactions.length; i++){
          if (dataTransactions[i].usersIdBuyer == idUserLogged) {
            carsBought.push(dataTransactions[i].carsIdCars);
          }
        }
     
        createCarouselBought(carsBought);
      } else {
        let htmlContMobile="";
        htmlContMobile += `<div class="carousel-inner">
              <div class="carousel-item active">
                <div class="">
                <div class="card" >
              <img src="" alt="Aún no has comprado vehículos"
              >
              <div class="card-body>
              <h5></>
              <span></span><hr>
              <span></span>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>`;
        carouselBought.insertAdjacentHTML("beforeend", htmlContMobile);
        htmlContMobile = "";
    }

    })




}



// Función para crear carousels en versión Mobile
function createCarouselBought(carsBought) {

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch(`http://localhost:8080/api/cars/`, requestOptions)
    .then((response) => response.json())
    .then((dataCarsGeneral) => {
      let htmlContMobile="";
      let isActive = false;
      htmlContMobile += `<div class="carousel-inner">
  `; // Inserción hasta inner
      for (i = 0; i < dataCarsGeneral.length; i++) {
       
        for (j = 0; j < carsBought.length; j++){
           
        if (dataCarsGeneral[i].idCar == carsBought[j] &&
          dataCarsGeneral[i].sold == 1
        ) {

          if (isActive) {
            htmlContMobile += `<div class="carousel-item">`;
          } else {
            htmlContMobile += `<div class="carousel-item active">`;
          }
          isActive = true;
          htmlContMobile += `
              
                <div class="card" >
                  <!-- Card -->
                  <img src="${dataCarsGeneral[i].img
            }" class="card-img-top img-fluid" alt="${dataCarsGeneral[i].name}" />
                  <div class="card-body text-center"><!-- Card body -->
                  <br>
                    <h5 class="text-center card-text">${dataCarsGeneral[i].brand} ${dataCarsGeneral[i].name
            } ${dataCarsGeneral[i].year}</h5><hr><br>
                    <span class="card-text">| ${dataCarsGeneral[i].kilometer.toLocaleString("es-MX")} KM |</span><hr><br>
                    <span class="card-text">$${dataCarsGeneral[i].price.toLocaleString("es-MX")}</span><br>
              </div><!-- ****************************FIN card-body -->
            
                </div><!-- ****************************FIN Card -->
              
          </div> <!-- ****************************FIN carousel-item -->
          </div><!-- ****************************FIN carousel-inner -->`;
        }//if
        }//for
        }
      htmlContMobile += `
      
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBought"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselBought"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  `;
      // Inserción final al documento
      carouselBought.insertAdjacentHTML("beforeend", htmlContMobile);
      htmlContMobile = "";
      isActive = false;
    })//then
    .catch((error) => console.error(error));
}


function createCarouselSold() {
  let htmlContMobile="";
  let idUserLogged = parseInt(sessionStorage.getItem("idUser"));
  let isActive = false;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch(`http://localhost:8080/api/cars/`, requestOptions)
    .then((response) => response.json())
    .then((dataCarsGeneral) => {
      htmlContMobile += `
      <div class="carousel-inner">
  `; // Inserción hasta inner
      for (i = 0; i<dataCarsGeneral.length; i++) {
        if (dataCarsGeneral[i].usersIdSeller == idUserLogged &&
          dataCarsGeneral[i].sold == 1
        ) {
          if (isActive) {
            htmlContMobile += `
          <div class="carousel-item">`;
          } else {
            htmlContMobile += `
          <div class="carousel-item active">`;
          }
          isActive = true;
          htmlContMobile += `
              <div class="">
                <div class="card" >
                  <!-- Card -->
                  <img src="${dataCarsGeneral[i].img
            }" class="card-img-top img-fluid" alt="${dataCarsGeneral[i].name}" />
                  <div class="card-body text-center"><!-- Card body -->
                  <br>
                    <h5 class="text-center card-text">${dataCarsGeneral[i].brand} ${dataCarsGeneral[i].name
            } ${dataCarsGeneral[i].year}</h5><hr><br>
                    <span class="card-text">| ${dataCarsGeneral[i].kilometer.toLocaleString("es-MX")} KM |</span><hr><br>
                    <span class="card-text">$${dataCarsGeneral[i].price.toLocaleString("es-MX")}</span><br>
              </div><!-- ****************************FIN card-body -->
            
                </div><!-- ****************************FIN Card -->
              </div><!-- ****************************FIN col-12 -->
          </div> <!-- ****************************FIN carousel-item -->
          </div><!-- ****************************FIN carousel-inner -->`;
        }//if
      }//for
      htmlContMobile += `
      
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSold"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselSold"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  `;
      // Inserción final al documento
      carouselSold.insertAdjacentHTML("beforeend", htmlContMobile);
      htmlContMobile = "";
      isActive = false;
    })//then
    .catch((error) => console.error(error));
}
// ***********Ejecución
validateUser();





  

      