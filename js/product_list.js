// *************Declaración/Inicialización variables*************
// Sedan
let carouselSedanDesktop = document.getElementById("carouselSedanDesktop");
let carouselSedanMobile = document.getElementById("carouselSedanMobile");
// Coupé
let carouselCoupeDesktop = document.getElementById("carouselCoupeDesktop");
let carouselCoupeMobile = document.getElementById("carouselCoupeMobile");
// SUV
let carouselSuvDesktop = document.getElementById("carouselSuvDesktop");
let carouselSuvMobile = document.getElementById("carouselSuvMobile");
//HatchBack
let carouselHatchBackDesktop = document.getElementById(
  "carouselHatchBackDesktop");
let carouselHatchBackMobile = document.getElementById("carouselHatchBackMobile");
//PickUp
let carouselPickUpDesktop = document.getElementById("carouselPickUpDesktop");
let carouselPickUpMobile = document.getElementById("carouselPickUpMobile");
//VAN
let carouselVanDesktop = document.getElementById("carouselVanDesktop");
let carouselVanMobile = document.getElementById("carouselVanMobile");
//Tipos
let tipoSedan = "Sedan";
let tipoCoupe = "Coupe";
let tipoSuv = "Suv";
let tipoHatchBack = "HatchBack";
let tipoPickUp = "PickUp";
let tipoVan = "Van";
// Títulos
let titleSedan = document.getElementById("titleSedan");
let titleCoupe = document.getElementById("titleCoupe");
let titleSuv = document.getElementById("titleSuv");
let titleHatchBack = document.getElementById("titleHatchBack");
let titlePickUp = document.getElementById("titlePickUp");
let titleVan = document.getElementById("titleVan");
// Otros
let htmlContDesktop = "";
let htmlContMobile = "";
let isActive = false;
let inputSearch = document.getElementById("inputSearch");
let inputValue;
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertActive = true;
let navProductList = document.getElementById("navProductList").classList.add("active");

// Filters
let noFilter = document.getElementById("noFilter");
let filterPrice = document.getElementById("filterPrice");
let filterName = document.getElementById("filterName");
let filterYear = document.getElementById("filterYear");
let filterKilometer = document.getElementById("filterKilometer");
// Arrays por tipo de carros
let sedanCars;
let coupeCars;
let suvCars;
let hatchBackCars;
let pickUpCars;
let vanCars;
// Arrays por tipo de carros para búsqueda
let sedanSearch;
let coupeSearch;
let suvSearch;
let hatchBackSearch;
let pickUpSearch;
let vanSearch;

//Function fetch dataCars local
function getDataCars() {
 const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://3.16.180.62/api/cars/", requestOptions)
  .then((response) => response.json())
  .then((dataCarsGeneral) => {
    filterDataCars(dataCarsGeneral);
    createGroupCarousels();
  })
  .catch((error) => console.error(error));
} //getDataCars()

// *************Métodos*************
// Función para filtrar por tipo de carros
function filterDataCars(dataCarsGeneral) {
  sedanCars = dataCarsGeneral.filter((car) => car.type == "Sedán" && car.sold == 0);
  coupeCars = dataCarsGeneral.filter((car) => car.type == "Coupé" && car.sold == 0);
  suvCars = dataCarsGeneral.filter((car) => car.type == "SUV" && car.sold == 0);
  hatchBackCars = dataCarsGeneral.filter((car) => car.type == "Hatchback" && car.sold == 0);
  pickUpCars = dataCarsGeneral.filter((car) => car.type == "Pick Up" && car.sold == 0);
  vanCars = dataCarsGeneral.filter((car) => car.type == "VAN" && car.sold == 0);
} //filterDataCars()

