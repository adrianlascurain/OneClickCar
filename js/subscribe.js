// Getting elements 
const checkbox = document.getElementById("ipt-consent-checkbox");
const subscribeBtn = document.getElementById("subscribeBtn")

// Disable styles and states are applied
subscribeBtn.disabled = true;
subscribeBtn.style.opacity = '50%';

// Enable or disable subscribe button by checkbox
checkbox.onclick = function(){
    if(checkbox.checked){
        subscribeBtn.disabled = false;
        subscribeBtn.style.opacity = '100%';
    }else{
        subscribeBtn.disabled = true;
        subscribeBtn.style.opacity = '50%';
    }
} // checkbox.onclick

// Subscribing to OneClickCar newsletter
subscribeBtn.onclick = function(event){
    
    event.preventDefault();
    console.log("Hola esto es una prueba");

} // subscribeBtn.onlick