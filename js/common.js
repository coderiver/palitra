head.ready(function() {

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
	// $('.map__cities a').click(function(event) {
	// 	$('.map__cities a').removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	$('.map__current').text($(this).data('padej'));
	// 	$('.actualmap').fadeOut();
	// 	idd = $(this).attr('href');
	// 	$(idd+'').fadeIn();
	// 	$(".map__cities").slideToggle("normal");
	// 	return false;
	// });


	$("#more-cities").click(function(){
		$(".map__cities,.shops__cities").slideToggle("normal"); return false;
	});
	$(".top-navigation__like").click(function(){
		$("#like__panel").slideToggle("normal"); return false;
	});

	if($('.fotorama').length){
		var $fotoramaDiv = $('.fotorama').fotorama();

	    // 2. Get the API object.
	    var fotorama = $fotoramaDiv.data('fotorama');

	    // 3. Inspect it in console.
	    console.log(fotorama);
	    $('.fotorama__gonext').click(function(event) {
	    	fotorama.show('>');
	    });
	    $('.fotorama__goprev').click(function(event) {
	    	fotorama.show('<');
	    });
	}

	



});

function winOpen(){
var obj=document.getElementById("divWin").style;
obj.visibility="visible";
winOpen2(3, 0, obj);
 };
 
function winOpen2(s, o, obj){//показываем окно
o+=s;
if(o<10){
obj.opacity=o/10;
obj.filter='alpha(opacity='+o+')';
setTimeout(function(){winOpen2(s, o, obj);}, 55);}
else{//показать полностью
obj.opacity=1;
obj.filter='alpha(opacity=100)';};
 };
 
function winCloset(){
winCloset2(5, 10, document.getElementById("divWin").style);
 };
 
function winCloset2(s, o, obj){//скрываем окно
o-=s;
if(o>0){
obj.opacity=o/1000;
obj.filter='alpha(opacity='+o+')';
setTimeout(function(){winCloset2(s, o, obj);}, 55);}
else{//обнуляем на выходе
obj.opacity=0;
obj.filter='alpha(opacity=0)';
obj.visibility="hidden";};
 };



