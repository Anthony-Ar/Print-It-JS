const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

// Gestion des points
const dots = document.querySelector(".dots");

for(let i = 0; i < slides.length; i++) { 
	i === 0 ? dots.innerHTML += '<div class="dot dot_selected"></div>' : dots.innerHTML += '<div class="dot"></div>'
}

// Gestion des flèches
document.querySelector(".arrow_left").onclick = function() {
	currentSlide === 0 ? currentSlide = slides.length-1 : currentSlide--
	updateSlider(currentSlide)
}

document.querySelector(".arrow_right").onclick = function() {
	currentSlide === slides.length-1 ? currentSlide = 0 : currentSlide++
	updateSlider(currentSlide)
}

// Dynamisation du carrousel
function updateSlider(slide) {
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[slide].image
	document.querySelector("#banner p").innerHTML = slides[slide].tagLine

	document.querySelector(".dot_selected").classList.remove("dot_selected")
	document.querySelectorAll(".dot")[slide].classList.add("dot_selected")
}