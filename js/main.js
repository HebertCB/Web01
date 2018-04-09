// var nav = document.getElementById('main-nav');
// var menu = document.getElementById('menu');
// menu.addEventListener('click', function () {
//   'use strict';
//   nav.classList.toggle('mostrar');
// });
$('.btn-menu').on('click', function(event){
	$(this).toggleClass('open');
	$('nav:first').slideToggle(400);
});