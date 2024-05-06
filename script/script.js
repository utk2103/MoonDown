const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// console.log(image)


function page4Animation(){
    var fixed = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-container")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}
// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url($(image))`
// })


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
swiperAnimation()
page4Animation()

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("#nav img")
var flag = 0
menubar.addEventListener("click",function(){
        if(flag ==0){
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }else{
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    
})