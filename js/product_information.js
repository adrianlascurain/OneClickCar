let navProductList = document.getElementById("navProductList").classList.add("active");

let htmlContent = "";
let card_carro = document.getElementById("card_car");
let product_title = document.getElementById("product_title");
let price_car = document.getElementById("price_car");
let opinions = document.getElementById("opinions");
let verified_car = document.getElementById("verified_car");
let insert_opinions = document.getElementById("insert_opinions");
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let btnGoBack = document.getElementById("btnGoBack");

let btnWhatsApp = document.getElementById("btnWhatsApp");
let btnBuy = document.getElementById("btnBuy");
let btnConfirmBuy = document.getElementById("btnConfirmBuy");
let currentDate = `${year}-${month}-${day}`;

// Input de ventana modal compra para mostrar
let nameTextShow = document.getElementById("name-ipt-show");
let typeTextShow = document.getElementById("type-ipt-show");
let numberTextShow = document.getElementById("number-ipt-show");
let priceTextShow = document.getElementById("price-ipt-show");
let modalComprar = document.getElementById("containerModal");

// Pruebas
let carSelectedPrueba;
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

function changeCarSold(idCar) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "sold": 1
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`http://3.16.180.62/api/cars/${idCar}?sold=1`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(""))
  .catch((error) => console.error(error));


}

function getDataDeposit(idCar, idUser, idPaymentSelected, idUserLogged) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://3.16.180.62/api/depositmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataDepositMethod) => {
      let idDepositSelected;
      for (i = 0; i < dataDepositMethod.length; i++) {
        if (dataDepositMethod[i].usersIdUser == idUserLogged) {
          idDepositSelected = dataDepositMethod[i].usersIdUser;
          buyCarTransaction(
            idCar,
            idUser,
            idPaymentSelected,
            idDepositSelected,
            idUserLogged
          );
        }
      }
    })
    .catch((error) => console.error(error));
}
function getDataPayment(idCar, idUser, idUserLogged, price) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://3.16.180.62/api/paymentmethods/", requestOptions)
    .then((response) => response.json())
    .then((dataPaymentMethod) => {
      let idPaymentSelected;
      let paymentNull = true;
      for (i = 0; i < dataPaymentMethod.length; i++) {
        if (dataPaymentMethod[i].usersIdUser == idUserLogged) {
          // Si existe mostramos la información, caso contrario se queda vacío el input
          nameTextShow.value = dataPaymentMethod[i].nameCard;
          typeTextShow.value = dataPaymentMethod[i].typeCard;
          numberTextShow.value = dataPaymentMethod[i].numberCard;
          priceTextShow.value = "$" + price.toLocaleString("es-MX") + ".00";
          idPaymentSelected = dataPaymentMethod[i].idCard;
          paymentNull = false;
          break;
        }
      }
      if (paymentNull) {
        alertFailure(
          "Compra fallida.",
          "No cuentas con un método de pago, dirígete a tu perfil y agrega uno"
        );
        let modalFade = document.querySelector(".modal-backdrop");
        modalComprar.classList.add("d-none");
        modalFade.classList.add("d-none");
      } else {
        btnConfirmBuy.addEventListener("click", (event) => {
          event.preventDefault;

          getDataDeposit(idCar, idUser, idPaymentSelected, idUserLogged);

          // changeCarSold(carSelected);
        });
      }
    })
    .catch((error) => console.error(error));
}

function showDataBuyOption(idCar, price, idUser) {
  let idUserLogged = parseInt(sessionStorage.getItem("idUser"));
  getDataPayment(idCar, idUser, idUserLogged, price);
}

function buyCarTransaction(
  idCar,
  idUser,
  idPaymentSelected,
  idDepositSelected,
  idUserLogged
) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    dateTransaction: currentDate,
    usersIdBuyer: idUserLogged,
    usersIdSeller: idUser,
    carsIdCars: idCar,
    paymentMethodIdCard: idPaymentSelected,
    depositMethodIdAccount: idDepositSelected,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://3.16.180.62/api/transactions/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result != null) {

        changeCarSold(idCar);

        alertSuccess(
          "Compra exitosa",
          "Felicidades has adquirido este vehículo, enseguida recibirás un correo con los siguientes trámites para recoger tu vehículo."
        );
        //Redirigir a transacciones
      }
    })
    .catch((error) => console.error(error));
} //buyCarTransaction(id_car);

