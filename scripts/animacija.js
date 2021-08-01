$(window).scroll(function() {
	var levo = $('#tekstLevo'),
		desno = $('#tekstDesno'),
	    levoOffset = levo.offset().top - 800,
	    desnoOffset = desno.offset().top - 800,
	    documentEl = $(document);

	documentEl.on('scroll', function() {
	    if(documentEl.scrollTop() > levoOffset){
	    	levo.animate({opacity: 1}, 1000);
	    } 
	    if(documentEl.scrollTop() > desnoOffset){
	    	desno.animate({opacity: 1, width: '100%'}, 1000);
	    } 
	    
	});
});