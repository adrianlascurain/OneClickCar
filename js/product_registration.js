// Get elements to control publish button
const publishBtn = document.getElementById("public");
const termsCheckboxBtn = document.getElementById("terms");
const privacyCheckboxBtn = document.getElementById("privacy");

// Regex for vehicle identification number (serial number)

const disableBtn = (btn) => {
  btn.disabled = true;
  btn.style.opacity = "50%";
}// disableBtn

const enableBtn = (btn) => {
  btn.disabled = false;
  btn.style.opacity = "100%";
}// enableBtn


// maintain button disabled until terms and privacy are not accepted
disableBtn(publishBtn);

// Check terms and policy
termsCheckboxBtn.onclick = function () {
    // Terms and policy are accepted so enable button and animate it, otherwise, disable publish button
  if(termsCheckboxBtn.checked && privacyCheckboxBtn.checked){
    enableBtn(publishBtn);
    animeteElement("#public","tada");
  }else{
    disableBtn(publishBtn);
  }
}

// Check terms and policy
privacyCheckboxBtn.onclick = function(){
    // Terms and policy are accepted so enable button and animate it, otherwise, disable publish button
  if(termsCheckboxBtn.checked && privacyCheckboxBtn.checked){
    enableBtn(publishBtn);
    animeteElement("#public","tada");
  }else{
    disableBtn(publishBtn);
  }
}

// Animate an element using css animtion library
function animeteElement(selector,animation){
        
  new Promise((resolve,reject)=> {
      const prefix = "animate__";
  
      const animationName = `${prefix}${animation}`;
      const element = document.querySelector(selector);
      element.classList.add(`${prefix}animated`, animationName);

      function handleAnimationEnd(event){
          event.stopPropagation();
          element.classList.remove(`${prefix}animated`, animationName);
          resolve("animation ended");
      }

      element.addEventListener("animationend",handleAnimationEnd,{once : true});
  })
} // animeteElement

// Regex set
const brandRegEx = /^(?=.*[a-zA-Z]).{2,}$/;
const modelRegEx =  /^(?=.*[a-zA-Z0-9]).{1,}$/;
const transmisionRegEx = /^(?=(?:.*[a-zA-Z]){3,}).*$/;
const VINRegex = /^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$/


// Validation set
const validateType = (type) => type !== "nonSelected";
const validateBrand = (brand) => brandRegEx.test(brand);
const validateModel = (model) => modelRegEx.test(model);
const validateYear = (year) => year >= 1886 && year <= new Date().getFullYear();
const validateKm = (km) => km > 0;
const validateTransmission = (transm) => transmisionRegEx.test(transm);
const validateOwners = (owners) => owners >= 1;
const validatePrice = (price) => price > 0;
const validateSerialNumber = (number) => VINRegex.test(number);
const validateDescription = (description) => description.length >= 50;

// Get form elements
const type = document.getElementById("tipo");
const brand = document.getElementById("marca");
const model = document.getElementById("modelo");
const year = document.getElementById("anio");
const kilometer = document.getElementById("kilometraje");
const transmission = document.getElementById("transmision");
const owners = document.getElementById("num_prop");
const price = document.getElementById("precio");
const serialNumber = document.getElementById("serial")  ;
const description = document.getElementById("descripcion");
const img = document.getElementById("imagenes");
const termsCheckbox = document.getElementById("terms");
const privacyCheckbox = document.getElementById("privacy");

// Get preview elements
const typePv = document.getElementById("type-pv");
const brandPv = document.getElementById("brand-pv");
const modelPv = document.getElementById("model-pv");
const yearPv = document.getElementById("year-pv");
const kmPv = document.getElementById("km-pv");
const transmissionPv = document.getElementById("transsmision-pv");
const ownersPv = document.getElementById("owners-pv");
const pricePv = document.getElementById("price-pv");
const serialPv = document.getElementById("serial-pv");
const descriptionPv = document.getElementById("description-pv");

