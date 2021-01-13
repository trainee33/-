//menu-burger ============================

	/*let menuPageBurger = document.querySelector('.menu-page__burger');
	let menuPageBody = document.querySelector('.menu-page__body');

	menuPageBurger.addEventListener('click', function(e) {
		menuPageBurger.classList.toggle('active');
		menuPageBody.classList.toggle('active');
   });*/

	$('.menu-page__burger').on('click', function() {
		$(this).toggleClass('active');
		$('.menu-page__body').slideToggle('active');
	});

	$('.search-page__title').on('click', function() {
		$(this).toggleClass('active');
		$('.categories-search').slideToggle('active');
	});

	$('.categories-search__checkbox').on('change', function(e) {
		$(e.target).parent().toggleClass('active');

		let checkboxActive = $('label.active').length;
		if (checkboxActive > 0) {
			$('.search-page__title').addClass('categories');
			let searchQuantity = $('.search-page__quantity');
			searchQuantity.html(searchQuantity.attr('data-text') + ' ' + checkboxActive);
		} else {
			$('.search-page__title').removeClass('categories');
		}
	});