// Función para llamar a la creación de todos los carousels
function createGroupCarousels() {
  // Mostrar títulos en caso de estar ocultos
  titleSedan.style.display = "block";
  titleCoupe.style.display = "block";
  titleSuv.style.display = "block";
  titleHatchBack.style.display = "block";
  titlePickUp.style.display = "block";
  titleVan.style.display = "block";
  // Carruseles
  createCarouselDesktop(sedanCars, carouselSedanDesktop, tipoSedan);
  createCarouselMobile(sedanCars, carouselSedanMobile, tipoSedan);
  createCarouselDesktop(coupeCars, carouselCoupeDesktop, tipoCoupe);
  createCarouselMobile(coupeCars, carouselCoupeMobile, tipoCoupe);
  createCarouselDesktop(suvCars, carouselSuvDesktop, tipoSuv);
  createCarouselMobile(suvCars, carouselSuvMobile, tipoSuv);
  createCarouselDesktop(hatchBackCars, carouselHatchBackDesktop, tipoHatchBack);
  createCarouselMobile(hatchBackCars, carouselHatchBackMobile, tipoHatchBack);
  createCarouselDesktop(pickUpCars, carouselPickUpDesktop, tipoPickUp);
  createCarouselMobile(pickUpCars, carouselPickUpMobile, tipoPickUp);
  createCarouselDesktop(vanCars, carouselVanDesktop, tipoVan);
  createCarouselMobile(vanCars, carouselVanMobile, tipoVan);
} //createGroupCarousels()

// Función para crear carousels en versión Desktop
function createCarouselDesktop(listCars, carouselTipoDesktop, tipoCarro) {
  htmlContDesktop += `
      <div class="carousel-inner">
  `; // Inserción hasta inner
  for (let i = 0; i < listCars.length; i += 4) {
    if (isActive) {
      htmlContDesktop += `
          <div class="carousel-item">
            <div class="row">`;
    } else {
      htmlContDesktop += `
          <div class="carousel-item active">
            <div class="row">`;
    }
    for (let j = i; j < i + 4 && j < listCars.length; j++) {
      isActive = true;
      htmlContDesktop += `
              <div class="col-3">
                <div class="card" >
                  <!-- Card -->
                  <img src="${
                    listCars[j].img
                  }" class="card-img-top img-fluid" alt="${listCars[j].name}" />
                  <div class="card-body text-center"><!-- Card body -->
                    <span class="card-text card-text-title">${
                      listCars[j].brand
                    } ${listCars[j].name.slice(0, 7)} ${
        listCars[j].year
      }</span><hr>
                    <span class="card-text card-text-kilometer">| ${listCars[
                      j
                    ].kilometer.toLocaleString("es-MX")} KM |</span><hr>
                    <span class="card-text card-text-price" >$ ${listCars[
                      j
                    ].price.toLocaleString("es-MX")}</span>
                    <div class="text-center">
                    <a id="btnInfo${
                      listCars[j].idCar
                    }"  onclick="productInformation(${listCars[j].idCar},${
        listCars[j].usersIdSeller
      })" oncontextmenu="productInformation(${listCars[j].idCar},${
        listCars[j].usersIdSeller
      })" class="btn btn-primary btn-informacion" ">Más información</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
                
              </div><!-- ****************************FIN col-3 -->
  `; // div column-cards
      //informacion
    } // for 4 tarjetas
    htmlContDesktop += `
                </div><!-- ****************************FIN row -->
          </div> <!-- ****************************FIN carousel-item -->`;
  } // for hasta final tarjetas
  htmlContDesktop += `
      </div><!-- ****************************FIN carousel-inner -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel${tipoCarro}Desktop"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel${tipoCarro}Desktop"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  `;
  // Inserción final al documento
  carouselTipoDesktop.insertAdjacentHTML("beforeend", htmlContDesktop);
  htmlContDesktop = "";
  isActive = false;
} // createCarouselDesktop()

