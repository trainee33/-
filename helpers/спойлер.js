// спойлер ==========================================	

	$('.spoler').on('click', function(e) {
		$(this).find('span').toggleClass('active');
		$(this).next().slideToggle(400);
	});

	$('.filter__title').on('click', function(e) {
		//$(this).find('span').toggleClass('active');
		$(this).next().slideToggle(600);
	});