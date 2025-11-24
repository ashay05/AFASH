function navmobile() {
  var menu = document.querySelector(".menu");
var cross = document.querySelector(".close");
var navbar = document.querySelector(".navbar");
var tl = gsap.timeline();

tl.to(".navbar", {
  right: 0,
  duration: 0.15,
});
tl.from(".navbar li", {
  left: 200,
  duration: 0.12,
  opacity: 0,
  stagger: 0.12,
});
tl.pause();
menu.addEventListener("click", function () {
  tl.play();
});
cross.addEventListener("click", function () {
  tl.reverse();
});

var cart = document.getElementsByClassName("cart");
}
if(window.innerWidth < 821) {
  navmobile();
  cart.style.display = "none";
}
else{
  navbar.style.display = "block";
}