// hide preview elements as initial state
typePv.style.display = "none";
brandPv.style.display = "none";
modelPv.style.display = "none";
yearPv.style.display = "none";
kmPv.style.display = "none";
transmissionPv.style.display = "none";
ownersPv.style.display = "none";
pricePv.style.display = "none";
serialPv.style.display = "none";
descriptionPv.style.display = "none";

// Variables to save values
let typeValue;
let brandValue;
let modelValue;
let yearValue;
let kilometerValue;
let transmissionValue;
let ownersValue;
let priceValue;
let serialNumberValue;
let descriptionValue;
let imgValue;
let termsCheckboxValue;
let privacyCheckboxValue;

// Validation flags
let validTypeFlag = false;
let validBrandFlag = false;
let validModelFlag = false;
let validYearFlag = false;
let validKilometerFlag = false;
let validTransmissionFlag = false;
let validOwnersFlag = false;
let validPriceFlag = false;
let validSerialNumberFlag = false;
let validDescriptionFlag = false;
// let validImgFlag = false;
// let validTermsCheckboxFlag = false;
// let validPrivacyCheckboxFlag = false;


// Function to display and animate preview
const animationType = "fadeInDown";

function displayAndAnimate(label, pvTitle , inValue, animation){
    inHTML = `<span class="text-warning">${pvTitle}</span>` 
    label.innerHTML = inHTML + inValue;
    label.style.display = "block";
    animeteElement("#"+label.id,animation);
}

function displayWarning(element){
    element.style.border = "2px solid red";
}

function clearWarning(element){
    element.style.border = "2px solid #7CFC00";
}

// change event listeners to make a live preview
type.addEventListener("change", event => {
    typeValue = type.value;
    if(typeValue === "nonSelected"){
        displayWarning(type);
        displayAndAnimate(typePv,"TIPO: ", `<span class="text-danger">Selecciona una opción válida.</span>`, animationType);
        validTypeFlag = false;
    }else{
        clearWarning(type);
        displayAndAnimate(typePv,"TIPO: ", typeValue, animationType);
        validTypeFlag = true;
    }
});

brand.addEventListener("change", event => {
    brandValue = brand.value;
    if(validateBrand(brandValue)){
        clearWarning(brand);
        displayAndAnimate(brandPv,"MARCA: ", brandValue, animationType);
        validBrandFlag = true;
    }else{
        displayWarning(brand);
        displayAndAnimate(brandPv,"MARCA: ", `<span class="text-danger">Ingresa una marca válida (al menos dos caracteres).</span>`, animationType);
        validBrandFlag = false;
    }
});

model.addEventListener("change", event => {
    modelValue = model.value;
    if(validateModel(modelValue)){
        clearWarning(model);
        displayAndAnimate(modelPv,"MODELO: ", modelValue, animationType);
        validModelFlag = true;
    }else{
        displayWarning(model);
        displayAndAnimate(modelPv,"MODELO: ", `<span class="text-danger">Ingresa una modelo válido (al menos un caracter).</span>`, animationType);
        validModelFlag = false;
    }
});

year.addEventListener("change", event => {
    yearValue = Math.round(year.value);
    year.value = yearValue;
    if(validateYear(yearValue)){
        clearWarning(year);
        displayAndAnimate(yearPv,"AÑO: ", yearValue, animationType);
        validYearFlag = true;
    }else{
        displayWarning(year);
        let currentYear = new Date().getFullYear();
        displayAndAnimate(yearPv,"AÑO: ", `<span class="text-danger">Ingresa un año válido (mayor que 1886 y menor que ${currentYear}).</span>`, animationType);
        validYearFlag = true;
    }
});

kilometer.addEventListener("change", event => {
    kilometerValue = Math.round(kilometer.value);
    kilometer.value = kilometerValue; 
    if(validateKm(kilometerValue)){
        clearWarning(kilometer);
        displayAndAnimate(kmPv,"KILOMETRAJE: ", kilometerValue + " km", animationType);
        validKilometerFlag = true;
    }else{
        displayWarning(kilometer);
        displayAndAnimate(kmPv,"KILOMETRAJE: ", `<span class="text-danger">Ingresa un kilometraje válido (mayor que 0).</span>`, animationType);
        validKilometerFlag = false;
    }
});

