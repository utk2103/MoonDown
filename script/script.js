const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// console.log(image)


var fixed = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-container")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})


var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter",function(){
    var image = elem1.getAttribute("data-image")
    fixed.style.backgroundImage = `url($(image))`
})