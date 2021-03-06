/*Barra navegacio superior*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*Fi Barra navegacio superior*/

/* Barres preu minim i maxim*/
$(document).ready(function() {

  const $valueSpan = $('#preu-min-span');
  const $value = $('#preu-min');
  $valueSpan.html($value.val()+ " \u20ac");
  $value.on('input change', () => {

    $valueSpan.html($value.val()+ " \u20ac");
  });
});

$(document).ready(function() {

  const $valueSpan = $('#preu-max-span');
  const $value = $('#preu-max');
  $valueSpan.html($value.val()+ " \u20ac");
  $value.on('input change', () => {

    $valueSpan.html($value.val()+ " \u20ac");
  });
});
/* Fi Barres preu minim i maxim*/


/* Barres valoracio minima i maxima*/
$(document).ready(function() {

  const $valueSpan = $('#val-min-span');
  const $value = $('#val-min');
  $valueSpan.html($value.val()/2 + " \u2605");
  $value.on('input change', () => {

    $valueSpan.html($value.val()/2 + " \u2605");
  });
});

$(document).ready(function() {

  const $valueSpan = $('#val-max-span');
  const $value = $('#val-max');
  $valueSpan.html($value.val()/2 + " \u2605");
  $value.on('input change', () => {

    $valueSpan.html($value.val()/2 + " \u2605");
  });
});
/* Fi Barres valoracio minima i maxima*/


/* Carousel*/


$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
/*Fi Carousel*/


/* Pagina Restaurant */
$('.radiogroup').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant");
	quantitat.textContent = $this.attr("quantitat");
});
$('.radiogroup2').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients2");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir2");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant2");
	quantitat.textContent = $this.attr("quantitat");
});
$('.radiogroup3').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients3");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir3");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant3");
	quantitat.textContent = $this.attr("quantitat");
});
/* Radiogroup 4 es la amanida que no cal canviar text*/

$('.radiogroup5').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients5");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir5");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant5");
	quantitat.textContent = $this.attr("quantitat");
});

$('.radiogroup6').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients6");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir6");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant6");
	quantitat.textContent = $this.attr("quantitat");
});
$('.radiogroup7').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients7");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir7");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant7");
	quantitat.textContent = $this.attr("quantitat");
});
$('.radiogroup8').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients8");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir8");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant8");
	quantitat.textContent = $this.attr("quantitat");
});

/* Radiogroup 9 es son els calamars que no cal canviar text*/

$('.radiogroup10').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients10");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir10");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant10");
	quantitat.textContent = $this.attr("quantitat");
});

/* Radiogroup 11  es les fruites del dias que no cal canviar text*/

$('.radiogroup12').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients12");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir12");
	añadir.textContent =$this.attr("titol");
	var quantitat = document.getElementById("quant12");
	quantitat.textContent = $this.attr("quantitat");
});