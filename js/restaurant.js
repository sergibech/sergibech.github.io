$('.radiogroup').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir");
	añadir.textContent =$this.attr("titol");
});
$('.radiogroup2').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients2");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir2");
	añadir.textContent =$this.attr("titol");
});
$('.radiogroup3').change(function(e) {
	const $this = $(this);
	var ingredients = document.getElementById("desc-ingredients3");
	ingredients.textContent = $this.attr("ingredients");
	var añadir = document.getElementById("añadir3");
	añadir.textContent =$this.attr("titol");
});