// Función para crear carousels en versión Mobile
function createCarouselMobile(listCars, carouselTipoMobile, tipoCarro) {
  htmlContMobile += `
      <div class="carousel-inner">
  `; // Inserción hasta inner
  for (let i = 0; i < listCars.length; i++) {
    if (isActive) {
      htmlContMobile += `
          <div class="carousel-item">`;
    } else {
      htmlContMobile += `
          <div class="carousel-item active">`;
    }
    isActive = true;
    htmlContMobile += `
              <div class="col-12">
                <div class="card" >
                  <!-- Card -->
                  <img src="${
                    listCars[i].img
                  }" class="card-img-top img-fluid" alt="${listCars[i].name}" />
                  <div class="card-body text-center"><!-- Card body -->
                    <h5 class="text-center card-text">${listCars[i].brand} ${
      listCars[i].name
    } ${listCars[i].year}</h5><hr>
                    <span class="card-text">| ${listCars[
                      i
                    ].kilometer.toLocaleString("es-MX")} KM |</span><hr>
                    <span class="card-text">$ ${listCars[
                      i
                    ].price.toLocaleString("es-MX")}</span>
                    <div class="text-center"><a id="btnInfoMob${
                      listCars[i].idCar
                    }"  onclick="productInformation(${listCars[i].idCar},${
      listCars[i].usersIdSeller
    })" oncontextmenu="productInformation(${listCars[i].idCar},${
      listCars[i].usersIdSeller
    })" class="btn btn-primary btn-informacion" ">Más información</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
              </div><!-- ****************************FIN col-12 -->
          </div> <!-- ****************************FIN carousel-item -->`;
  } // for hasta final tarjetas
  htmlContMobile += `
      </div><!-- ****************************FIN carousel-inner -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel${tipoCarro}Mobile"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel${tipoCarro}Mobile"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  `;

  // Inserción final al documento
  carouselTipoMobile.insertAdjacentHTML("beforeend", htmlContMobile);
  htmlContMobile = "";
  isActive = false;
} // createCarouselMobile()

// Función para limpiar contenido de todos los carousels
function cleanCarousels() {
  // Sedan
  carouselSedanDesktop.innerHTML = "";
  carouselSedanMobile.innerHTML = "";
  // Coupé
  carouselCoupeDesktop.innerHTML = "";
  carouselCoupeMobile.innerHTML = "";
  // SUV
  carouselSuvDesktop.innerHTML = "";
  carouselSuvMobile.innerHTML = "";
  //HatchBack
  carouselHatchBackDesktop.innerHTML = "";
  carouselHatchBackMobile.innerHTML = "";
  //PickUp
  carouselPickUpDesktop.innerHTML = "";
  carouselPickUpMobile.innerHTML = "";
  //Van
  carouselVanDesktop.innerHTML = "";
  carouselVanMobile.innerHTML = "";
} // cleanCarousels()

// Función para ordenar data de cada car por precio (menor a mayor)
function orderByPrice() {
  sedanCars.sort((a, b) => a.price - b.price);
  coupeCars.sort((a, b) => a.price - b.price);
  suvCars.sort((a, b) => a.price - b.price);
  hatchBackCars.sort((a, b) => a.price - b.price);
  pickUpCars.sort((a, b) => a.price - b.price);
  vanCars.sort((a, b) => a.price - b.price);
} //orderByPrice()

// Función para ordenar data de cada car por nombre (menor a mayor)
function orderByName() {
  sedanCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  coupeCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  suvCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  hatchBackCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  pickUpCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  vanCars.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
} //orderByName()

// Función para ordenar data de cada car por year (menor a mayor)
function orderByYear() {
  sedanCars.sort((a, b) => b.year - a.year);
  coupeCars.sort((a, b) => b.year - a.year);
  suvCars.sort((a, b) => b.year - a.year);
  hatchBackCars.sort((a, b) => b.year - a.year);
  pickUpCars.sort((a, b) => b.year - a.year);
  vanCars.sort((a, b) => b.year - a.year);

  // En caso que se requiera de mayor a menor
  // sedanCars.sort((a, b) => a.year - b.year);
  // coupeCars.sort((a, b) => a.year - b.year);
  // suvCars.sort((a, b) => a.year - b.year);
  // hatchBackCars.sort((a, b) => a.year - b.year);
  // pickUpCars.sort((a, b) => a.year - b.year);
  // vanCars.sort((a, b) => a.year - b.year);
} //orderByYear()

