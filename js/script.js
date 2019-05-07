//menu modal
function abrir() {
  document.getElementById("menu").style.height = "100%";
}

function cerrar() {
  document.getElementById("menu").style.height = "0%";
}
//fin menu modal

//galeria
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}
