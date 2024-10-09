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

// NUEVAS DB
//-----------------------------------------------USERS
let dataCarsGeneral = [
  {
    id_car: 1,
    type: "Sedán",
    brand: "Chevrolet",
    name: "Cavalier",
    year: 2021,
    kilometer: 51000,
    transmission: "Manual",
    price: 320000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzmc4om5b6305qnkarzp.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 2,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2019,
    kilometer: 97000,
    transmission: "Manual",
    price: 217000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/xrw9p0u81kudod72eo9z.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 3,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2022,
    kilometer: 38000,
    transmission: "Manual",
    price: 280000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/pfmdsxdozg4muh8rsm7i.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 4,
    type: "Sedán",
    brand: "Toyota",
    name: "Corolla",
    year: 2020,
    kilometer: 76000,
    transmission: "Automático",
    price: 250000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzcifbic9pvzj0ntw8ek.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 5,
    type: "Sedán",
    brand: "Dodge",
    name: "Attitude",
    year: 2021,
    kilometer: 66000,
    transmission: "Automático",
    price: 190000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/r7yx7ajnarxwyrjskiob.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 6,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2014,
    kilometer: 164000,
    transmission: "Manual",
    price: 170000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/m2scaucxbiugsglz9pyv.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 7,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2023,
    kilometer: 2100,
    transmission: "Manual",
    price: 445000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/COUPE/bs7ya0ncrne3rhw3wcxn.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 8,
    type: "Coupé",
    brand: "Chevrolet",
    name: "Camaro",
    year: 2017,
    kilometer: 92000,
    transmission: "Manual",
    price: 315000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/vdrke72dax4bguhazerg.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 9,
    type: "Coupé",
    brand: "Audi",
    name: "A5",
    year: 2021,
    kilometer: 43000,
    transmission: "Automático",
    price: 387000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727892329/CARROS%20ACTUALIZACION/COUPE/gxutrhmdgnz3bzvgvhkr.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 10,
    type: "Coupé",
    brand: "BMW",
    name: "Serie 4",
    year: 2012,
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/dcouwfbl2ke6bcvaydho.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 11,
    type: "SUV",
    brand: "Nissan",
    name: "X-trail",
    year: 2014,
    kilometer: 133000,
    transmission: "Manual",
    price: 183000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/gvdimlttgnvwyc2tihfy.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 12,
    type: "SUV",
    brand: "Toyota",
    name: "RAV-4",
    year: 2018,
    kilometer: 117000,
    transmission: "Manual",
    price: 264000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727897951/CARROS%20ACTUALIZACION/SUV/gquq5ocroeosm3bab8ht.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 13,
    type: "SUV",
    brand: "Honda",
    name: "CRV",
    year: 2011,
    kilometer: 204000,
    transmission: "Manual",
    price: 132000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/b4at9o8h4vmpszdbpwcq.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 14,
    type: "SUV",
    brand: "Volkswagen",
    name: "Tiguan",
    year: 2024,
    kilometer: 9000,
    transmission: "Automático",
    price: 567000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/chl5pccvbihfxvvok1b6.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 15,
    type: "SUV",
    brand: "Mazda",
    name: "CX-5",
    year: 2019,
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/idvczoi3mmsjpramflwj.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 16,
    type: "Hatchback",
    brand: "Mazda",
    name: "3",
    year: 2016,
    kilometer: 141000,
    transmission: "Manual",
    price: 160000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727896775/CARROS%20ACTUALIZACION/HATCHBACK/shyx5azgolm4rtaycwyo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 17,
    type: "Hatchback",
    brand: "Volkswagen",
    name: "Polo",
    year: 2017,
    kilometer: 63000,
    transmission: "Manual",
    price: 189000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/cg5xuvfhmnodgrlwdgcb.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 18,
    type: "Hatchback",
    brand: "KIA",
    name: "Rio",
    year: 2023,
    kilometer: 27000,
    transmission: "Manual",
    price: 287000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/tuzm5cvgolblv42girrv.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 19,
    type: "Hatchback",
    brand: "Ford",
    name: "Fiesta",
    year: 2008,
    kilometer: 214000,
    transmission: "Automático",
    price: 83000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/wv7qch7reot3295h7qab.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 20,
    type: "Hatchback",
    brand: "Chevrolet",
    name: "Aveo",
    year: 2024,
    kilometer: 14000,
    transmission: "Automático",
    price: 290000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/HATCHBACK/mqgonenyxaxpd9atu8as.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 21,
    type: "Pick Up",
    brand: "Nissan",
    name: "Frontier",
    year: 2010,
    kilometer: 188000,
    transmission: "Manual",
    price: 197000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/iikuqbp7nxlsgpz93qh9.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 22,
    type: "Pick Up",
    brand: "Dodge",
    name: "Ram 1500 TRX",
    year: 2021,
    kilometer: 57000,
    transmission: "Manual",
    price: 580000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yf137l97v50bv7dayqy3.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 23,
    type: "Pick Up",
    brand: "Ford",
    name: "Ranger",
    year: 2023,
    kilometer: 124000,
    transmission: "Manual",
    price: 254000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/romyos7pv8vhha3tqffo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 24,
    type: "Pick Up",
    brand: "Chevrolet",
    name: "Cheyenne",
    year: 2015,
    kilometer: 120000,
    transmission: "Automático",
    price: 350000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yhr9xizivzm5wvfnjzft.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 25,
    type: "Pick Up",
    brand: "Toyota",
    name: "Hilux",
    year: 2016,
    kilometer: 55000,
    transmission: "Automático",
    price: 270000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/uysztqhhyomm9yl3a3pp.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 26,
    type: "VAN",
    brand: "Nissan",
    name: "Urvan",
    year: 2017,
    kilometer: 244000,
    transmission: "Manual",
    price: 167000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/bqkedgz11mkxojw57oiz.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 27,
    type: "VAN",
    brand: "Toyota",
    name: "Hiace",
    year: 2019,
    kilometer: 157000,
    transmission: "Manual",
    price: 230000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 28,
    type: "VAN",
    brand: "Ford",
    name: "Transit",
    year: 2020,
    kilometer: 174000,
    transmission: "Manual",
    price: 285000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/VAN/ctmgfch57gxydh7r0bwg.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 29,
    type: "VAN",
    brand: "Volkswagen",
    name: "Transporter",
    year: 2012,
    kilometer: 280000,
    transmission: "Automático",
    price: 145000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 30,
    type: "VAN",
    brand: "Mercedes",
    name: "Sprinter",
    year: 2021,
    kilometer: 180000,
    transmission: "Automático",
    price: 300000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727898730/CARROS%20ACTUALIZACION/VAN/dsebewpjrkkut6qpk1bs.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión",
    verified: 1,
    sold: 1,
    seller_id_user: 6,
  },
  {
    id_car: 31,
    type: "VAN",
    brand: "Nissan",
    name: "Urvan",
    year: 2018,
    kilometer: 284000,
    transmission: "Manual",
    price: 123000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/bqkedgz11mkxojw57oiz.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 1,
    seller_id_user: 3,
  },
  {
    id_car: 32,
    type: "VAN",
    brand: "Toyota",
    name: "Hiace",
    year: 2018,
    kilometer: 145000,
    transmission: "Manual",
    price: 233000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 1,
    seller_id_user: 4,
  },
  {
    id_car: 33,
    type: "VAN",
    brand: "Ford",
    name: "Transit",
    year: 2021,
    kilometer: 133000,
    transmission: "Manual",
    price: 244000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/VAN/ctmgfch57gxydh7r0bwg.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 1,
    seller_id_user: 5,
  },
  {
    id_car: 34,
    type: "VAN",
    brand: "Volkswagen",
    name: "Transporter",
    year: 2013,
    kilometer: 270000,
    transmission: "Automático",
    price: 156000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 1,
    seller_id_user: 6,
  },
  {
    id_car: 35,
    type: "VAN",
    brand: "Mercedes",
    name: "Sprinter",
    year: 2020,
    kilometer: 170000,
    transmission: "Automático",
    price: 310000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727898730/CARROS%20ACTUALIZACION/VAN/dsebewpjrkkut6qpk1bs.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión",
    verified: 1,
    sold: 1,
    seller_id_user: 2,
  },
];
let dataUsers = [
  {
    id_user: 1,
    full_name: "Juan Santos",
    phone_number: "1234567890",
    email: "oneclickcarcontacto@gmail.com",
    birth_date: "1990-01-01",
    password: "password_1",
    type_user: "administrador",
  },
  {
    id_user: 2,
    full_name: "Luis Meléndez",
    phone_number: "0987654321",
    email: "luis@example.com",
    birth_date: "1992-02-02",
    password: "password_2",
    type_user: "cliente",
  },
  {
    id_user: 3,
    full_name: "Libertad Rivas",
    phone_number: "2345678901",
    email: "libertad@example.com",
    birth_date: "1993-03-03",
    password: "password_3",
    type_user: "cliente",
  },
  {
    id_user: 4,
    full_name: "Antonio Rosas",
    phone_number: "3456789012",
    email: "antonio@example.com",
    birth_date: "1994-04-04",
    password: "password_4",
    type_user: "cliente",
  },
  {
    id_user: 5,
    full_name: "Sergio Rolón",
    phone_number: "4567890123",
    email: "sergio@example.com",
    birth_date: "1995-05-05",
    password: "password_5",
    type_user: "cliente",
  },
  {
    id_user: 6,
    full_name: "Adrián Hernández",
    phone_number: "5678901234",
    email: "andres@example.com",
    birth_date: "1996-06-06",
    password: "password_6",
    type_user: "cliente",
  },
];
let dataCarsOnSale = [
  {
    id_car: 1,
    type: "Sedán",
    brand: "Chevrolet",
    name: "Cavalier",
    year: 2021,
    kilometer: 51000,
    transmission: "Manual",
    price: 320000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzmc4om5b6305qnkarzp.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 2,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2019,
    kilometer: 97000,
    transmission: "Manual",
    price: 217000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/xrw9p0u81kudod72eo9z.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 3,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2022,
    kilometer: 38000,
    transmission: "Manual",
    price: 280000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/pfmdsxdozg4muh8rsm7i.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 4,
    type: "Sedán",
    brand: "Toyota",
    name: "Corolla",
    year: 2020,
    kilometer: 76000,
    transmission: "Automático",
    price: 250000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/jzcifbic9pvzj0ntw8ek.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 5,
    type: "Sedán",
    brand: "Dodge",
    name: "Attitude",
    year: 2021,
    kilometer: 66000,
    transmission: "Automático",
    price: 190000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SEDAN/r7yx7ajnarxwyrjskiob.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 6,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2014,
    kilometer: 164000,
    transmission: "Manual",
    price: 170000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/m2scaucxbiugsglz9pyv.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 7,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2023,
    kilometer: 2100,
    transmission: "Manual",
    price: 445000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/COUPE/bs7ya0ncrne3rhw3wcxn.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 8,
    type: "Coupé",
    brand: "Chevrolet",
    name: "Camaro",
    year: 2017,
    kilometer: 92000,
    transmission: "Manual",
    price: 315000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/vdrke72dax4bguhazerg.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 9,
    type: "Coupé",
    brand: "Audi",
    name: "A5",
    year: 2021,
    kilometer: 43000,
    transmission: "Automático",
    price: 387000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727892329/CARROS%20ACTUALIZACION/COUPE/gxutrhmdgnz3bzvgvhkr.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 10,
    type: "Coupé",
    brand: "BMW",
    name: "Serie 4",
    year: 2012,
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/COUPE/dcouwfbl2ke6bcvaydho.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 11,
    type: "SUV",
    brand: "Nissan",
    name: "X-trail",
    year: 2014,
    kilometer: 133000,
    transmission: "Manual",
    price: 183000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/gvdimlttgnvwyc2tihfy.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 12,
    type: "SUV",
    brand: "Toyota",
    name: "RAV-4",
    year: 2018,
    kilometer: 117000,
    transmission: "Manual",
    price: 264000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727897951/CARROS%20ACTUALIZACION/SUV/gquq5ocroeosm3bab8ht.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 13,
    type: "SUV",
    brand: "Honda",
    name: "CRV",
    year: 2011,
    kilometer: 204000,
    transmission: "Manual",
    price: 132000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/b4at9o8h4vmpszdbpwcq.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 14,
    type: "SUV",
    brand: "Volkswagen",
    name: "Tiguan",
    year: 2024,
    kilometer: 9000,
    transmission: "Automático",
    price: 567000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/SUV/chl5pccvbihfxvvok1b6.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 15,
    type: "SUV",
    brand: "Mazda",
    name: "CX-5",
    year: 2019,
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/SUV/idvczoi3mmsjpramflwj.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 16,
    type: "Hatchback",
    brand: "Mazda",
    name: "3",
    year: 2016,
    kilometer: 141000,
    transmission: "Manual",
    price: 160000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727896775/CARROS%20ACTUALIZACION/HATCHBACK/shyx5azgolm4rtaycwyo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 17,
    type: "Hatchback",
    brand: "Volkswagen",
    name: "Polo",
    year: 2017,
    kilometer: 63000,
    transmission: "Manual",
    price: 189000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/cg5xuvfhmnodgrlwdgcb.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 18,
    type: "Hatchback",
    brand: "KIA",
    name: "Rio",
    year: 2023,
    kilometer: 27000,
    transmission: "Manual",
    price: 287000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/tuzm5cvgolblv42girrv.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 19,
    type: "Hatchback",
    brand: "Ford",
    name: "Fiesta",
    year: 2008,
    kilometer: 214000,
    transmission: "Automático",
    price: 83000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/HATCHBACK/wv7qch7reot3295h7qab.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 20,
    type: "Hatchback",
    brand: "Chevrolet",
    name: "Aveo",
    year: 2024,
    kilometer: 14000,
    transmission: "Automático",
    price: 290000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889395/CARROS%20ACTUALIZACION/HATCHBACK/mqgonenyxaxpd9atu8as.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 21,
    type: "Pick Up",
    brand: "Nissan",
    name: "Frontier",
    year: 2010,
    kilometer: 188000,
    transmission: "Manual",
    price: 197000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/iikuqbp7nxlsgpz93qh9.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 22,
    type: "Pick Up",
    brand: "Dodge",
    name: "Ram 1500 TRX",
    year: 2021,
    kilometer: 57000,
    transmission: "Manual",
    price: 580000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yf137l97v50bv7dayqy3.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 23,
    type: "Pick Up",
    brand: "Ford",
    name: "Ranger",
    year: 2023,
    kilometer: 124000,
    transmission: "Manual",
    price: 254000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/romyos7pv8vhha3tqffo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 24,
    type: "Pick Up",
    brand: "Chevrolet",
    name: "Cheyenne",
    year: 2015,
    kilometer: 120000,
    transmission: "Automático",
    price: 350000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889396/CARROS%20ACTUALIZACION/PICK%20UP/yhr9xizivzm5wvfnjzft.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 25,
    type: "Pick Up",
    brand: "Toyota",
    name: "Hilux",
    year: 2016,
    kilometer: 55000,
    transmission: "Automático",
    price: 270000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889397/CARROS%20ACTUALIZACION/PICK%20UP/uysztqhhyomm9yl3a3pp.jpg",
    owners: 2,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 6,
  },
  {
    id_car: 26,
    type: "VAN",
    brand: "Nissan",
    name: "Urvan",
    year: 2017,
    kilometer: 244000,
    transmission: "Manual",
    price: 167000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/bqkedgz11mkxojw57oiz.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 2,
  },
  {
    id_car: 27,
    type: "VAN",
    brand: "Toyota",
    name: "Hiace",
    year: 2019,
    kilometer: 157000,
    transmission: "Manual",
    price: 230000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 3,
  },
  {
    id_car: 28,
    type: "VAN",
    brand: "Ford",
    name: "Transit",
    year: 2020,
    kilometer: 174000,
    transmission: "Manual",
    price: 285000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889398/CARROS%20ACTUALIZACION/VAN/ctmgfch57gxydh7r0bwg.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 4,
  },
  {
    id_car: 29,
    type: "VAN",
    brand: "Volkswagen",
    name: "Transporter",
    year: 2012,
    kilometer: 280000,
    transmission: "Automático",
    price: 145000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727889399/CARROS%20ACTUALIZACION/VAN/tizxegacbbkfwlc88hzo.jpg",
    owners: 1,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
    verified: 1,
    sold: 0,
    seller_id_user: 5,
  },
  {
    id_car: 30,
    type: "VAN",
    brand: "Mercedes",
    name: "Sprinter",
    year: 2021,
    kilometer: 180000,
    transmission: "Automático",
    price: 300000,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1727898730/CARROS%20ACTUALIZACION/VAN/dsebewpjrkkut6qpk1bs.jpg",
    owners: 3,
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión",
    verified: 1,
    sold: 1,
    seller_id_user: 6,
  },
];
let dataComments = [
  {
    id_comment: 1,
    content:
      "Compré un Nissan Urvan 2018 y fue una excelente adquisición a pesar de tener más de 120,000 kms, estéticamente y mecánicamente se encontraba en perfectas condiciones, llevó más de 1 año y sin necesidad de mantenimientos correctivos.",
    rating: 5,
    comment_date: "2024-01-01",
    approved: 1,
    buyer_id_user: 2,
    seller_id_user: 3,
  },
  {
    id_comment: 2,
    content:
      "Adquirí una Toyota Hiace 2018 y fue una buena compra, se respetó el precio y las condiciones en las que se me comentó que se encontraba la camioneta, tanto el vendedor como OneClickCar se aseguraron de brindar confiabilidad al proceso.",
    rating: 4,
    comment_date: "2024-01-02",
    approved: 1,
    buyer_id_user: 3,
    seller_id_user: 4,
  },
  {
    id_comment: 3,
    content:
      "Le compré un Ford Transit 2021, al inicio todo iba bien pero unos meses posteriores la bomba de gasolina falló, aunque me comentaron que era un tema de desgaste por uso y antigüedad, reconozco que todo el proceso con el vendedor y la platafora fue transparente.",
    rating: 5,
    comment_date: "2024-01-03",
    approved: 1,
    buyer_id_user: 4,
    seller_id_user: 5,
  },
  {
    id_comment: 4,
    content: "Me encanto el vehículo, recomiendo 100% al vendedor",
    rating: 5,
    comment_date: "2024-01-04",
    approved: 1,
    buyer_id_user: 5,
    seller_id_user: 6,
  },
  {
    id_comment: 5,
    content: "Pude encontrar mi coche ideal a un excelente precio.",
    rating: 5,
    comment_date: "2024-01-05",
    approved: 1,
    buyer_id_user: 6,
    seller_id_user: 2,
  },
];
let dataPaymentMethod = [
  {
    id_card: 1,
    name_card: "Luis Meléndez",
    type_card: "Visa",
    number_card: "4154187326118117",
    date_card: "2025-10-01",
    cvv_card: "123",
    users_id_user: 2,
  },
  {
    id_card: 2,
    name_card: "Libertad Rivas",
    type_card: "MasterCard",
    number_card: "317349875390931",
    date_card: "2024-09-01",
    cvv_card: "456",
    users_id_user: 3,
  },
  {
    id_card: 3,
    name_card: "Antonio Rosas",
    type_card: "American Express",
    number_card: "371449635398431",
    date_card: "2023-08-01",
    cvv_card: "789",
    users_id_user: 4,
  },
  {
    id_card: 4,
    name_card: "Sergio Rolón",
    type_card: "Discover",
    number_card: "6011000990139424",
    date_card: "2026-07-01",
    cvv_card: "012",
    users_id_user: 5,
  },
  {
    id_card: 5,
    name_card: "Adrián Hernández",
    type_card: "Visa",
    number_card: "5231789940139574",
    date_card: "2025-06-01",
    cvv_card: "345",
    users_id_user: 6,
  },
];
let dataDepositMethod = [
  {
    id_account: 1,
    name_account: "Luis Meléndez",
    type_card: "BBVA",
    name_bank: "1234567890123456",
    users_id_user: 2,
  },
  {
    id_account: 2,
    name_account: "Libertad Rivas",
    type_card: "Banamex",
    name_bank: "0987654321123456",
    users_id_user: 3,
  },
  {
    id_account: 3,
    name_account: "Antonio Rosas",
    type_card: "Banorte",
    name_bank: "2345678901123456",
    users_id_user: 4,
  },
  {
    id_account: 4,
    name_account: "Sergio Rolón",
    type_card: "Santander",
    name_bank: "3456789012123456",
    users_id_user: 5,
  },
  {
    id_account: 5,
    name_account: "Adrián Hernández",
    type_card: "HSBC",
    name_bank: "4567890123123456",
    users_id_user: 6,
  },
];
let dataTransactions = [
  {
    id_transaction: 1,
    date_transaction: "2024-10-01",
    buyer_id_user: 2,
    seller_id_user: 3,
    Cars_id_car: 31,
    Payment_method_id_card: 1,
    Deposit_method_id_account: 2,
  },
  {
    id_transaction: 2,
    date_transaction: "2024-10-02",
    buyer_id_user: 3,
    seller_id_user: 4,
    Cars_id_car: 32,
    Payment_method_id_card: 2,
    Deposit_method_id_account: 3,
  },
  {
    id_transaction: 3,
    date_transaction: "2024-10-03",
    buyer_id_user: 4,
    seller_id_user: 5,
    Cars_id_car: 33,
    Payment_method_id_card: 3,
    Deposit_method_id_account: 4,
  },
  {
    id_transaction: 4,
    date_transaction: "2024-10-04",
    buyer_id_user: 5,
    seller_id_user: 6,
    Cars_id_car: 34,
    Payment_method_id_card: 4,
    Deposit_method_id_account: 5,
  },
  {
    id_transaction: 5,
    date_transaction: "2024-10-05",
    buyer_id_user: 6,
    seller_id_user: 2,
    Cars_id_car: 35,
    Payment_method_id_card: 5,
    Deposit_method_id_account: 1,
  },
];

