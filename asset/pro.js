//show nav bar
let menuIcon = document.getElementsByClassName("menu-icon")[0];
    menuIcon.addEventListener("click", function(){
      let navWrapper = document.querySelector("#nav-wrapper");
      navWrapper.classList.add("show")
})



//hide nav bar

let closingTag  = document.getElementsByClassName("cl")[0];
    closingTag.addEventListener("click", function(){
      let navWrapper = document.querySelector("#nav-wrapper");
      navWrapper.classList.remove("show")
    })


let images = document.querySelectorAll(".img-shc");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    document.getElementById("image-box-wrapper").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
    document.querySelector("#image-box img").src = images[i].src;
})
  };

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("image-box-wrapper").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  })