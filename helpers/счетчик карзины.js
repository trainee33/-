// счетчик карзины

	let quantity = $('.quantity__input input');
	let min = $('.quantity__button_minus');
	let max = $('.quantity__button_plus');

	min.click(function() {
		if (quantity.val() == 0) {
			$(quantity).attr('value', 0);
		} else {
			$(quantity).attr('value', parseInt($(quantity).val()) - 1);
		}
	});
	max.click(function() {
		$(quantity).attr('value', parseInt($(quantity).val()) + 1);
	});