let navProductList = document
  .getElementById("navProductList")
  .classList.add("active");

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
let currentDate = `${month} / ${day} /${year}`;

let dataClients = [
  {
    idClient: 1,
    name: "AdrianH",
  },
  {
    idClient: 2,
    name: "LibertadR",
  },
  {
    idClient: 3,
    name: "LeslieE",
  },
  {
    idClient: 4,
    name: "LuisM",
  },
];

let dataComments = [
  {
    id_comment: 1,
    content:
      "Compré un Nissan Versa 2018 con SergioR y fue una excelente adquisición a pesar de tener más de 200,000 kms, estéticamente y mecánicamente se encontraba en perfectas condiciones, llevó más de 1 año y sin necesidad de mantenimientos correctivos.",
    rating: 5,
    comment_date: "08 / 31 / 2024",
    id_buyer: 1,
    id_seller: 1,
    approved: true,
  },
  {
    id_comment: 2,
    content:
      "Adquirí una Hilux 2015 con SergioR y fue una buena compra, se respetó el precio y las condiciones en las que se me comentó que se encontraba la camioneta, tanto el vendedor como OneClickCar se aseguraron de brindar confiabilidad al proceso.",
    rating: 4,
    comment_date: "08 / 15 / 2024",
    id_buyer: 1,
    id_seller: 2,
    approved: true,
  },
  {
    id_comment: 3,
    content:
      "Le compré un Toyoya Yaris a SergioR, al inicio todo iba bien pero unos meses posteriores la bomba de gasolina falló, aunque me comentaron que era un tema de desgaste por uso y antigüedad, reconozco que todo el proceso con el vendedor y la platafora fue transparente.",
    rating: 3,
    comment_date: "08 / 14 / 2024",
    id_buyer: 1,
    id_seller: 3,
    approved: true,
  },
];

function createCard(listCars, id_cars) {
  product_title.insertAdjacentHTML(
    "beforeend",
    `${listCars[id_cars].brand} ${listCars[id_cars].name}`
  );
  htmlContent += `
              
                <div class="card">
                  <!-- Card -->
                  <img src="${
                    listCars[id_cars].img
                  }" class="img-fluid" id="img_car" alt="${
    listCars[id_cars].description
  }" />
                  <div class="card-body"><!-- Card body -->
                    <h2 class="text-center">Descripción</h2>
                    <p class="p_description">${
                      listCars[id_cars].description
                    }</p>
                    <div class="row justify-content-center" id="row_description">
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Año: ${
                        listCars[id_cars].year
                      }</div>
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Kilometraje: ${listCars[
                        id_cars
                      ].kilometer.toLocaleString("es-MX")}</div>
                      <div class="div_details col-sm-12 col-lg-4">Dueños: ${
                        listCars[id_cars].owners
                      }</div>
                    </div>
                    <div class="row justify-content-center" id="row_description2">
                      <div class="div_details col-sm-12 col-lg-4">Vendedor: ${
                        listCars[id_cars].seller
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Transmisión: ${
                        listCars[id_cars].transmission
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Precio: $ ${listCars[
                        id_cars
                      ].price.toLocaleString("es-MX")}</div>
                    </div>
                    <div class="text-center div_button_details"><a href="https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${
                      listCars[id_cars].brand
                    }%20${listCars[id_cars].name}%20${
    listCars[id_cars].year
  }" class="btn btn-primary btn-interest">Me interesa</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
              `;
  card_carro.insertAdjacentHTML("beforeend", htmlContent);
  price_car.insertAdjacentHTML(
    "beforeend",
    `$${listCars[id_cars].price.toLocaleString("es-MX")}`
  );
  if (listCars[id_cars].verified == "true") {
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
    `https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${listCars[id_cars].brand}%20${listCars[id_cars].name}%20${listCars[id_cars].year},%20por%20favor.`
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
//               dataClients
//             );
//           } else {
//             localStorage.setItem(
//               "dataComments",
//               JSON.stringify(dataCommentsFetch)
//             );
//             createOpinios(dataCommentsFetch, dataClients);
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
      dataClients
    );
  } else {
    localStorage.setItem("dataComments", JSON.stringify(dataComments));
    createOpinios(dataComments, dataClients);
  }
} //getDataComments()

function createOpinios(dataComments, dataClients) {
  let htmlContent = "";
  for (i = 0; i < dataComments.length; i++) {
    htmlContent = `
    <div id="div_span_user">
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="span_user"><span class="span_text">${dataClients[i].name} - ${dataComments[i].comment_date} - 
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
} //createOpinios()

// Function fetch sendOpinion
function sendOpinion(listCars, dataClients) {
  let htmlContent = "";
  htmlContent += `
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="actual_user">${dataClients[3].name} - ${currentDate}</span></br>
      <form id="formOpinion">
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
    event.preventDefault();

    let rating = document.getElementById("ratingInput").value;
    let content = document
      .getElementById("commentInput")
      .value.replace(/\s+/g, " ")
      .split(" ")
      .filter((e) => e.length > 0);

    let comment = {
      id_comment: 4,
      content: content.toString,
      rating: parseInt(rating),
      comment_date: currentDate,
      id_buyer: dataClients[3].idClient,
      id_seller: listCars[localStorage.getItem("indexShowCar")].seller,
      approved: false,
    };

    // console.log(comment);
    // let dataComments = JSON.parse(localStorage.getItem("dataComments"));
    // dataComments.push(comment);
    // localStorage.setItem("dataComments", JSON.stringify(dataComments));
  });
} //sendOpinion()

if (
  localStorage.getItem("dataCars") != null &&
  localStorage.getItem("indexShowCar") != null
) {
  createCard(
    JSON.parse(localStorage.getItem("dataCars")),
    JSON.parse(localStorage.getItem("indexShowCar"))
  );
  getDataComments();
  sendOpinion(JSON.parse(localStorage.getItem("dataCars")), dataClients);
} else {
  window.location.href =
    "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
}
