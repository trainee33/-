//слайдер slick

	$('.brands-slider__body').slick({
		infinite: false,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		appendArrows: $('.brands-slider__arrows'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});