$(document).ready(function(){
$('.gallery-item').hover(function(){
	
	$(this).css('opacity', '0.3')},

	function(){
	$(this).css('opacity', '1')

	});

$('nav li').hover(function(){
	
	$(this).css('opacity', '1')},

	function(){
	$(this).css('opacity', '0.7')

	});
});