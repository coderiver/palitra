head.ready(function() {

$('#more-citiesup').click(function(event) {
	$(".shops__cities").slideToggle("normal"); return false;
});

function checklogos(){
	if($(window).width()>1390){
		$('.map__logoswrap').cycle('pause');
	}
	else{
		$('.map__logoswrap').cycle('play');
	}
}

$(window).resize(function(event) {
	checklogos();
});

setTimeout(function(){
	checklogos();
}, 300);

});