let navUserProfile = document.getElementById("navUserProfile").classList.add("active");

let infoCliente = document.getElementById("infoCliente");
// let infoAdmin = document.getElementById("infoAdmin");
let headerAdmin = document.getElementById("headerAdmin");
let linkProfile = document.getElementById("linkProfile");
let linkPayment = document.getElementById("linkPayment");
let linkPurchase = document.getElementById("linkPurchase");
let linkLogOut = document.getElementById("linkLogOut");
let linkDeposit = document.getElementById("linkDeposit");

let fullNameTextNew= document.getElementById("fullName-ipt-new");
let phoneNumberTextNew = document.getElementById("phoneNumber-ipt-new");
let emailTextNew = document.getElementById("email-ipt-new");
let birthDateTextNew = document.getElementById("birthDate-ipt-new");
let typeUserTextNew = document.getElementById("typeUser-ipt-new");
let idUserTextNew= document.getElementById("idUser-ipt-new");

let fullNameTextAdd= document.getElementById("fullName-ipt-add");
let phoneNumberTextAdd = document.getElementById("phoneNumber-ipt-add");
let emailTextAdd = document.getElementById("email-ipt-add");
let birthDateTextAdd = document.getElementById("birthDate-ipt-add");
let typeUserTextAdd = document.getElementById("typeUser-ipt-add");
let passwordTextAdd = document.getElementById("password-ipt-add");

let btnModificarAdm = document.getElementById("btn-modificar-adm");
let btnAgregarAdm = document.getElementById("btn-agregar-adm");

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
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`); 
  const requestOptions = {
     method: "GET",
     headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/users/", requestOptions)
    .then((response) => response.json())
    .then((dataUsers) => {
  headerAdmin.innerHTML = "";
  let htmlContent = "";
  htmlContent += ` 

  <div class="text-left">
  <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar</a></div>
  <div class="table-responsive">
  <table class="table table-bordered  border-secondary align-middle"> 
      <thead>
        <tr>
      <th scope="col">Id user</th>
      <th scope="col">Nombre completo</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Correo electrónico</th>
      <th scope="col">Fecha de nacimiento</th>
      <th scope="col">Tipo de usuario</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
`;
  for (i = 0; i < dataUsers.length; i++) {
    htmlContent += `
      <tr>
      <th scope="row">${dataUsers[i].idUser}</th>
      <td>${dataUsers[i].fullName}</td>
      <td>${dataUsers[i].phoneNumber}</td>
      <td>${dataUsers[i].email}</td>
      <td>${dataUsers[i].birthDate}</td>
      <td>${dataUsers[i].typeUser}</td>
      <td><button type="button" class="btn btn-primary" onclick="modificarInfo(${dataUsers[i].idUser})" data-bs-toggle="modal" data-bs-target="#modalModificar">Modificar</button></td>
      <td><button type="button" class="btn btn-primary" id="btn-modificar-adm" onclick="eliminarInfo(${dataUsers[i].idUser})">Eliminar</button></td>
    </tr>
    `;
  }
  htmlContent += `</tbody></table></div>`;
      headerAdmin.insertAdjacentHTML("beforeend", htmlContent);
      })
    .catch((error) => console.error(error));
}//function createTableAdmFetch()

function modUserAdmFetch(idUser) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
        `http://localhost:8080/api/users/${idUser}?fullName=${fullNameTextNew.value}&phoneNumber=${phoneNumberTextNew.value}&email=${emailTextNew.value}&birthDate=${birthDateNew.value}&=typeUser${typeUserTextNew.value}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((dataUser) => {
      
      if (dataUser.length > 0) {
          fullNameTextAdd.value="";
          phoneNumberTextAdd.value="";
          emailTextAdd.value="";
          birthDateTextAdd.value="";
          typeUserTextAdd.value="";
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Modificación exitosa.", "El usuario fue modificado.");
      } else {
        // Mostrar mensaje error
        alertFailure("Modificación fallida",`Revisa los datos ingresados`);
      }
      
    })
    .catch((error) => console.error(error));
}

  function eliminarInfo(idUser) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
 const requestOptions = {
   method: "DELETE",
   headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/api/cars/${idUser}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
    
      createTableAdmFetch();
      alertSuccess(
        "Eliminación exitosa",
        "El usuario fue eliminado"
      );
    })
    .catch((error) => console.error(error));
  }


  function modificarInfo(idUser) {
    showInfoModAdmFetch(idUser);
  // Evento modificar, se valida si existe ya un registro, siendo así sí se puede
  // editar o eliminar, pero no agregar
  btnModificarAdm.addEventListener("click", (event) => {
    event.preventDefault();
    modUserAdmFetch(idUser)
  });//btnModificarAdm.addEventListener
  }