// Función para ordenar data de cada car por kilometer (menor a mayor)
function orderByKilometer() {
  sedanCars.sort((a, b) => a.kilometer - b.kilometer);
  coupeCars.sort((a, b) => a.kilometer - b.kilometer);
  suvCars.sort((a, b) => a.kilometer - b.kilometer);
  hatchBackCars.sort((a, b) => a.kilometer - b.kilometer);
  pickUpCars.sort((a, b) => a.kilometer - b.kilometer);
  vanCars.sort((a, b) => a.kilometer - b.kilometer);
} //orderByKilometer()

// Función para filtrar por búsqueda de carros (name, year or brand)
function filterSearchCars(inputSearch) {
  // Búsqueda en Sedán
  sedanSearch = sedanCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (sedanSearch.length === 0) {
    sedanSearch = sedanCars.filter((car) => car.year == Number(inputSearch));
  }
  if (sedanSearch.length === 0) {
    sedanSearch = sedanCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }
  //  Búsqueda en Coupé
  coupeSearch = coupeCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (coupeSearch.length === 0) {
    coupeSearch = coupeCars.filter((car) => car.year == Number(inputSearch));
  }
  if (coupeSearch.length === 0) {
    coupeSearch = coupeCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }
  // Búsqueda en SUV
  suvSearch = suvCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (suvSearch.length === 0) {
    suvSearch = suvCars.filter((car) => car.year == Number(inputSearch));
  }
  if (suvSearch.length === 0) {
    suvSearch = suvCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }
  // Búsqueda en HatchBack
  hatchBackSearch = hatchBackCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (hatchBackSearch.length === 0) {
    hatchBackSearch = hatchBackCars.filter(
      (car) => car.year == Number(inputSearch)
    );
  }
  if (hatchBackSearch.length === 0) {
    hatchBackSearch = hatchBackCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }
  // Búsqueda en Pick Up
  pickUpSearch = pickUpCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (pickUpSearch.length === 0) {
    pickUpSearch = pickUpCars.filter((car) => car.year == Number(inputSearch));
  }
  if (pickUpSearch.length === 0) {
    pickUpSearch = pickUpCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }

  // Búsqueda en VAN
  vanSearch = vanCars.filter(
    (car) => car.name.toLowerCase() == inputSearch.toLowerCase()
  );
  if (vanSearch.length === 0) {
    vanSearch = vanCars.filter((car) => car.year == Number(inputSearch));
  }
  if (vanSearch.length === 0) {
    vanSearch = vanCars.filter(
      (car) => car.brand.toLowerCase() == inputSearch.toLowerCase()
    );
  }

  cleanCarousels();
  alertActive = true;
  // Sedan
  if (sedanSearch.length === 0) {
    titleSedan.style.display = "none";
  } else {
    alertActive = false;
    titleSedan.style.display = "block";
    createCarouselDesktop(sedanSearch, carouselSedanDesktop, tipoSedan);
    createCarouselMobile(sedanSearch, carouselSedanMobile, tipoSedan);
  }
  // Coupé
  if (coupeSearch.length === 0) {
    titleCoupe.style.display = "none";
  } else {
    alertActive = false;
    titleCoupe.style.display = "block";
    createCarouselDesktop(coupeSearch, carouselCoupeDesktop, tipoCoupe);
    createCarouselMobile(coupeSearch, carouselCoupeMobile, tipoCoupe);
  }
  // SUV
  if (suvSearch.length === 0) {
    titleSuv.style.display = "none";
  } else {
    alertActive = false;
    titleSuv.style.display = "block";
    createCarouselDesktop(suvSearch, carouselSuvDesktop, tipoSuv);
    createCarouselMobile(suvSearch, carouselSuvMobile, tipoSuv);
  }
  //HatchBack
  if (hatchBackSearch.length === 0) {
    titleHatchBack.style.display = "none";
  } else {
    alertActive = false;
    titleHatchBack.style.display = "block";
    createCarouselDesktop(
      hatchBackSearch,
      carouselHatchBackDesktop,
      tipoHatchBack
    );
    createCarouselMobile(
      hatchBackSearch,
      carouselHatchBackMobile,
      tipoHatchBack
    );
  }
  //PickUp
  if (pickUpSearch.length === 0) {
    titlePickUp.style.display = "none";
  } else {
    alertActive = false;
    titlePickUp.style.display = "block";
    createCarouselDesktop(pickUpSearch, carouselPickUpDesktop, tipoPickUp);
    createCarouselMobile(pickUpSearch, carouselPickUpMobile, tipoPickUp);
  }
  //VAV
  if (vanSearch.length === 0) {
    titleVan.style.display = "none";
  } else {
    alertActive = false;
    titleVan.style.display = "block";
    createCarouselDesktop(vanSearch, carouselVanDesktop, tipoVan);
    createCarouselMobile(vanSearch, carouselVanMobile, tipoVan);
  }

  if (alertActive) {
    alertValidacionesTexto.innerHTML =
      "<br/><strong> La búsqueda no arrojó resultados. Prueba con otras marcas, nombre o año. </strong> <br/>";
    alertValidaciones.style.display = "block";
  } else {
    alertValidaciones.style.display = "none";
  }

  // Carruseles
} //filterDataCars()