// Function fetch dataCars - funcional -- cambiar URL
// function getDataCars() {
//   const promesa = fetch("http://localhost:8080/api/productos/", {
//     method: "GET",
//   });
//   promesa
//     .then((response) => {
//       response
//         .json()
//         .then((dataCarsFetch) => {
//           if (localStorage.getItem("dataCarsOnSale") != null) {
//             filterDataCars(JSON.parse(localStorage.getItem("dataCarsOnSale")));
//             createGroupCarousels();
//           } else {
//             console.log(dataCarsFetch);
//             localStorage.setItem(
//               "dataCarsOnSale",
//               JSON.stringify(dataCarsFetch)
//             );
//             filterDataCars(JSON.parse(localStorage.getItem("dataCarsOnSale")));
//             createGroupCarousels();
//           }
//         })
//         .catch((error) => console.log("Problema con el json", error));
//     })
//     .catch((err) => console.log("Existió un problema con la solicitud", err));
// } //getDataCars()

//Function fetch dataCars local
function getDataCars() {
  if (localStorage.getItem("dataCarsOnSale") != null) {
    filterDataCars(JSON.parse(localStorage.getItem("dataCarsOnSale")));
    createGroupCarousels();
  } else {
    localStorage.setItem("dataCarsOnSale", JSON.stringify(dataCarsOnSale));
    filterDataCars(JSON.parse(localStorage.getItem("dataCarsOnSale")));
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
                      listCars[j].id_car
                    }"  onclick="productInformation(${listCars[j].id_car},${
        listCars[j].seller_id_user
      })" oncontextmenu="productInformation(${listCars[j].id_car},${
        listCars[j].seller_id_user
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
                      listCars[i].id_car
                    }"  onclick="productInformation(${listCars[i].id_car},${
      listCars[i].seller_id_user
    })" oncontextmenu="productInformation(${listCars[i].id_car},${
      listCars[i].seller_id_user
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
function productInformation(id_car, seller_id_user) {
  if (sessionStorage.getItem("id_user_logged") != null) {
    localStorage.setItem("id_car", id_car);
    localStorage.setItem("seller_id_user", seller_id_user);
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
      window.location.href = "../pages/sign_in.html";
    } else {
      // github
      window.location.href =
        "https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html";
    }
  }
} // productInformation()

// *************Ejecución*************
getDataCars();

// Establecer contadores
// Contador comentarios
if (localStorage.getItem("contadorComment") == null) {
  localStorage.setItem("contadorComment", "5");
}else{let contadorComment = JSON.parse(localStorage.getItem("contadorComment"));}
// Contador usuarios
if (localStorage.getItem("contadorUser") == null) {
  localStorage.setItem("contadorUser", "6");
} else { let contadorUser = JSON.parse(localStorage.getItem("contadorUser")); }
// Contador carros
if (localStorage.getItem("contadorCarsOnSale") == null) {
  localStorage.setItem("contadorCarsOnSale", "30");
} else { let contadorCarsOnSale = JSON.parse(localStorage.getItem("contadorCarsOnSaleCar")); }
// Contador carros en general
if (localStorage.getItem("contadorCarsGeneral") == null) {
  localStorage.setItem("contadorCarsGeneral", "35");
} else { let contadorCarsGeneral = JSON.parse(localStorage.getItem("contadorCarsGeneral")); }
// Identificador usuario loggeado-actual
// sessionStorage.setItem("id_user_logged", "0");

// Contador método de depósito
if (localStorage.getItem("contadorDeposit") == null) {
  localStorage.setItem("contadorDeposit", "5");
} else { let contadorDeposit = JSON.parse(localStorage.getItem("contadorDeposit")); }
// Contador método de pago
if (localStorage.getItem("contadorPayment") == null) {
  localStorage.setItem("contadorPayment", "5");
} else { let contadorPayment = JSON.parse(localStorage.getItem("contadorPayment")); }
// Contador transacciones
if (localStorage.getItem("contadorTransactions") == null) {
  localStorage.setItem("contadorTransactions", "5");
} else { let contadorTransactions = JSON.parse(localStorage.getItem("contadorTransactions")); }
 
// Establecer datos 
//Métodos de depósito
if (localStorage.getItem("dataDepositMethod") == null) {
  localStorage.setItem("dataDepositMethod",JSON.stringify(dataDepositMethod));
} else { let dataDepositMethod = localStorage.getItem("dataDepositMethod"); }
// Comentarios
if (localStorage.getItem("dataComments") == null) {
  localStorage.setItem("dataComments", JSON.stringify(dataComments));
} else {let dataComments = JSON.parse(localStorage.getItem("dataComments")); }
// Usuarios
if (localStorage.getItem("dataUsers") == null) {
  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
} else {let dataUsers = JSON.parse(localStorage.getItem("dataUsers")); }
// Carros general
if (localStorage.getItem("dataCarsGeneral") == null) {
  localStorage.setItem("dataCarsGeneral", JSON.stringify(dataCarsGeneral));
} else {let dataCarsGeneral = JSON.parse(localStorage.getItem("dataCarsGeneral")); }
//Métodos de pago
if (localStorage.getItem("dataPaymentMethod") == null) {
  localStorage.setItem("dataPaymentMethod",JSON.stringify(dataPaymentMethod));
} else {let  dataPaymentMethod = localStorage.getItem("dataPaymentMethod"); }
//Transacciones
if (localStorage.getItem("dataTransactions") == null) {
  localStorage.setItem("dataTransactions",JSON.stringify(dataTransactions));
} else {let  dataTransactions = localStorage.getItem("dataTransactions"); }
