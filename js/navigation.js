const nav_bar = document.getElementById("nav_bar");
const footer_back = document.getElementById("footer_back");

function createNavFoot () {
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
                        <a class="nav-link" aria-current="page" href="/OneClickCar/index.html">INICIO</a>
                        <a class="nav-link" href="/OneClickCar/pages/contact.html">CONTACTO</a>
                        <a class="nav-link" href="/OneClickCar/pages/about.html">NOSOTROS</a>
                        <a class="nav-link" href="/OneClickCar/pages/log_in.html">INICIAR SESIÓN</a>
                        <a class="nav-link" href="/OneClickCar/pages/sign_in.html">REGISTRARSE</a>
                        <a class="nav-link" href="/OneClickCar/pages/user_profile.html">PERFIL</a>
                        <a class="nav-link" href="/OneClickCar/pages/product_list.html">PRODUCTOS</a>
                    </div>
                </div>
            </div>
        </nav>`;
  nav_bar.insertAdjacentHTML("beforeend", htmlContenidoNav);

  let htmlContenidoFooter = `<h2 height="100vh">Copyright &copy OneClickCar</h2>
        <div class="footer-container">
            <div class="contact-info mx-3">
                <h3>Conócenos</h3>
                <a href="https://www.instagram.com/OneClickCar/">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/n4vgpz2ykdqrejz53uxc.png" alt="Instagram">
                    https://www.instagram.com/OneClickCar/
                </a>
                <br>
                <br>
                <a href="https://www.facebook.com/OneClickCar/">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/olqffplsdykzjv3iiavd.png" alt="Facebook">
                    https://www.facebook.com/OneClickCar/
                </a>
                <br>
                <br>
                <a href="https://www.tiktok.com/OneClickCar/">
                    <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/ncrvqyml2zngmeeuyfl7.png" alt="TikTok">
                    https://www.tiktok.com/OneClickCar/
                </a>
            </div>
            <div class="company-info mx-3">
                <h3>Contáctanos</h3>
                <p><img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/rnnaimpxwzllqjhs97zj.png" alt="ubicacion"><b>Dirección:</b> Av. de los Insurgentes Sur s/n, Benito Juárez, CDMX</p>
            
                <p> <img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421052/OneClickCar/x658h5jy83qf2bb1as8y.png" alt=""><b>Teléfono:</b> +52 555 555 55 55</p>
            
                <p><img src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725421051/OneClickCar/cw4nzzwjirjpf8imni4p.png" alt=""><b>Email:</b> contacto@oneclickcar.com</p>
            </div>
            <div class="subscribe-section mx-3 text-center">
                <h3 class="text-center" id="publicidad">Obtén publicidad de nuestros productos</h3>
                <form action="#">
                    <input type="email" placeholder="Tu correo electrónico">
                    <div class="checkbox-container">
                        <input type="checkbox" id="consent" name="consent">
                        <label for="consent">Confirmar para obtener correo</label>
                    </div>
                    <button type="submit">Confirmar</button>
              </form>
            </div>
        </div>
        <img id="OneClickCar" src="https://res.cloudinary.com/dz6zf3yio/image/upload/v1725394895/OneClickCar/logoOneClickCar.png" alt="OneClickCar" width="300px">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <div class="social-media">
            <a href="#" title="Terminos">Términos del Sitio Web</a>
            <a>|</a>
            <a href="#" title="Politica">Politica de Privacidad</a>
            <a>|</a>
            <a href="#" title="Declaración">Declaración de accesibilidad</a>
            <a>|</a>
            <a href="#" title="Conducta">Codigo de Conducta para Proveedores</a>
            <a>|</a>
            <a href="#" title="Info">No Vender Mi Información</a>
        </div>`
footer_back.insertAdjacentHTML("beforeend", htmlContenidoFooter);
};

createNavFoot();
