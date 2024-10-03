//borrar
sessionStorage.setItem("usuario_logeado", "admin");

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
  "carouselHatchBackDesktop"
);
let carouselHatchBackMobile = document.getElementById(
  "carouselHatchBackMobile"
);
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
let navProductList = document
  .getElementById("navProductList")
  .classList.add("active");

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

// Array de objetos sellers
let dataSellers = [
  {
    idSeller: 1,
    name: "SergioR",
  },
];

let dataCars = [
  {
    id_cars: 1,
    type: "Sedán",
    brand: "Chevrolet",
    name: "Cavalier",
    year: 2021,
    seller: "Adrían Hernández Lascurain",
    kilometer: 51000,
    transmission: "Manual",
    price: 320000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzmc4om5b6305qnkarzp.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 2,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2019,
    seller: "Luis José Meléndez",
    kilometer: 97000,
    transmission: "Manual",
    price: 217000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/xrw9p0u81kudod72eo9z.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 3,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2022,
    seller: "Juan Antonio Santos",
    kilometer: 38000,
    transmission: "Manual",
    price: 280000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/pfmdsxdozg4muh8rsm7i.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 4,
    type: "Sedán",
    brand: "Toyota",
    name: "Corolla",
    year: 2020,
    seller: "Libertad Rivas",
    kilometer: 76000,
    transmission: "Automático",
    price: 250000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzcifbic9pvzj0ntw8ek.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 5,
    type: "Sedán",
    brand: "Dodge",
    name: "Attitude",
    year: 2021,
    seller: "Antonio Rosas",
    kilometer: 66000,
    transmission: "Automático",
    price: 190000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/r7yx7ajnarxwyrjskiob.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 6,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2014,
    seller: "Adrían Hernández Lascurain",
    kilometer: 164000,
    transmission: "Manual",
    price: 170000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/m2scaucxbiugsglz9pyv.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 7,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2023,
    seller: "Luis José Meléndez",
    kilometer: 2100,
    transmission: "Manual",
    price: 445000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/COUPE/bs7ya0ncrne3rhw3wcxn.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 8,
    type: "Coupé",
    brand: "Chevrolet",
    name: "Camaro",
    year: 2017,
    seller: "Juan Antonio Santos",
    kilometer: 92000,
    transmission: "Manual",
    price: 315000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/vdrke72dax4bguhazerg.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 9,
    type: "Coupé",
    brand: "Audi",
    name: "A5",
    year: 2021,
    seller: "Libertad Rivas",
    kilometer: 43000,
    transmission: "Automático",
    price: 387000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727892329/CARROS%20ACTUALIZACION/COUPE/gxutrhmdgnz3bzvgvhkr.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 10,
    type: "Coupé",
    brand: "BMW",
    name: "Serie 4",
    year: 2012,
    seller: "Antonio Rosas",
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/dcouwfbl2ke6bcvaydho.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 11,
    type: "SUV",
    brand: "Nissan",
    name: "X-trail",
    year: 2014,
    seller: "Adrían Hernández Lascurain",
    kilometer: 133000,
    transmission: "Manual",
    price: 183000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/gvdimlttgnvwyc2tihfy.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 12,
    type: "SUV",
    brand: "Toyota",
    name: "RAV-4",
    year: 2018,
    seller: "Luis José Meléndez",
    kilometer: 117000,
    transmission: "Manual",
    price: 264000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727897951/CARROS%20ACTUALIZACION/SUV/gquq5ocroeosm3bab8ht.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 13,
    type: "SUV",
    brand: "Honda",
    name: "CRV",
    year: 2011,
    seller: "Juan Antonio Santos",
    kilometer: 204000,
    transmission: "Manual",
    price: 132000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/b4at9o8h4vmpszdbpwcq.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 14,
    type: "SUV",
    brand: "Volkswagen",
    name: "Tiguan",
    year: 2024,
    seller: "Libertad Rivas",
    kilometer: 9000,
    transmission: "Automático",
    price: 567000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/chl5pccvbihfxvvok1b6.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 15,
    type: "SUV",
    brand: "Mazda",
    name: "CX-5",
    year: 2019,
    seller: "Antonio Rosas",
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/idvczoi3mmsjpramflwj.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 16,
    type: "Hatchback",
    brand: "Mazda",
    name: "3",
    year: 2016,
    seller: "Adrían Hernández Lascurain",
    kilometer: 141000,
    transmission: "Manual",
    price: 160000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727896775/CARROS%20ACTUALIZACION/HATCHBACK/shyx5azgolm4rtaycwyo.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 17,
    type: "Hatchback",
    brand: "Volkswagen",
    name: "Polo",
    year: 2017,
    seller: "Luis José Meléndez",
    kilometer: 63000,
    transmission: "Manual",
    price: 189000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/cg5xuvfhmnodgrlwdgcb.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 18,
    type: "Hatchback",
    brand: "KIA",
    name: "Rio",
    year: 2023,
    seller: "Juan Antonio Santos",
    kilometer: 27000,
    transmission: "Manual",
    price: 287000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/tuzm5cvgolblv42girrv.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 19,
    type: "Hatchback",
    brand: "Ford",
    name: "Fiesta",
    year: 2008,
    seller: "Libertad Rivas",
    kilometer: 214000,
    transmission: "Automático",
    price: 83000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/wv7qch7reot3295h7qab.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 20,
    type: "Hatchback",
    brand: "Chevrolet",
    name: "Aveo",
    year: 2024,
    seller: "Antonio Rosas",
    kilometer: 14000,
    transmission: "Automático",
    price: 290000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/HATCHBACK/mqgonenyxaxpd9atu8as.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 21,
    type: "Pick Up",
    brand: "Nissan",
    name: "Frontier",
    year: 2010,
    seller: "Adrían Hernández Lascurain",
    kilometer: 188000,
    transmission: "Manual",
    price: 197000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/iikuqbp7nxlsgpz93qh9.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 22,
    type: "Pick Up",
    brand: "Dodge",
    name: "Ram 1500 TRX",
    year: 2021,
    seller: "Luis José Meléndez",
    kilometer: 57000,
    transmission: "Manual",
    price: 580000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yf137l97v50bv7dayqy3.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 23,
    type: "Pick Up",
    brand: "Ford",
    name: "Ranger",
    year: 2023,
    seller: "Juan Antonio Santos",
    kilometer: 124000,
    transmission: "Manual",
    price: 254000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/romyos7pv8vhha3tqffo.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 24,
    type: "Pick Up",
    brand: "Chevrolet",
    name: "Cheyenne",
    year: 2015,
    seller: "Libertad Rivas",
    kilometer: 120000,
    transmission: "Automático",
    price: 350000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yhr9xizivzm5wvfnjzft.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 25,
    type: "Pick Up",
    brand: "Toyota",
    name: "Hilux",
    year: 2016,
    seller: "Antonio Rosas",
    kilometer: 55000,
    transmission: "Automático",
    price: 270000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/uysztqhhyomm9yl3a3pp.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 26,
    type: "VAN",
    brand: "Nissan",
    name: "Urvan",
    year: 2017,
    seller: "Adrían Hernández Lascurain",
    kilometer: 244000,
    transmission: "Manual",
    price: 167000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/bqkedgz11mkxojw57oiz.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 27,
    type: "VAN",
    brand: "Toyota",
    name: "Hiace",
    year: 2019,
    seller: "Luis José Meléndez",
    kilometer: 157000,
    transmission: "Manual",
    price: 230000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 28,
    type: "VAN",
    brand: "Ford",
    name: "Transit",
    year: 2020,
    seller: "Juan Antonio Santos",
    kilometer: 174000,
    transmission: "Manual",
    price: 285000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/VAN/ctmgfch57gxydh7r0bwg.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 29,
    type: "VAN",
    brand: "Volkswagen",
    name: "Transporter",
    year: 2012,
    seller: "Libertad Rivas",
    kilometer: 280000,
    transmission: "Automático",
    price: 145000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: "true",
    sold: "false",
  },
  {
    id_cars: 30,
    type: "VAN",
    brand: "Mercedes",
    name: "Sprinter",
    year: 2021,
    seller: "Antonio Rosas",
    kilometer: 180000,
    transmission: "Automático",
    price: 300000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727898730/CARROS%20ACTUALIZACION/VAN/dsebewpjrkkut6qpk1bs.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión",
    verified: "true",
    sold: "false",
  },
];