// Función que limpia carousels actuales y muestra los iniciales
noFilter.addEventListener("click", (event) => {
  alertValidaciones.style.display = "none";
  cleanCarousels();
  getDataCars();
}); //noFilter.addEventListener()

// Función que agrega listener on click enlace Precio, limpar carousels, filtrar y mostrar nuevos
filterPrice.addEventListener("click", (event) => {
  alertValidaciones.style.display = "none";
  cleanCarousels();
  orderByPrice();
  createGroupCarousels();
}); //filterPrice.addEventListener()

// Función que agrega listener on click enlace Nombre, limpar carousels, filtrar y mostrar nuevos
filterName.addEventListener("click", (event) => {
  alertValidaciones.style.display = "none";
  cleanCarousels();
  orderByName();
  createGroupCarousels();
}); //filterName.addEventListener()

// Función que agrega listener on click enlace Nombre, limpar carousels, filtrar y mostrar nuevos
filterYear.addEventListener("click", (event) => {
  alertValidaciones.style.display = "none";
  cleanCarousels();
  orderByYear();
  createGroupCarousels();
}); //filterYear.addEventListener()

// Función que agrega listener on click enlace Nombre, limpar carousels, filtrar y mostrar nuevos
filterKilometer.addEventListener("click", (event) => {
  alertValidaciones.style.display = "none";
  cleanCarousels();
  orderByKilometer();
  createGroupCarousels();
}); //filterKilometer.addEventListener()

// Función que agrega listener en barra búsqueda y filtra por búsqueda
inputSearch.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputValue = inputSearch.value;
    filterSearchCars(inputValue);
    inputSearch.value = "";
  }
}); //inputSearch.addEventListener()

// Función para generar índice y presentar información en página product_information
function productInformation(idCar, usersIdSeller) {
  if (sessionStorage.getItem("user") != null) {
    localStorage.setItem("idCar", idCar);
    localStorage.setItem("usersIdSeller", usersIdSeller);
    if ((window.location.pathname = "/pages/product_list.html")) {
      // local
      window.location.href = "../pages/product_information.html";
    } else {
      // github
      window.location.href =
        "https://adrianlascurain.github.io/OneClickCar/pages/product_information.html";
    }
  } else {
    if ((window.location.pathname = "/pages/product_list.html")) {
      // local
      window.location.href = "../pages/log_in.html";
    } else {
      // github
      window.location.href =
        "https://adrianlascurain.github.io/OneClickCar/pages/log_in.html";
    }
  }
} // productInformation()

// *************Ejecución*************
getDataCars();
