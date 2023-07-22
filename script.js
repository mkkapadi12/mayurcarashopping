hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

var Mainimg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function () {
  Mainimg.src = "img/products/f1.jpg";
};

smallimg[1].onclick = function () {
  Mainimg.src = "img/products/f2.jpg";
};

smallimg[2].onclick = function () {
  Mainimg.src = "img/products/f3.jpg";
};

smallimg[3].onclick = function () {
  Mainimg.src = "img/products/f4.jpg";
};
