head.ready(function() {

	$('body').addClass('a');
	$( ".maingl" ).on( "click", ".maingl__slitem", function() {
		
		
		pic = $(this).attr('href');
		$('.maingl__bigimg').html('<img src="'+pic+'">');
		return false;
	});
});