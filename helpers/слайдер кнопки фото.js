//слайдер page

if (document.querySelectorAll('.page-slider')) {
	$('.page-slider').slick({
		infinite: false,
		arrows: false,
		slidesToShow: 1,
		dots: true,
		appendDots: $('.mainslider__dotts'),
		slidesToScroll: 1
	});
	let mainsliderImages = document.querySelectorAll('.mainslider__img');
	let mainsliderDotts = document.querySelectorAll('.slick-dots li');

	for (let index = 0; index < mainsliderImages.length; index++) {
		const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
		mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
}