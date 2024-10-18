// Get elements
const sellBtn = document.getElementById("sell-btn-btn");

// Check if sesssion storage has information
let sellBtnRef = "./pages/log_in.html";
if(sessionStorage.length != 0){
    let idUser = sessionStorage.getItem("idUser");
    // Set path to react to sell btn 
    if(idUser != null){
        // User is logged in so go to sell page
        sellBtnRef = "./pages/product_registration.html";
    }else{
        // User is not logged in so go to log in page
        sellBtnRef = "./pages/log_in.html";
    }
}

// add event listener to go to sellBtn reference
sellBtn.addEventListener("click", event =>{
    event.preventDefault();
    window.location.href = sellBtnRef;
})


