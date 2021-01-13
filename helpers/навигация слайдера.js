// навигация слайдера

	let counter = $('.product-slider__info .counter');
	let count = $('.product-slider__info .count');
	let slider = $('.product-slick');
	slider.on('init reInit', function(event, slick) {
		counter.text('1') + count.text(' / ' + slick.slideCount);
	});

	// слайдер product

	$('.product-slick').slick({
		infinite: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.product-slider__arrow')
	});

	// навигация слайдера

	let currentSlide = $('.product-slick').slick('slickCurrentSlide') + 1;
	slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
		let i = (currentSlide ? currentSlide : 0) + 1;
		counter.text(i) + count.text(' / ' + slick.slideCount);
	});