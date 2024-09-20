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
// Array de objetos carros

let dataCars = [
  {
    id: 1,
    type: "Sedán",
    brand: "Chevrolet",
    name: "Cavalier",
    year: 2021,
    seller: "Adrían Hernández Lascurain",
    kilometer: 51000,
    transmission: "Manual",
    price: 320000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SEDAN/mo2v6vwzavkwwthalear.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 2,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2019,
    seller: "Luis José Meléndez",
    kilometer: 97000,
    transmission: "Manual",
    price: 217000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SEDAN/dirxxxm6shvvawetja8v.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 3,
    type: "Sedán",
    brand: "KIA",
    name: "Forte",
    year: 2022,
    seller: "Juan Antonio Santos",
    kilometer: 38000,
    transmission: "Manual",
    price: 280000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SEDAN/s1pky0nhoot5tdoilvm3.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 4,
    type: "Sedán",
    brand: "Toyota",
    name: "Corolla",
    year: 2020,
    seller: "Libertad Rivas",
    kilometer: 76000,
    transmission: "Automático",
    price: 250000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SEDAN/lnem6ftw7cnrlbsginbt.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 5,
    type: "Sedán",
    brand: "Dodge",
    name: "Attitude",
    year: 2021,
    seller: "Antonio Rosas",
    kilometer: 66000,
    transmission: "Automático",
    price: 190000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SEDAN/riknkhmb2mquiwsc0bpd.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 6,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2014,
    seller: "Adrían Hernández Lascurain",
    kilometer: 164000,
    transmission: "Manual",
    price: 170000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/COUPE/kvausl6gfsewh9qxyboh.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 7,
    type: "Coupé",
    brand: "Ford",
    name: "Mustang",
    year: 2023,
    seller: "Luis José Meléndez",
    kilometer: 2100,
    transmission: "Manual",
    price: 445000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/COUPE/ncgrz9vmexclk6cf71uf.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 8,
    type: "Coupé",
    brand: "Chevrolet",
    name: "Camaro",
    year: 2017,
    seller: "Juan Antonio Santos",
    kilometer: 92000,
    transmission: "Manual",
    price: 315000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/COUPE/t67gjoljblhhhslpsc1z.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 9,
    type: "Coupé",
    brand: "Audi",
    name: "A5",
    year: 2021,
    seller: "Libertad Rivas",
    kilometer: 43000,
    transmission: "Automático",
    price: 387000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/COUPE/hzgelgtxde2dlkcamrss.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 10,
    type: "Coupé",
    brand: "BMW",
    name: "Serie 4",
    year: 2012,
    seller: "Antonio Rosas",
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/COUPE/z2vfn49wsy30g94a60yv.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 11,
    type: "SUV",
    brand: "Nissan",
    name: "X-trail",
    year: 2014,
    seller: "Adrían Hernández Lascurain",
    kilometer: 133000,
    transmission: "Manual",
    price: 183000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SUV/l73oqhmg4nwijlq28zr6.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 12,
    type: "SUV",
    brand: "Toyota",
    name: "RAV-4",
    year: 2018,
    seller: "Luis José Meléndez",
    kilometer: 117000,
    transmission: "Manual",
    price: 264000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SUV/kud63enpxomwwqzq6ukk.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 13,
    type: "SUV",
    brand: "Honda",
    name: "CRV",
    year: 2011,
    seller: "Juan Antonio Santos",
    kilometer: 204000,
    transmission: "Manual",
    price: 132000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SUV/cx95rj3sbqj2uichg26k.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 14,
    type: "SUV",
    brand: "Volkswagen",
    name: "Tiguan",
    year: 2024,
    seller: "Libertad Rivas",
    kilometer: 9000,
    transmission: "Automático",
    price: 567000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SUV/yayhtzrkmvdxorb8i9lu.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 15,
    type: "SUV",
    brand: "Mazda",
    name: "CX-5",
    year: 2019,
    seller: "Antonio Rosas",
    kilometer: 149000,
    transmission: "Automático",
    price: 187000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/SUV/r8esoq0egdwqm086jvke.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 16,
    type: "Hatchback",
    brand: "Mazda",
    name: "3",
    year: 2016,
    seller: "Adrían Hernández Lascurain",
    kilometer: 141000,
    transmission: "Manual",
    price: 160000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/HATCHBACK/x9umuvodxm0kp7didtqo.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 17,
    type: "Hatchback",
    brand: "Volkswagen",
    name: "Polo",
    year: 2017,
    seller: "Luis José Meléndez",
    kilometer: 63000,
    transmission: "Manual",
    price: 189000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/HATCHBACK/mjgtfyujihtyd2iqaf5x.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 18,
    type: "Hatchback",
    brand: "KIA",
    name: "Rio",
    year: 2023,
    seller: "Juan Antonio Santos",
    kilometer: 27000,
    transmission: "Manual",
    price: 287000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/HATCHBACK/httvgs7r36fcajh31ybh.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 19,
    type: "Hatchback",
    brand: "Ford",
    name: "Fiesta",
    year: 2008,
    seller: "Libertad Rivas",
    kilometer: 214000,
    transmission: "Automático",
    price: 83000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/HATCHBACK/el6vjtdgwmwqdlijkmfw.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 20,
    type: "Hatchback",
    brand: "Chevrolet",
    name: "Aveo",
    year: 2024,
    seller: "Antonio Rosas",
    kilometer: 14000,
    transmission: "Automático",
    price: 290000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/HATCHBACK/xfsu0gdt4l9nlp7po6iq.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 21,
    type: "Pick Up",
    brand: "Nissan",
    name: "Frontier",
    year: 2010,
    seller: "Adrían Hernández Lascurain",
    kilometer: 188000,
    transmission: "Manual",
    price: 197000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/PICKUP/d6tdotr7xa8y5c0dixjz.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 22,
    type: "Pick Up",
    brand: "Dodge",
    name: "Ram 1500",
    year: 2021,
    seller: "Luis José Meléndez",
    kilometer: 57000,
    transmission: "Manual",
    price: 580000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/PICKUP/qgqda5pckvfqts3sd5xh.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 23,
    type: "Pick Up",
    brand: "Ford",
    name: "Ranger",
    year: 2023,
    seller: "Juan Antonio Santos",
    kilometer: 124000,
    transmission: "Manual",
    price: 254000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/PICKUP/szzb2yiotmrqlh0b1iii.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 24,
    type: "Pick Up",
    brand: "Chevrolet",
    name: "Cheyenne",
    year: 2015,
    seller: "Libertad Rivas",
    kilometer: 120000,
    transmission: "Automático",
    price: 350000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/PICKUP/qc0qvde2hp1vwtcy8pth.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 25,
    type: "Pick Up",
    brand: "Toyota",
    name: "Hilux",
    year: 2016,
    seller: "Antonio Rosas",
    kilometer: 55000,
    transmission: "Automático",
    price: 270000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1725945325/photoCars/PICKUP/g12m29sldqpcd7nczmbg.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 26,
    type: "VAN",
    brand: "Nissan",
    name: "Urvan",
    year: 2017,
    seller: "Adrían Hernández Lascurain",
    kilometer: 244000,
    transmission: "Manual",
    price: 167000,
    owners: 2,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1726781657/photoCars/VAN/ghxmiuipcxwpwppjvqqm.png",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 27,
    type: "VAN",
    brand: "Toyota",
    name: "Hiace",
    year: 2019,
    seller: "Luis José Meléndez",
    kilometer: 157000,
    transmission: "Manual",
    price: 230000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1726781657/photoCars/VAN/rnk6jmi5khrbscz1tzo5.png",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 28,
    type: "VAN",
    brand: "Ford",
    name: "Transit",
    year: 2020,
    seller: "Juan Antonio Santos",
    kilometer: 174000,
    transmission: "Manual",
    price: 285000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1726781657/photoCars/VAN/pwgd1wj2ct959x5esvu5.png",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 29,
    type: "VAN",
    brand: "Volkswagen",
    name: "Transporter",
    year: 2012,
    seller: "Libertad Rivas",
    kilometer: 280000,
    transmission: "Automático",
    price: 145000,
    owners: 1,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1726781657/photoCars/VAN/qqltps6h3xt40w0ipmgf.png",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión o compra.",
  },
  {
    id: 30,
    type: "VAN",
    brand: "Mercedes",
    name: "Sprinter",
    year: 2021,
    seller: "Antonio Rosas",
    kilometer: 180000,
    transmission: "Automático",
    price: 300000,
    owners: 3,
    img: "https://res.cloudinary.com/duqki6x6t/image/upload/v1726781657/photoCars/VAN/loq7ndnhxxfcb0omhyas.jpg",
    description:
      "Llevate este excelente vehículo en óptimas condiciones. Ha pasado todas las revisiones (mécanica y legal), así que contacta al vendedor para más información, cita para revisión",
  },
];

