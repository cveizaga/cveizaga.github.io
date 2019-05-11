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

//sonido
var freak_m = document.getElementById("sonido");
function reproducir(){
  freak_m.play();
}
function pausar(){
  freak_m.pause();
}


//cargar tabla de precios

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Menu</th><th>Descripcion</th><th>Precio por persona</th></tr>";
  var x = xmlDoc.getElementsByTagName("menu");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getAttribute("id_menu")+
    "</td><td>" +
    x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
   "</td><td>" +
    x[i].getAttribute("precio") +
    "</td></tr>";
  }
  document.getElementById("menu_se").innerHTML = table;
}
