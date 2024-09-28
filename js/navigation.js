const nav_bar = document.getElementById("nav_bar");
const footer_back = document.getElementById("footer_back");

function createNavFoot() {
  let currentPath = location.href;
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
                    <div class="navbar-nav ms-auto options">
                        <a class="nav-link" id="navIndex" aria-current="page" href="https://adrianlascurain.github.io/OneClickCar/index.html">INICIO</a>
                        <a class="nav-link" id="navContact" href="https://adrianlascurain.github.io/OneClickCar/pages/contact.html">CONTACTO</a>
                        <a class="nav-link" id="navAbout" href="https://adrianlascurain.github.io/OneClickCar/pages/about.html">NOSOTROS</a>
                        <a class="nav-link" id="navLogIn" href="https://adrianlascurain.github.io/OneClickCar/pages/log_in.html">INICIAR SESIÓN</a>
                        <a class="nav-link" id="navSignIn" href="https://adrianlascurain.github.io/OneClickCar/pages/sign_in.html">REGISTRARSE</a>
                        <a class="nav-link" id="navUserProfile" href="https://adrianlascurain.github.io/OneClickCar/pages/user_profile.html">PERFIL</a>
                        <a class="nav-link" id="navProductList" href="https://adrianlascurain.github.io/OneClickCar/pages/product_list.html">PRODUCTOS</a>
                    </div>
                </div>
            </div>
        </nav>`;
  nav_bar.insertAdjacentHTML("beforeend", htmlContenidoNav);

  let htmlContenidoFooter = `<h2 height="100vh">Copyright &copy OneClickCar</h2>
        <div class="footer-container d-flex flex-wrap">
            <div class="contact-info mx-3">
                <h3>Conócenos</h3>
                <a href="https://www.instagram.com/OneClickCar/">
                    <div class="img-link-container d-flex justify-content-center align-items-center">
                        <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/n4vgpz2ykdqrejz53uxc.png" alt="Instagram">
                        <p class="my-0">https://www.instagram.com/OneClickCar/</p>
                    </div>
                </a>
                <br>
                <a href="https://www.facebook.com/OneClickCar/">
                <div class="img-link-container d-flex justify-content-start align-items-center">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/olqffplsdykzjv3iiavd.png" alt="Facebook">
                    <p class="my-0">https://www.facebook.com/OneClickCar/</p>
                </div>
                </a>
                <br>
                <a href="https://www.tiktok.com/OneClickCar/">
                    <div class="img-link-container d-flex justify-content-start align-items-center">
                        <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/ncrvqyml2zngmeeuyfl7.png" alt="TikTok">
                        <p class="my-0">https://www.tiktok.com/OneClickCar/</p>
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
                    <p class="my-0"><b>Email:</b> contacto@oneclickcar.com</p>
                </div>
            </div>
            <div class="subscribe-section mx-3 text-center">
                <h3 class="text-center" id="publicidad">Obtén publicidad de nuestros productos</h3>
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
            <a href="https://adrianlascurain.github.io/OneClickCar/pages/Terminos.html" title="Terminos">Términos del Sitio Web</a>
            <a>|</a>
            <a href="https://adrianlascurain.github.io/OneClickCar/pages/Terminos.html" title="Politica">Politica de Privacidad</a>
            <a>|</a>
            <a href="https://adrianlascurain.github.io/OneClickCar/pages/Terminos.html" title="Declaración">Declaración de accesibilidad</a>
            <a>|</a>
            <a href="https://adrianlascurain.github.io/OneClickCar/pages/Terminos.html" title="Conducta">Codigo de Conducta para Proveedores</a>
            <a>|</a>
            <a href="https://adrianlascurain.github.io/OneClickCar/pages/Terminos.html" title="Info">No Vender Mi Información</a>
        </div>`;
  footer_back.insertAdjacentHTML("beforeend", htmlContenidoFooter);
}

createNavFoot();