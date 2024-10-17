let navUserProfile = document.getElementById("navUserProfile").classList.add("active");

let infoCliente = document.getElementById("infoCliente");
let infoAdmin = document.getElementById("infoAdmin");
let headerAdmin = document.getElementById("headerAdmin");
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
  
  //  createTableAdmFetch();

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
}// function validateUser
// ***********Ejecución
validateUser();