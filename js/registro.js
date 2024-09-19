document.addEventListener("DOMContentLoaded", function() {
    
    let formRegistro = document.querySelector("form");

    if (formRegistro) {
        formRegistro.addEventListener("submit", function(event) {
            event.preventDefault();  
            
            // Datos del formulario
            let name = document.getElementById("modelo").value;
            let transmission = document.getElementById("transmision").value;
            let seller = document.getElementById("propietario").value;
            let owners = document.getElementById("num_prop").value;
            let contact = document.getElementById("contacto").value;
            let price = document.getElementById("precio").value;
            let description = document.getElementById("descripcion").value;
            let img = document.getElementById("imagenes");
            
            if (img.files.length > 0) {
                let reader = new FileReader();

                reader.onload = function(event) {
                    // Convertir la imagen a base64
                    let imgBase64 = event.target.result;

                    // Objeto con los datos del vehículo
                    let vehiculo = {
                        name: name,
                        transmission: transmission,
                        seller: seller,
                        owners: owners,
                        contact: contact,
                        price: price,
                        description: description,
                        img: imgBase64 // Guardar la imagen en base64
                    };

                    // Obtención de los datos en el localStorage
                    let dataCars = obtenerVehiculos();

                    // Se agrega el nuevo vehículo al arreglo
                    dataCars.push(vehiculo);

                    // Almacenar en localStorage
                    localStorage.setItem("dataCars", JSON.stringify(dataCars));

                    // Mensaje de éxito
                    alert("El vehículo se ha registrado con éxito");

                    // Limpiar los campos del formulario
                    formRegistro.reset();
                };

                // Leer la imagen como DataURL (base64)
                reader.readAsDataURL(img.files[0]);

            } else {
                alert("Por favor, selecciona una imagen.");
            }
        });
    } else {
        console.error("No se encontró el formulario en el DOM.");
    }
});

// Función para obtener los vehículos almacenados 
function obtenerVehiculos() {
    let dataCars = localStorage.getItem("dataCars");
    return dataCars ? JSON.parse(dataCars) : [];
}
