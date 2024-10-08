let contadorComment = 0;

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
let currentDate = `${year}-${month}-${day}`;

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
    Buyer_id_user: 2,
    seller_id_user: 3,
  },
  {
    id_comment: 2,
    content:
      "Adquirí una Toyota Hiace 2018 y fue una buena compra, se respetó el precio y las condiciones en las que se me comentó que se encontraba la camioneta, tanto el vendedor como OneClickCar se aseguraron de brindar confiabilidad al proceso.",
    rating: 4,
    comment_date: "2024-01-02",
    approved: 1,
    Buyer_id_user: 3,
    seller_id_user: 4,
  },
  {
    id_comment: 3,
    content:
      "Le compré un Ford Transit 2021, al inicio todo iba bien pero unos meses posteriores la bomba de gasolina falló, aunque me comentaron que era un tema de desgaste por uso y antigüedad, reconozco que todo el proceso con el vendedor y la platafora fue transparente.",
    rating: 5,
    comment_date: "2024-01-03",
    approved: 1,
    Buyer_id_user: 4,
    seller_id_user: 5,
  },
  {
    id_comment: 4,
    content: "Me encanto el vehículo, recomiendo 100% al vendedor",
    rating: 5,
    comment_date: "2024-01-04",
    approved: 1,
    Buyer_id_user: 5,
    seller_id_user: 6,
  },
  {
    id_comment: 5,
    content: "Pude encontrar mi coche ideal a un excelente precio.",
    rating: 5,
    comment_date: "2024-01-05",
    approved: 1,
    Buyer_id_user: 6,
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
    Users_id_user: 2,
  },
  {
    id_card: 2,
    name_card: "Libertad Rivas",
    type_card: "MasterCard",
    number_card: "317349875390931",
    date_card: "2024-09-01",
    cvv_card: "456",
    Users_id_user: 3,
  },
  {
    id_card: 3,
    name_card: "Antonio Rosas",
    type_card: "American Express",
    number_card: "371449635398431",
    date_card: "2023-08-01",
    cvv_card: "789",
    Users_id_user: 4,
  },
  {
    id_card: 4,
    name_card: "Sergio Rolón",
    type_card: "Discover",
    number_card: "6011000990139424",
    date_card: "2026-07-01",
    cvv_card: "012",
    Users_id_user: 5,
  },
  {
    id_card: 5,
    name_card: "Adrián Hernández",
    type_card: "Visa",
    number_card: "5231789940139574",
    date_card: "2025-06-01",
    cvv_card: "345",
    Users_id_user: 6,
  },
];
let dataDepositMethod = [
  {
    id_account: 1,
    name_account: "Luis Meléndez",
    type_card: "BBVA",
    name_bank: "1234567890",
    Users_id_user: 2,
  },
  {
    id_account: 2,
    name_account: "Libertad Rivas",
    type_card: "Banamex",
    name_bank: "0987654321",
    Users_id_user: 3,
  },
  {
    id_account: 3,
    name_account: "Antonio Rosas",
    type_card: "Banorte",
    name_bank: "2345678901",
    Users_id_user: 4,
  },
  {
    id_account: 4,
    name_account: "Sergio Rolón",
    type_card: "Santander",
    name_bank: "3456789012",
    Users_id_user: 5,
  },
  {
    id_account: 5,
    name_account: "Adrián Hernández",
    type_card: "HSBC",
    name_bank: "4567890123",
    Users_id_user: 6,
  },
];
let dataTransactions = [
  {
    id_transaction: 1,
    date_transaction: "2024-10-01",
    Buyer_id_user: 2,
    seller_id_user: 3,
    Cars_id_car: 31,
    Payment_method_id_card: 1,
    Deposit_method_id_account: 2,
  },
  {
    id_transaction: 2,
    date_transaction: "2024-10-02",
    Buyer_id_user: 3,
    seller_id_user: 4,
    Cars_id_car: 32,
    Payment_method_id_card: 2,
    Deposit_method_id_account: 3,
  },
  {
    id_transaction: 3,
    date_transaction: "2024-10-03",
    Buyer_id_user: 4,
    seller_id_user: 5,
    Cars_id_car: 33,
    Payment_method_id_card: 3,
    Deposit_method_id_account: 4,
  },
  {
    id_transaction: 4,
    date_transaction: "2024-10-04",
    Buyer_id_user: 5,
    seller_id_user: 6,
    Cars_id_car: 34,
    Payment_method_id_card: 4,
    Deposit_method_id_account: 5,
  },
  {
    id_transaction: 5,
    date_transaction: "2024-10-05",
    Buyer_id_user: 6,
    seller_id_user: 2,
    Cars_id_car: 35,
    Payment_method_id_card: 5,
    Deposit_method_id_account: 1,
  },
];
// eliminar luego
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
  {
    idClient: 5,
    name: "AntonioR",
  },
  {
    idClient: 6,
    name: "SergioR",
  },
];

