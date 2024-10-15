// Get images
let sergioImg = document.getElementById("sergio-img");
let juanImg = document.getElementById("juan-img");
let adrianImg = document.getElementById("adrian-img");
let antonioImg = document.getElementById("antonio-img");
let luisImg = document.getElementById("luis-img");
let libertadImg = document.getElementById("libertad-img");

// Get favorite car divs
let fcSergio = document.getElementById("favorite-car-sergio");
let fcJuan = document.getElementById("favorite-car-juan");
let fcAdrian = document.getElementById("favorite-car-adrian");
let fcAntonio = document.getElementById("favorite-car-antonio");
let fcLuis = document.getElementById("favorite-car-luis");
let fcLibertad = document.getElementById("favorite-car-libertad");

fcLibertad.style.opacity = "0%"

function fadeOutImg(memberImg,url,fc){
    memberImg.style.transition = "opacity 0.3s linear";
    memberImg.style.opacity = "0%";
    fc.style.transition = "opacity 0.3s linear";
    setTimeout(()=> {
        memberImg.src = url;
        memberImg.style.transition = "opacity 0.3s linear";
        memberImg.style.opacity = "100%";
        fc.style.opacity = "100%";
        fc.style.display = "block";
        fc.style.zIndex = 0;
    }, 1 * 300)
}

function fadeInImg(memberImg,url,fc){
    memberImg.style.transition = "opacity 0.3s linear";
    memberImg.style.opacity = "0%";
    fc.style.transition = "opacity 0.3s linear";
    setTimeout(()=> {
        memberImg.src = url;
        memberImg.style.transition = "opacity 0.3s linear";
        memberImg.style.opacity = "100%";
        fc.style.opacity = "0%";
        fc.style.display = "none";
        fc.style.zIndex = 0;
    }, 1 * 300)
}

// Cars photos
sergioImg.onmouseenter = function(){
    fadeOutImg(sergioImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969280/Tyron_VW_-_SRC_1_emavft.jpg",fcSergio)
}

juanImg.onmouseenter = function(){
    fadeOutImg(juanImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969250/Rubicon_JASP_vyler0.jpg",fcJuan)
}

adrianImg.onmouseenter = function(){
    fadeOutImg(adrianImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969593/new-e-class-front_pdjc0c.jpg",fcAdrian)
}

antonioImg.onmouseenter = function(){
    fadeOutImg(antonioImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969889/1366_2000_hk8r7s.jpg",fcAntonio)
}

luisImg.onmouseenter = function(){
    fadeOutImg(luisImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969147/bmw_m4401_GC_LJMA_zdl78c.jpg",fcLuis)
}

libertadImg.onmouseenter = function(){
    fadeOutImg(libertadImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1728969227/mustang_LRC_c2h3tu.jpg",fcLibertad)

}

// Team photos
sergioImg.onmouseleave = function(){
    fadeInImg(sergioImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727330356/Sergio_foto_1_fi_e0iydm.png",fcSergio)
}

juanImg.onmouseleave = function(){
    fadeInImg(juanImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727330380/foto_onceclickcarfi_uygxte.png",fcJuan)
}

adrianImg.onmouseleave = function(){
    fadeInImg(adrianImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727330847/adrianHernandezLfi_popyme.png",fcAdrian)
}

antonioImg.onmouseleave = function(){
    fadeInImg(antonioImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727334818/Antonio_Rosas_xda3gn.png",fcAntonio)
}

luisImg.onmouseleave = function(){
    fadeInImg(luisImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727331567/LuisMelendez_fiv2_pyd8nj.png",fcLuis)
}

libertadImg.onmouseleave = function(){
    fadeInImg(libertadImg,"https://res.cloudinary.com/dz6zf3yio/image/upload/v1727330384/Libertad_Rivas_fi_ewkhe8.png",fcLibertad)
}