// let car = [];
// dataCars.push(car);

// Array de objetos clients
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

// Array de objetos comments
let dataComments = [
  {
    idComment: 1,
    content:
      "Compré un Nissan Versa 2018 con SergioR y fue una excelente adquisición a pesar de tener más de 200,000 kms, estéticamente y mecánicamente se encontraba en perfectas condiciones, llevó más de 1 año y sin necesidad de mantenimientos correctivos.",
    rating: 5,
    idClient: 1,
    idSeller: 1,
  },
  {
    idComment: 2,
    content:
      "Adquirí una Hilux 2015 con SergioR y fue una buena compra, se respetó el precio y las condiciones en las que se me comentó que se encontraba la camioneta, tanto el vendedor como OneClickCar se aseguraron de brindar confiabilidad al proceso.",
    rating: 4,
    idClient: 1,
    idSeller: 2,
  },
  {
    idComment: 3,
    content:
      "Le compré un Toyoya Yaris a SergioR, al inicio todo iba bien pero unos meses posteriores la bomba de gasolina falló, aunque me comentaron que era un tema de desgaste por uso y antigüedad, reconozco que todo el proceso con el vendedor y la platafora fue transparente.",
    rating: 3,
    idClient: 1,
    idSeller: 3,
  },
];

// *************Métodos*************
// Función para filtrar por tipo de carros
function filterDataCars() {
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
              <a class="link-cards" href="#">
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
                    <div class="text-center"><a id="btnInfo${
                      listCars[j].id
                    }"  onclick=pruebaClick(${
        listCars[j].id
      }) class="btn btn-primary btn-informacion">Más información</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
                </a>
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
                      listCars[i].id
                    }"  onclick=pruebaClick(${
      listCars[i].id
    }) class="btn btn-primary">Más información</a></div><!-- fin div boton-->
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
  vanSearch = pickUpCars.filter(
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
    console.log("No hay coincidencias Sedan");
    titleSedan.style.display = "none";
  } else {
    alertActive = false;
    titleSedan.style.display = "block";
    createCarouselDesktop(sedanSearch, carouselSedanDesktop, tipoSedan);
    createCarouselMobile(sedanSearch, carouselSedanMobile, tipoSedan);
  }
  // Coupé
  if (coupeSearch.length === 0) {
    console.log("No hay coincidencias");
    titleCoupe.style.display = "none";
  } else {
    alertActive = false;
    titleCoupe.style.display = "block";
    createCarouselDesktop(coupeSearch, carouselCoupeDesktop, tipoCoupe);
    createCarouselMobile(coupeSearch, carouselCoupeMobile, tipoCoupe);
  }
  // SUV
  if (suvSearch.length === 0) {
    console.log("No hay coincidencias");
    titleSuv.style.display = "none";
  } else {
    alertActive = false;
    titleSuv.style.display = "block";
    createCarouselDesktop(suvSearch, carouselSuvDesktop, tipoSuv);
    createCarouselMobile(suvSearch, carouselSuvMobile, tipoSuv);
  }
  //HatchBack
  if (hatchBackSearch.length === 0) {
    console.log("No hay coincidencias");
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
    console.log("No hay coincidencias");
    titlePickUp.style.display = "none";
  } else {
    alertActive = false;
    titlePickUp.style.display = "block";
    createCarouselDesktop(pickUpSearch, carouselPickUpDesktop, tipoPickUp);
    createCarouselMobile(pickUpSearch, carouselPickUpMobile, tipoPickUp);
  }
  //VAV
  if (vanSearch.length === 0) {
    console.log("No hay coincidencias");
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
  filterDataCars();
  createGroupCarousels();
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
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    inputValue = inputSearch.value;
    // Trigger the button element with a click
    filterSearchCars(inputValue);
    inputSearch.value = "";
  }
}); //inputSearch.addEventListener()

// // Pendiente vincular con product_information
// function pruebaClick(index) {
//   sessionStorage.setItem("brand", dataCars[index - 1].brand);
//   sessionStorage.setItem("name", dataCars[index - 1].name);
//   sessionStorage.setItem("description", dataCars[index - 1].description);
//   sessionStorage.setItem("year", dataCars[index - 1].year);
//   sessionStorage.setItem("seller", dataCars[index - 1].seller);
//   sessionStorage.setItem("kilometer", dataCars[index - 1].kilometer);
//   sessionStorage.setItem("transmission", dataCars[index - 1].transmission);
//   sessionStorage.setItem("owners", dataCars[index - 1].owners);
//   sessionStorage.setItem("price", dataCars[index - 1].price);
//   console.log("El valor guardado es " + sessionStorage.getItem("brand"));
//   console.log("El valor guardado es " + sessionStorage.getItem("price"));
// }

// *************Ejecución*************
// Llamada métodos al carga página
// Recuperar datos localStorage
if (localStorage.getItem("dataCars") != null) {
  dataCars = JSON.parse(localStorage.getItem("dataCars"));
} else {
  localStorage.setItem("dataCars", JSON.stringify(dataCars));
}
filterDataCars();
createGroupCarousels();
