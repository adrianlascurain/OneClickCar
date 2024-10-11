const nav_bar = document.getElementById("nav_bar");
const footer_back = document.getElementById("footer_back");

// Get curren page
let path = window.location.pathname;
let page= path.split("/").pop();
let relativePathOrigin = "";

// Create a regex to validate ip's
const ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Check if local host its an ip direction
let localDeployed = ipRegEx.test(location.hostname);

if(localDeployed){
    if(page == "index.html"){
        relativePathOrigin = ".";
    }else{
        relativePathOrigin = "..";
    }  
}else{ // This case is used to deploy at GitHub Pages and must be reviewed if another hosting service will be used
    relativePathOrigin =  "/OneClickCar"
}

// Check if session storage is empty to change navbar options
// User not logged anchors display 
let displayAnchors = ["d-none","d-block","d-block","d-block","d-block","d-block","d-none","d-none","d-block","d-none"];
let userName = "";

if(sessionStorage.length != 0){
    let idUser = sessionStorage.getItem("id_user_logged");
    if(idUser > 0){
        // Get JavaScript Object
        let userCredentials = localStorage.getItem("userCredentials");
        if(userCredentials != null){
            // Try to read user credentials
            try{
                let userInfo = JSON.parse(userCredentials);
                // Obtain user full name and bring only name
                userName = userInfo.name;
                userName = userName.split(" ");
                userName = userName[0];
        
                // User logged anchors display 
                displayAnchors = ["d-flex","d-block","d-block","d-block","d-none","d-none","d-block","d-block","d-block","d-block"];
            }catch(error){
                console.error("No fue posible leer las credenciales del usuario" + error)
            }// catch
            
        }// if
        
    }// if
}// if