// Function fetch dataCars
// function getDataCars() {
//   const promesa = fetch("../jsons/dataCars.JSON", {
//     method: "GET",
//   });
//   promesa
//     .then((response) => {
//       response
//         .json()
//         .then((dataCarsFetch) => {
//           if (localStorage.getItem("dataCars") != null) {
//             filterDataCars(JSON.parse(localStorage.getItem("dataCars")));
//             createGroupCarousels();
//           } else {
//             localStorage.setItem("dataCars", JSON.stringify(dataCarsFetch));
//             filterDataCars(JSON.parse(localStorage.getItem("dataCars")));
//             createGroupCarousels();
//           }
//         })
//         .catch((error) => console.log("Problema con el json", error));
//     })
//     .catch((err) => console.log("Existió un problema con la solicitud", err));
// } //getDataCars()
// Function fetch dataCars
function getDataCars() {
  if (localStorage.getItem("dataCars") != null) {
    filterDataCars(JSON.parse(localStorage.getItem("dataCars")));
    createGroupCarousels();
  } else {
    localStorage.setItem("dataCars", JSON.stringify(dataCars));
    filterDataCars(JSON.parse(localStorage.getItem("dataCars")));
    createGroupCarousels();
  }
} //getDataCars()

// *************Métodos*************
// Función para filtrar por tipo de carros
function filterDataCars(dataCars) {
  sedanCars = dataCars.filter((car) => car.type == "Sedán");
  coupeCars = dataCars.filter((car) => car.type == "Coupé");
  suvCars = dataCars.filter((car) => car.type == "SUV");
  hatchBackCars = dataCars.filter((car) => car.type == "Hatchback");
  pickUpCars = dataCars.filter((car) => car.type == "Pick Up");
  vanCars = dataCars.filter((car) => car.type == "VAN");
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
                      listCars[j].id_cars
                    }"  onclick=productInformation(${
        listCars[j].id_cars
      }) oncontextmenu="productInformation(${
        listCars[j].id_cars
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
                      listCars[i].id_cars
                    }"  onclick=productInformation(${
      listCars[i].id_cars
    }) oncontextmenu="productInformation(${
      listCars[i].id_cars
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
function productInformation(index) {
  if (sessionStorage.getItem("usuario_logeado") != null) {
    index--;
    localStorage.setItem("indexShowCar", index);
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/product_information.html";
    // window.location.href = "../pages/product_information.html";
  } else {
    window.location.href =
      "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
  }
} // productInformation()

// *************Ejecución*************
getDataCars();