function showInfoModAdmFetch(idUser) {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`); 
  const requestOptions = {
     method: "GET",
     headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/users/", requestOptions)
    .then((response) => response.json())
    .then((dataUsers) => {
     
    idUserTextNew.setAttribute("disabled","true");
    fullNameTextNew.value = dataUsers.fullName;
    phoneNumberTextNew.value = dataUsers.phoneNumber;
    emailTextNew.value = dataUsers.email;
    birthDateTextNew.value = dataUsers.birthDate;
    typeUserTextNew.value = dataUsers.typeUser;
    })
    .catch((error) => console.error(error));
} //showInfoModAdmFetch

function addUserAdmFetch() {
  const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
          fullName: fullNameTextAdd.value,
          phoneNumber: phoneTextAdd.value,
          email: emailTextAdd.value,
          birthDate: birthDateTextAdd.value,
          password: passwordTextAdd.value,
          typeUser: typeUserTextAdd.value,
   
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/users/", requestOptions)
    .then((response) => response.text())
    .then((dataUser) => {
     
      if (dataUser.length > 0) {
          fullNameTextAdd.value="";
          phoneNumberTextAdd.value="";
          emailTextAdd.value="";
          birthDateTextAdd.value="";
          passwordTextAdd.value="";
          typeUserTextAdd.value="";
   
          createTableAdmFetch();
        // Mostramos mensaje de éxito
        alertSuccess("Registro exitoso", "El usuario fue agregado.");
      } else {
        // Mostrar mensaje error
        alertFailure("Registro fallido",`El correo ${emailTextAdd.value} ya se encuentra registrado`);
      }
    })
    .catch((error) => console.error(error));
} //function addDepositAdmFetch()

//function validateUser
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
      if (fullNameTextAdd.value != "" &&
          phoneNumberTextAdd.value != "" &&
          emailTextAdd.value != "" &&
          birthDateTextAdd.value != "" &&
          typeUserTextAdd.value != "") {
        addUserAdmFetch()
        
      } else {
        alertFailure("Registro fallido","Ningún campo puede estar vacío" );
      }//else
  });//btnAgregar.addEventListener()



} else if (userData.typeUser =="client") {
  // Escondemos la vista de administrador
  // infoAdmin.innerHTML = "";
  headerAdmin.innerHTML = "";
  console.log(userData);
  let nameUserTxt = document.getElementById("name-ipt");
  let emailUserTxt = document.getElementById("correo-ipt");
  let birthdayUsertxt = document.getElementById("birtday-ipt");
  let phoneUsertxt = document.getElementById("telefono-ipt");
  nameUserTxt.value = userData.fullName;
  emailUserTxt = emailUser;
  birthdayUsertxt = userData.birthDate;
  phoneUsertxt = userData.phoneNumber;

  //createCarouselBuyed();
  //------------------------------------------------PENDIENTE
} else {
    infoCliente.classList.add("d-none");
  headerAdmin.classList.add("d-none");
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
}// function validateUser
// ***********Ejecución
validateUser();