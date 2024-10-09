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
let currentDate = `${year}-${month}-${day}`;


function createCard(listCars, id_car, dataUsers, seller_id_user) {
  let carSelected;
  for (i = 0; i < listCars.length; i++) {
    if (listCars[i].id_car == id_car) {
      carSelected = listCars[i];
    }
  }

  let sellerSelected;
  for (i = 0; i < dataUsers.length; i++) {
    if (dataUsers[i].id_user == seller_id_user) {
      sellerSelected = dataUsers[i];
    }
  }

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
                        sellerSelected.full_name
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
  }" class="btn btn-primary btn-interest">Me interesa</a></div><!-- fin div boton-->
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
            Sin verificación
`
    );
  }
  btnWhatsApp.setAttribute(
    "href",
    `https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${carSelected.brand}%20${carSelected.name}%20${carSelected.year},%20por%20favor.`
  );
} //createCard()

// Function fetch dataCars
// function getDataComments() {
//   const promesa = fetch("../jsons/dataComments.JSON", {
//     method: "GET",
//   });
//   promesa
//     .then((response) => {
//       response
//         .json()
//         .then((dataCommentsFetch) => {
//           if (localStorage.getItem("dataComments") != null) {
//             createOpinios(
//               JSON.parse(localStorage.getItem("dataComments")),
//               dataUsers
//             );
//           } else {
//             localStorage.setItem(
//               "dataComments",
//               JSON.stringify(dataCommentsFetch)
//             );
//             createOpinios(dataCommentsFetch, dataUsers);
//           }
//         })
//         .catch((error) => console.log("Problema con el json", error));
//     })
//     .catch((err) => console.log("Existió un problema con la solicitud", err));
// } //getDataComments()

// Function fetch dataCars
function getDataComments() {
  if (localStorage.getItem("dataComments") != null) {
    createOpinios(
      JSON.parse(localStorage.getItem("dataComments")),
      JSON.parse(localStorage.getItem("dataUsers")),
      JSON.parse(localStorage.getItem("seller_id_user"))
    );
  } else {
    localStorage.setItem("dataComments", JSON.stringify(dataComments));
    createOpinios(
      JSON.parse(localStorage.getItem("dataComments")),
      JSON.parse(localStorage.getItem("dataUsers")),
      JSON.parse(localStorage.getItem("seller_id_user"))
    );
  }
} //getDataComments()

function createOpinios(dataComments, dataUsers, seller_id_user) {
  let htmlContent = "";
  for (i = 0; i < dataComments.length; i++) {
    if (dataComments[i].seller_id_user == seller_id_user) {
      let buyerSelected;
      for (k = 0; k < dataUsers.length; k++) {
        if (dataUsers[k].id_user == dataComments[i].buyer_id_user) {
          buyerSelected = dataUsers[k];
        }
      }
      htmlContent = `
    <div id="div_span_user">
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="span_user"><span class="span_text">${
        buyerSelected.full_name
      } - ${dataComments[i].comment_date} - 
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
    }
  } //if
} //createOpinios()

// Function fetch sendOpinion
function sendOpinion(dataUsers, id_user_logged, seller_id_user) {
  let htmlContent = "";

  let actualUser;
  for (i = 0; i < dataUsers.length; i++) {
    if (dataUsers[i].id_user == id_user_logged) {
      actualUser = dataUsers[i];
    }
  }

  htmlContent += `
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="actual_user">${
        actualUser.full_name
      } - ${currentDate}</span></br>
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
        let contadorComment = parseInt(localStorage.getItem("contadorComment")) + 1;
        
        localStorage.setItem(
          "contadorComment",
          JSON.stringify(contadorComment)
        );

        let comment = {
          id_comment: contadorComment,
          content: content.toString(),
          rating: parseInt(rating),
          comment_date: currentDate,
          approved: 0,
          buyer_id_user: id_user_logged,
          seller_id_user: seller_id_user,
        };

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

        let dataComments = JSON.parse(localStorage.getItem("dataComments"));
        dataComments.push(comment);
        localStorage.setItem("dataComments", JSON.stringify(dataComments));
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

// ***********Ejecución
if (
  localStorage.getItem("dataCarsOnSale") != null &&
  localStorage.getItem("id_car") != null &&
  localStorage.getItem("seller_id_user") != null &&
  localStorage.getItem("dataUsers") != null
) {
  createCard(
    JSON.parse(localStorage.getItem("dataCarsOnSale")),
    JSON.parse(localStorage.getItem("id_car")),
    JSON.parse(localStorage.getItem("dataUsers")),
    JSON.parse(localStorage.getItem("seller_id_user"))
  );
  getDataComments();
  sendOpinion(
    JSON.parse(localStorage.getItem("dataUsers")),
    JSON.parse(sessionStorage.getItem("id_user_logged")),
    JSON.parse(localStorage.getItem("seller_id_user"))
  );
} else {
  if ((window.location.pathname = "/pages/product_list.html")) {
    // local
    window.location.href = "../pages/sign_in.html";
  } else {
    // github
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
  }
}