function createCard(carSelected, sellerSelected) {
   product_title.insertAdjacentHTML(
    "beforeend",
    `${carSelected.brand} ${carSelected.name}`
  );
  htmlContent += `
              
                <div class="card">
                  <!-- Card -->
                  <img src="${
                    carSelected.img
                  }" class="img-fluid" id="img_car" alt="${
    carSelected.description
  }" />
                  <div class="card-body"><!-- Card body -->
                    <h2 class="text-center">Descripción</h2>
                    <p class="p_description">${carSelected.description}</p>
                    <div class="row justify-content-center" id="row_description">
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Año: ${
                        carSelected.year
                      }</div>
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Kilometraje: ${carSelected.kilometer.toLocaleString(
                        "es-MX"
                      )}</div>
                      <div class="div_details col-sm-12 col-lg-4">Dueños: ${
                        carSelected.owners
                      }</div>
                    </div>
                    <div class="row justify-content-center" id="row_description2">
                      <div class="div_details col-sm-12 col-lg-4">Vendedor: ${
                        sellerSelected.fullName
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Transmisión: ${
                        carSelected.transmission
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Precio: $ ${carSelected.price.toLocaleString(
                        "es-MX"
                      )}</div>
                    </div>
                    <div class="text-center div_button_details"><a href="https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${
                      carSelected.brand
                    }%20${carSelected.name}%20${
    carSelected.year
  }" class="btn btn-primary btn-interest">Me interesa</a>
    <a class="btn btn-primary btn-interest" data-bs-toggle="modal" data-bs-target="#modalComprar" id="btnBuy" onclick="showDataBuyOption(${
      carSelected.idCar
    },${carSelected.price},${
    carSelected.usersIdSeller
  })">Comprar</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
              `;
  card_carro.insertAdjacentHTML("beforeend", htmlContent);
  price_car.insertAdjacentHTML(
    "beforeend",
    `$${carSelected.price.toLocaleString("es-MX")}`
  );
  if (carSelected.verified == 1) {
    verified_car.insertAdjacentHTML(
      "beforeend",
      `
            <img
              src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727587993/ozftfyrvtijzuk6cj6qt.png"
              alt="check"
            />
            Verificado
`
    );
  } else {
    verified_car.insertAdjacentHTML(
      "beforeend",
      `
            <img
              src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727677334/u1x9ns8e5gfyvxcfmcxj.png"
              alt="uncheck"
            />
            En proceso de verificación
`
    );
  }
  btnWhatsApp.setAttribute(
    "href",
    `https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${carSelected.brand}%20${carSelected.name}%20${carSelected.year},%20por%20favor.`
  );
} //createCard()

function getDataUsersComments() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  redirect: "follow"
};

fetch("http://3.16.180.62/api/users/", requestOptions)
  .then((response) => response.json())
  .then((dataUsers) => createComments(dataUsers))
  .catch((error) => console.error(error));

};

function createComments(dataUsers) {
  let usersIdSeller = JSON.parse(localStorage.getItem("usersIdSeller"));
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  redirect: "follow"
};

fetch("http://3.16.180.62/api/comments/", requestOptions)
  .then((response) => response.json())
  .then((dataComments) => {
    
    let htmlContent = "";
    let buyerSelected;
    for (i = 0; i < dataComments.length; i++) {
      if (dataComments[i].sellersIdSeller == usersIdSeller) {
        for (k = 0; k < dataUsers.length; k++) {      
          if (dataUsers[k].idUser == dataComments[i].usersIdUser) {
          buyerSelected = dataUsers[k];
          break;
        }
      }
      htmlContent = `
    <div id="div_span_user">
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="span_user"><span class="span_text">${buyerSelected.fullName} - ${dataComments[i].commentDate} - 
    `;
      for (j = 0; j < dataComments[i].rating; j++) {
        htmlContent += "&#9733";
      }
      let emptyStars = 5 - dataComments[i].rating;
      for (k = 0; k < emptyStars; k++) {
        htmlContent += "&#9734";
      }
      htmlContent += ` </span><i>Compra verificada por OneClickCar</i></span></div>
    <p class="p_comment_content">${dataComments[i].content}</p>`;
      opinions.insertAdjacentHTML("beforeend", htmlContent);
    }//if
  } //for
  })
  .catch((error) => console.error(error));
} 

