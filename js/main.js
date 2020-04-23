/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