transmission.addEventListener("change", event => {
    transmissionValue = transmission.value;
    if(validateTransmission(transmissionValue)){
        clearWarning(transmission);
        displayAndAnimate(transmissionPv,"TRANSMISIÓN: ", transmissionValue, animationType);
        validTransmissionFlag = true;
    }else{
        displayWarning(transmission);
        displayAndAnimate(transmissionPv,"TRANSMISIÓN: ", `<span class="text-danger">Ingresa una transmisión válida (al menos 3 caracteres).</span>`, animationType);
        validTransmissionFlag = false;
    }
});

owners.addEventListener("change", event => {
    ownersValue = Math.round(owners.value);
    owners.value = ownersValue;
    if(validateOwners(ownersValue)){
        clearWarning(owners);
        displayAndAnimate(ownersPv,"DUEÑOS: ", ownersValue, animationType);
        validOwnersFlag = true;
    }else{
        displayWarning(owners);
        displayAndAnimate(ownersPv,"DUEÑOS: ", `<span class="text-danger">Ingresa un número de propietarios válido (mayor o igual a 1).</span>`, animationType);
        validOwnersFlag = false;
    }
});

price.addEventListener("change", event => {
    priceValue = Math.round(price.value);
    price.value = priceValue;
    if(validatePrice(priceValue)){
        clearWarning(price);
        displayAndAnimate(pricePv,"PRECIO: ", priceValue + " MXN", animationType);
        validPriceFlag = true;
    }else{
        displayWarning(price);
        displayAndAnimate(pricePv,"PRECIO: ", `<span class="text-danger">Ingresa un precio válido (mayor que 0).</span>`, animationType);
        validPriceFlag = false;
    }
});

serialNumber.addEventListener("change", event => {
    serialNumberValue = serialNumber.value;
    if(validateSerialNumber(serialNumberValue)){
        clearWarning(serialNumber)
        displayAndAnimate(serialPv,"NÚMERO DE SERIE: ", serialNumberValue, animationType);
        validSerialNumberFlag = true;
    }else{
        displayWarning(serialNumber);
        displayAndAnimate(serialPv,"NÚMERO DE SERIE: ", `<span class="text-danger">Ingresa un número de serie válido (debe contener 17 caracteres).</span>`, animationType);
        validSerialNumberFlag = false;
    }
});

description.addEventListener("change", event => {
    descriptionValue = description.value;
    if(validateDescription(descriptionValue)){
        clearWarning(description)
        displayAndAnimate(descriptionPv,"DESCRIPCIÓN: ", descriptionValue, animationType);
        validDescriptionFlag = true;
    }else{
        displayWarning(description);
        displayAndAnimate(descriptionPv,"DESCRIPCIÓN: ", `<span class="text-danger">Ingresa una descripción válida (al menos 50 caracteres).</span>`, animationType);
        validDescriptionFlag = false;
    }
});

