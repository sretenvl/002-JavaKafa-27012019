$(document).ready(function(){
	$(".logoPoziv").click(function() {
		$("#forma").css({'opacity' : 1, 'display' : 'block'});
	});
	$("#iskljucivanje").click(function(){
		$("#forma").css({'opacity': 0, 'display' : 'none'});
	});
	$("#vracanjePocetak").hover(
	function(){
		$("#vracanjePocetak").css("opacity",0.9);
	},
	function(){
		$("#vracanjePocetak").css("opacity",1);
	});
	$("#vracanjePocetak").click(function(){
		$(window).scrollTop(0);
	});
});
