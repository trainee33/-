//======= табы

	$('.tabs-block').not(':first').hide();
	$('.tabs-item')
		.click(function() {
			$('.tabs-item').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
			$('.tabs-block').hide().eq($(this).index()).fadeIn();
		})
		.eq(0)
		.addClass('tab-active');