
    // Getting elements 
const checkbox = document.getElementById("ipt-consent-checkbox");
const subscribeBtn = document.getElementById("subscribeBtn");
const iptEmail = document.getElementById("ipt-email");
const emailError = document.getElementById("email-error")

// Email validation
const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

// Disable styles and states are applied
emailError.style.display = "none"
subscribeBtn.disabled = true;
subscribeBtn.style.opacity = '50%';

// Initialize emailJs service
emailjs.init("9XWPUGj3d1O00oX7k");

// Enable or disable subscribe button by checkbox
checkbox.onclick = function(){
    if(checkbox.checked){
        enableSubscribeBtn();
        subscribeBtn.classList.add("animate__animated","animate__tada");
    }else{
        disableSubscribeBtn();;
        subscribeBtn.classList.remove("animate__animated","animate__tada");
    }
} // checkbox.onclick

// Subscribing to OneClickCar newsletter
subscribeBtn.onclick = function(event){
    
    iptEmail.style.border = 'none'
    event.preventDefault();
    let email = iptEmail.value;
    let validEmail = emailRegex.test(email);
    if(validEmail){
        // Code for subscribe user 
        emailjs.send("OneClickCar_contacto","template_ilf8f1t",{
            clientEmail: email,
            });
        
        // Show success message
        Swal.fire({
            title: "Suscripción completada",
            text: "Te notificaremos de las mejores ofertas y novedades de OneClickCar",
            imageUrl: "https://res.cloudinary.com/dz6zf3yio/image/upload/v1727650800/occmegaphonev2F_x1pwor.png",
            imageWidth: 350,
            imageHeight: 200,
            imageAlt: "Custom image",
            icon: "success"
        });

        // Reset fields
        iptEmail.value = "";
        checkbox.checked = false;
        emailError.style.display = "none";
        subscribeBtn.classList.remove("animate__animated","animate__tada")
        disableSubscribeBtn();
    }else{
        emailError.style.display = "block";
        animeteElement("#email-error","shakeX")
        iptEmail.style.border = 'solid red 4px';
    }

    } // subscribeBtn.onlick

    function disableSubscribeBtn(){
        subscribeBtn.disabled = true;
        subscribeBtn.style.opacity = '50%';
    } // disableSubscribeBtn

    function enableSubscribeBtn(){
        subscribeBtn.disabled = false;
        subscribeBtn.style.opacity = '100%';
    }// enableSubscribeBtn

    function animeteElement(selector,animation){
        
        new Promise((resolve,reject)=> {
            const prefix = "animate__";
        
            const animationName = `${prefix}${animation}`;
            const element = document.querySelector(selector);
            element.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd(event){
                event.stopPropagation();
                element.classList.remove(`${prefix}animated`, animationName);
                resolve("animation ended")
            }

            element.addEventListener("animationend",handleAnimationEnd,{once : true})
        })
    } // animeteElement


