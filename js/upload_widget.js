const cloudName = "duqki6x6t"; // replace with your own cloud name
const uploadPreset = "OneClickCarPrueba"; // replace with your own upload preset

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
      localStorage.setItem("image_url", result.info.url);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
