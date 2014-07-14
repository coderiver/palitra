head.ready(function() {
	$('.shops__tomap').click(function(event) {
		$('.shops__map').hide();
		$('.bigmap').height($('.shops__map').height());
		idd = $(this).attr('href');
		$(idd+'').show();
		$('html, body').animate({
	        scrollTop: $(".bigmap").offset().top
	    }, 500);
	});
	$('body').addClass('a');
	$( ".maingl" ).on( "click", ".maingl__slitem", function() {
		
		
		pic = $(this).attr('href');
		$('.maingl__bigimg').html('<img src="'+pic+'">');
		return false;
	});

	$('.footer__button-up').click(function(event) {
		 $("html, body").animate({ scrollTop: 0 }, 1000);
  			return false;
	});
});