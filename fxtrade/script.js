
// header menu

const bar= document.getElementById("bar");
const nav= document.getElementById("nav");

bar.onclick = (e) =>{
    const icon = e.target.getAttribute("class")

    if(icon == "fa fa-bars"){
        e.target.setAttribute("class", "fa fa-close")
    }else{
        e.target.setAttribute("class", "fa fa-bars")
    }

    nav.classList.toggle("showNav")
}

// carousel//

const carouselContainer = document.querySelector(".carouselContainer");
const eachCarouselWidth = document.querySelector(".eachCarousel").clientWidth
const allEachCarousel = document.querySelectorAll(".eachCarousel")
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
  for(let x = 0; x<allEachCarousel.length; x++){
    if(x===index){
        allIndicator[x].classList.add("activeIndicator")
        allEachCarousel[x].classList.add("eachCarouselBorder")
    }else{
        allEachCarousel[x].classList.remove("eachCarouselBorder")
        allIndicator[x].classList.remove("activeIndicator")
    }
  }
  carouselContainer.scrollLeft = (index * (eachCarouselWidth + 10))
}


// REGISTRATION FORM//

const container=document.querySelector(".formContainer");
const LoginLink=document.querySelector(".signInLink");
const RegisterLink=document.querySelector(".signUpLink");

RegisterLink.addEventListener('click', ()=>{
    container.classList.add('active')
})