// Function fetch sendOpinion
function showFormComment(userLogged) {
  let htmlContent = "";

  htmlContent += `
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="actual_user">${userLogged.fullName} - ${currentDate}</span></br>
      <form id="formOpinion" action="#opinion_title1">
      <label for="ratingInput">Califica tu compra del 1 al 5:</label></br>
      <div class="divForSelect">
      <select id="ratingInput">
        <option value="" disabled selected></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      </br>
      <label for="commentInput">Déjanos tu comentario:</label></br>
<textarea id="commentInput" class="text-area form-control"></textarea>
      <div class="text-center div_button_details"><button class="btn btn-primary btn-interest" id="btnSendOpinion" type="submit">Enviar para validación</button></div></form>
    `;

  insert_opinions.insertAdjacentHTML("beforeend", htmlContent);

  let formOpinion = document.getElementById("formOpinion");

  formOpinion.addEventListener("submit", (event) => {
    let rating = document.getElementById("ratingInput").value;
    let content = document.getElementById("commentInput").value;

    if (rating != 0) {
      if (content.toString().length != 0) {
        // Se incrementa en 1 por que se agrega otro comentario
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
        myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        content: content,
        rating: rating,
        commentDate: currentDate,
        approved: 1,//Solo con fines para mostrar, debería ser 0
        sellersIdSeller: JSON.parse(localStorage.getItem("usersIdSeller")),
        usersIdUser: userLogged.idUser
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://3.16.180.62/api/comments/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(""))
        .catch((error) => console.error(error));

        document.getElementById("ratingInput").value = "";
        document.getElementById("commentInput").value = "";
        event.preventDefault();
        // Show success message
        Swal.fire({
          title: "Opinión completada",
          text: "Tu opinión será validada conforme a las políticas de OneClickCar",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });

 
      } else {
        event.preventDefault();
        Swal.fire({
          title: "Opinión incompleta",
          text: "Debes escribir una opinión",
          icon: "error",
        });
      }
    } else {
      event.preventDefault();
      Swal.fire({
        title: "Opinión incompleta",
        text: "Debes seleccionar una puntuación",
        icon: "error",
      });
    }
  });
} //sendOpinion()

function getDataUsersForm() {
  let idUserLogged = JSON.parse(sessionStorage.getItem("idUser"));
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  redirect: "follow"
};

fetch(`http://3.16.180.62/api/users/${idUserLogged}`, requestOptions)
  .then((response) => response.json())
  .then((userLogged) => {
    
    showFormComment(userLogged);
    
  })
  .catch((error) => console.error(error));
};

function getDataUsersCard(carSelected) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

fetch(`http://3.16.180.62/api/users/${carSelected.usersIdSeller}`, requestOptions)
  .then((response) => response.json())
  .then((sellerSelected) => {
    createCard(carSelected, sellerSelected);
    
  })
  .catch((error) => console.error(error));
};

function getDataCars() {
  let idCar = JSON.parse(localStorage.getItem("idCar"));

 const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch(`http://3.16.180.62/api/cars/${idCar}`, requestOptions)
  .then((response) => response.json())
  .then((carSelected) => {
    getDataUsersCard(carSelected);
  })
  .catch((error) => console.error(error));
} //getDataCars()



function validateUser() {
	
  let emailUser = sessionStorage.getItem("user");

 const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("token")}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

fetch(`http://3.16.180.62/api/users/email/${emailUser}`, requestOptions)
  .then((response) => response.json())
  .then((userData) => {

    if (userData.typeUser =="client" || userData.typeUser == "admin") {
  getDataCars();
  getDataUsersComments();
  getDataUsersForm();
    } else {
   
  if ((window.location.pathname = "/pages/product_list.html")) {
    // local
    window.location.href = "../pages/log_in.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
  }
}
  }).catch((error) => console.error(error));
}
// ***********Ejecución
validateUser();