let dataCommentsOld = [
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

function createCard(listCars, id_car, dataUsers, seller_id_user) {
  product_title.insertAdjacentHTML(
    "beforeend",
    `${listCars[id_car].brand} ${listCars[id_car].name}`
  );
  htmlContent += `
              
                <div class="card">
                  <!-- Card -->
                  <img src="${
                    listCars[id_car].img
                  }" class="img-fluid" id="img_car" alt="${
    listCars[id_car].description
  }" />
                  <div class="card-body"><!-- Card body -->
                    <h2 class="text-center">Descripción</h2>
                    <p class="p_description">${listCars[id_car].description}</p>
                    <div class="row justify-content-center" id="row_description">
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Año: ${
                        listCars[id_car].year
                      }</div>
                      <div class="div_details col-sm-12 col-md-12 col-lg-4">Kilometraje: ${listCars[
                        id_car
                      ].kilometer.toLocaleString("es-MX")}</div>
                      <div class="div_details col-sm-12 col-lg-4">Dueños: ${
                        listCars[id_car].owners
                      }</div>
                    </div>
                    <div class="row justify-content-center" id="row_description2">
                      <div class="div_details col-sm-12 col-lg-4">Vendedor: ${
                        dataUsers[seller_id_user].full_name
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Transmisión: ${
                        listCars[id_car].transmission
                      }</div>
                      <div class="div_details col-sm-12 col-lg-4">Precio: $ ${listCars[
                        id_car
                      ].price.toLocaleString("es-MX")}</div>
                    </div>
                    <div class="text-center div_button_details"><a href="https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${
                      listCars[id_car].brand
                    }%20${listCars[id_car].name}%20${
    listCars[id_car].year
  }" class="btn btn-primary btn-interest">Me interesa</a></div><!-- fin div boton-->
                  </div><!-- ****************************FIN Card body -->
                </div><!-- ****************************FIN Card -->
              `;
  card_carro.insertAdjacentHTML("beforeend", htmlContent);
  price_car.insertAdjacentHTML(
    "beforeend",
    `$${listCars[id_car].price.toLocaleString("es-MX")}`
  );
  if (listCars[id_car].verified == 1) {
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
    `https://wa.me/523322291846?text=Hola,%20podría%20brindarme%20más%20información%20sobre%20el%20${listCars[id_car].brand}%20${listCars[id_car].name}%20${listCars[id_car].year},%20por%20favor.`
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
      JSON.parse(localStorage.getItem("seller_id_user") - 1)
    );
  } else {
    localStorage.setItem("dataComments", JSON.stringify(dataComments));
    createOpinios(
      JSON.parse(localStorage.getItem("dataComments")),
      JSON.parse(localStorage.getItem("dataUsers")),
      JSON.parse(localStorage.getItem("seller_id_user") - 1)
    );
  }
} //getDataComments()

function createOpinios(dataComments, dataUsers, seller_id_user) {
  let htmlContent = "";
  for (i = 0; i < dataComments.length; i++) {
    if (dataComments[i].seller_id_user == seller_id_user + 1) {
      htmlContent = `
    <div id="div_span_user">
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="span_user"><span class="span_text">${
        dataUsers[dataComments[i].Buyer_id_user - 1].full_name
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
  htmlContent += `
    <img class="img_profile" src="https://res.cloudinary.com/duqki6x6t/image/upload/v1727588002/h5zdh5wsuos6fp8mhtls.png" alt="Imagen perfil">
      <span class="actual_user">${
        dataUsers[id_user_logged - 1].full_name
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
        contadorComment++;
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
          Buyer_id_user: id_user_logged,
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
    JSON.parse(localStorage.getItem("id_car") - 1),
    JSON.parse(localStorage.getItem("dataUsers")),
    JSON.parse(localStorage.getItem("seller_id_user") - 1)
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
// Establecer contadores
// Contador comentarios
if (localStorage.getItem("contadorComment") == null) {
  localStorage.setItem("contadorComment", "5");
}
if (localStorage.getItem("contadorComment") != null) {
  contadorComment = JSON.parse(localStorage.getItem("contadorComment"));
}
// Contador usuarios
if (localStorage.getItem("contadorUser") == null) {
  localStorage.setItem("contadorUser", "6");
}
if (localStorage.getItem("contadorUser") != null) {
  contadorUser = JSON.parse(localStorage.getItem("contadorUser"));
}
