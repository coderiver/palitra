head.ready(function() {
	$('.bigmap').height($('.shops__map').height());
	$('.shops__tomap').click(function(event) {
		$('.shops__map').fadeOut();
		
		idd = $(this).attr('href');
		$(idd+'').fadeIn();
		//alert(idd);
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
	$('.map__cities a').click(function(event) {
		$('.map__cities a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.map__current').text($(this).data('padej'));
		$('.actualmap').fadeOut();
		idd = $(this).attr('href');
		$(idd+'').fadeIn();
		$(".map__cities").slideToggle("normal");
		return false;

	});

	$("#more-cities").click(function(){
		$(".map__cities").slideToggle("normal"); return false;
	});
	$(".top-navigation__like").click(function(){
		$("#like__panel").slideToggle("normal"); return false;
	});
});