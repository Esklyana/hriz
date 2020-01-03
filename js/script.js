$(document).ready(function(){

	$('.block-menu__img').click(function(){
		if('none' == $('.menu-none').css('display')){
			$('.menu-none').css('display', 'flex');
		} else {
			$('.menu-none').css('display', 'none');
		}
	});

	$('.sciens__size').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		  ]
	});

});