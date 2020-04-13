/* Barres preu minim i maxim*/
$(document).ready(function() {

  const $valueSpan = $('#minSpan');
  const $value = $('#slider-min');
  $valueSpan.html($value.val()+ " \u20ac");
  $value.on('input change', () => {

    $valueSpan.html($value.val()+ " \u20ac");
  });
});

$(document).ready(function() {

  const $valueSpan = $('#maxSpan');
  const $value = $('#slider-max');
  $valueSpan.html($value.val()+ " \u20ac");
  $value.on('input change', () => {

    $valueSpan.html($value.val()+ " \u20ac");
  });
});
/* Fi Barres preu minim i maxim*/


/* Barres preu minim i maxim*/
$('#recipeCarousel').carousel({
  interval: 10000
})

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
/*Fi Barres preu minim i maxim*/