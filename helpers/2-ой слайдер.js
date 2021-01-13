//слайдер productOne

	$('.images-product__mainslider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		asNavFor: '.images-product__subslider'
	});

	$('.images-product__subslider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		asNavFor: '.images-product__mainslider',
		focusOnSelect: true
	});