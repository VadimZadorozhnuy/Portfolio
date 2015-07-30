$(document).ready(function(){

	$(".top_content h1, .top_content h3, .section_header").animated("fadeInDown", "fadeOutUp");
	$(".top_content h3").animated("fadeInUp", "fadeOutDown");
	$(".popup, .descr_image, .tab_img").magnificPopup({type:"image"});
	$(".animation_left").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_right").animated("fadeInRight", "fadeOutRight");
	$(".animation_flip").animated("flipInX", "flipOutX");

	$(function(){
		$('#mixin').mixItUp();
	});

	function autoHeight(){ //Автокорректировка размера топ-фона
		$(".main_head").css("height", $(window).height());
	};
	autoHeight();
	$(window).resize(function(){
		autoHeight();
	});

	$(".toggle_mnu").on("click", function() { //Анимация верхнего меню
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").on("click", function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").on("click", function() {
		if($(".top_mnu").is(":visible")){
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$("input, select, textarea").jqBootstrapValidation();

	$('.top_mnu ul a').on("click", function(){
		$('html, body').animate({scrollTop:$($(this).context.hash).position().top}, 1500);
	});

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(500).fadeOut("slow");
});