function createNavFoot(relativePathOrigin,displayAnchors,userName) {
  let htmlContenidoNav = `<nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725394895/OneClickCar/logoOneClickCar.png" alt="logo" id="logoOneClickCar">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="${displayAnchors[0]}">
                        <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1728545465/user-person-profile-check-svgrepo-com_jhfdfe.svg" alt="logged" id="user-logged">
                        <p class="my-auto" id="welcome-message">Bienvenido ${userName}</p>
                    </div>
                    <div class="navbar-nav ms-auto options">
                        <a class="nav-link ${displayAnchors[1]}" id="navIndex" aria-current="page" href="${relativePathOrigin}/index.html">INICIO</a>
                        <a class="nav-link ${displayAnchors[2]}" id="navAbout" href="${relativePathOrigin}/pages/about.html">NOSOTROS</a>
                        <a class="nav-link ${displayAnchors[3]}" id="navContact" href="${relativePathOrigin}/pages/contact.html">CONTACTO</a>
                        <a class="nav-link ${displayAnchors[4]}" id="navSignIn" href="${relativePathOrigin}/pages/sign_in.html">REGISTRARSE</a>
                        <a class="nav-link ${displayAnchors[5]}" id="navLogIn" href="${relativePathOrigin}/pages/log_in.html">INICIAR SESIÓN</a>
                        <a class="nav-link ${displayAnchors[6]}" id="navUserProfile" href="${relativePathOrigin}/pages/user_profile.html">PERFIL</a>
                        <a class="nav-link ${displayAnchors[7]}" id="navProductList" href="${relativePathOrigin}/pages/product_registration.html">VENDER</a>
                        <a class="nav-link ${displayAnchors[8]}" id="navProductList" href="${relativePathOrigin}/pages/product_list.html">PRODUCTOS</a>
                    </div>
                    <div class="${displayAnchors[9]}">
                        <button class="ms-3" title="Cerrar sesión" id="log-out-btn">
                            <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1728548961/logout-svgrepo-com_2_xrxkpq.svg" alt="logout" id="user-logout">
                        </button>
                    </div>
                </div>
            </div>
        </nav>`;
  nav_bar.insertAdjacentHTML("beforeend", htmlContenidoNav);

  let htmlContenidoFooter = `<h2 height="100vh">Copyright &copy OneClickCar</h2>
        <div class="footer-container d-flex flex-wrap">
            <div class="contact-info mx-3">
                <h3>Conócenos</h3>
                <a href="https://www.instagram.com/oneclickcarmx" target="_blank">
                    <div class="img-link-container d-flex justify-content-center align-items-center">
                        <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/n4vgpz2ykdqrejz53uxc.png" alt="Instagram">
                        <p class="my-0">https://www.instagram.com/oneclickcarmx/</p>
                    </div>
                </a>
                <br>
                <a href="https://www.facebook.com/OneClickCarMx" target="_blank">
                <div class="img-link-container d-flex justify-content-start align-items-center">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/olqffplsdykzjv3iiavd.png" alt="Facebook">
                    <p class="my-0">https://www.facebook.com/OneClickCarMx</p>
                </div>
                </a>
                <br>
                <a href="https://www.tiktok.com/@oneclickcarmx" target="_blank">
                    <div class="img-link-container d-flex justify-content-start align-items-center">
                        <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/ncrvqyml2zngmeeuyfl7.png" alt="TikTok">
                        <p class="my-0">https://www.tiktok.com/@oneclickcarmx</p>
                    </div>
                </a>
            </div>
            <div class="company-info mx-3">
                <h3>Contáctanos</h3>
                <div class="img-link-container d-flex justify-content-start align-items-center">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/rnnaimpxwzllqjhs97zj.png" alt="ubicacion">
                    <p class="my-0"><b>Dirección:</b> Av. de los Insurgentes Sur s/n, Benito Juárez, CDMX</p>
                </div>
                <br>
                <div class="img-link-container d-flex justify-content-start align-items-center">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/x658h5jy83qf2bb1as8y.png" alt="teléfono">
                    <p class="my-0"><b>Teléfono:</b> +52 555 555 55 55</p>
                </div>
                <br>
                <div class="img-link-container d-flex justify-content-start align-items-center">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421051/OneClickCar/cw4nzzwjirjpf8imni4p.png" alt="">
                    <p class="my-0"><b>Email:</b> oneclickcarcontacto@gmail.com</p>
                </div>
            </div>
            <div class="subscribe-section mx-3 text-center">
                <h3 class="text-center" id="publicidad">Obtén publicidad de nuestros productos</h3>
                <p class="text-warning mb-1" id="email-error">Ingresa un correo electrónico válido</p>
                <form action="#">
                    <input type="email" placeholder="Tu correo electrónico" id="ipt-email">
                    <div class="checkbox-container d-flex align-items-center justify-content-center w-100">
                        <input type="checkbox" name="consent" id="ipt-consent-checkbox">
                        <label for="ipt-consent-checkbox"><b>Confirmar para obtener correo</b></label>
                    </div>
                    <button type="submit" id="subscribeBtn">Confirmar</button>
              </form>
            </div>
        </div>
        <img id="OneClickCar" src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725394895/OneClickCar/logoOneClickCar.png" alt="OneClickCar" width="300px">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <div class="social-media terms-conditions">
            <a href="${relativePathOrigin}/pages/Terminos.html#Terminos" title="Terminos">Términos del Sitio Web</a>
            <a>|</a>
            <a href="${relativePathOrigin}/pages/Terminos.html#Politica" title="Politica">Politica de Privacidad</a>
            <a>|</a>
            <a href="${relativePathOrigin}/pages/Terminos.html#Declaracion" title="Declaración">Declaración de accesibilidad</a>
            <a>|</a>
            <a href="${relativePathOrigin}/pages/Terminos.html#Codigo" title="Conducta">Codigo de Conducta para Proveedores</a>
            <a>|</a>
            <a href="${relativePathOrigin}/pages/Terminos.html#Noventa" title="Info">No Vender Mi Información</a>
        </div>`;
  footer_back.insertAdjacentHTML("beforeend", htmlContenidoFooter);
}//createNavFoot

createNavFoot(relativePathOrigin,displayAnchors,userName);

const logOutBtn = document.getElementById("log-out-btn");

// Clean session storage and go to login page
logOutBtn.addEventListener("click",(event) =>{
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = relativePathOrigin + "/pages/log_in.html"
})//logOutBtn click