// Form actions
let registerForm = document.querySelector("form");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let emptyFields = [];

      // validate every single field of the form
      if (!validTypeFlag) emptyFields.push("Tipo de vehículo");
      if (!validBrandFlag) emptyFields.push("Marca");
      if (!validModelFlag) emptyFields.push("Modelo");
      if (!validYearFlag) emptyFields.push("Año");
      if (!validKilometerFlag) emptyFields.push("Kilometraje");
      if (!validTransmissionFlag) emptyFields.push("Transmisión");
      if (!validOwnersFlag) emptyFields.push("Número de propietarios");
      if (!validPriceFlag) emptyFields.push("Precio");
      if (!validSerialNumberFlag) emptyFields.push("Número de serie");
      if (!validDescriptionFlag) emptyFields.push("Descripción");

      // Check if any field is missing and if so then show an alert
      if (emptyFields.length > 0) {
        let errorMessage = "Los siguientes campos están vacíos o son inválidos:";
        errorMessage += `<ul>${emptyFields
          .map((field) => `<li><strong>${field}</strong></li>`)
          .join("")}</ul>`;
        showAlert(errorMessage);
        return;
      }


      let contadorCarsOnSale=parseInt(localStorage.getItem("contadorCarsOnSale"))+1;
      localStorage.setItem("contadorCarsOnSale", JSON.stringify(contadorCarsOnSale));

      // Create object with vehicle data
      let vehicle = {
        id_car: contadorCarsOnSale,
        type: typeValue,
        brand: brandValue,
        name: modelValue,
        year: yearValue,
        kilometer: kilometerValue,
        transmission: transmissionValue,
        price: priceValue,
        img: localStorage.getItem("image_url"), 
        owners: ownersValue,
        serialNumber: serialNumberValue,
        description: descriptionValue,
        verified: 0,
        sold: 0,
        seller_id_user: parseInt(sessionStorage.getItem("id_user_logged")),
      };
      console.log(parseInt(sessionStorage.getItem("id_user_logged")))

      // Get data from local storage
      let dataCarsOnSale = getVehicles();

      // Add new vehicle to list
      dataCarsOnSale.push(vehicle);

      // store data in local sotrage
      localStorage.setItem("dataCarsOnSale", JSON.stringify(dataCarsOnSale));

      // Success message
             Swal.fire({
          title: "Vehículo registrado con éxito.",
          text: "Se iniciará con el proceso de verificación conforme a las políticas de OneClickCar, pronto te contactaremos para más indicaciones.",
          imageUrl:
            "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          icon: "success",
        });

      // Clean form
      registerForm.reset();
      
      document
        .getElementById("uploadedimage")
        .setAttribute("src", "https://res.cloudinary.com/dz6zf3yio/image/upload/v1726810826/occ-mascota_fddolf.png");
    resetForm()
})

// Function to get stored vehicles
function getVehicles() {
    if (localStorage.getItem("dataCarsOnSale") != null) {
      let dataCars = localStorage.getItem("dataCarsOnSale");
      return dataCars ? JSON.parse(dataCars) : [];
    }
  }


// Display an alert containing all the invalid and empty fields
function showAlert(message) {
    let alertDiv = document.getElementById("alertaVehiculos");
    alertDiv.innerHTML = `<div class="alert alert-danger" role="alert">
      ${message}
    </div>`;
    animeteElement("#alertaVehiculos","shakeX")
  }


function printTotal(div) {
div.insertAdjacentHTML(
    "afterbegin",
    `<div class="alert alert-primary" role="alert">
        Vehículos en total registrados: <strong>${contadorCarsOnSaleCar}</strong>
        </div>`
);
}

// Reset flags
function resetForm(){
    // Restore values
    typeValue = "nonSelected";
    brandValue="";
    modelValue="";
    yearValue="";
    kilometerValue="";
    transmissionValue="";
    ownersValue="";
    priceValue="";
    serialNumberValue="";
    descriptionValue="";
    imgValue="";
    termsCheckboxValue="";
    privacyCheckboxValue="";

    // Validation flags
    validTypeFlag = false;
    validBrandFlag = false;
    validModelFlag = false;
    validYearFlag = false;
    validKilometerFlag = false;
    validTransmissionFlag = false;
    validOwnersFlag = false;
    validPriceFlag = false;
    validSerialNumberFlag = false;
    validDescriptionFlag = false;

    // Reset borders
    type.style.border = "1px solid #ccc";
    brand.style.border = "1px solid #ccc";
    model.style.border = "1px solid #ccc";
    year.style.border = "1px solid #ccc";
    kilometer.style.border = "1px solid #ccc";
    transmission.style.border = "1px solid #ccc";
    owners.style.border = "1px solid #ccc";
    price.style.border = "1px solid #ccc";
    serialNumber.style.border = "1px solid #ccc";
    description.style.border = "1px solid #ccc";
}