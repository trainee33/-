$(document).ready(function() {
	$('.toggle-mnu').on('click', function() {
		$('.main-mnu').slideToggle(300, function() {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.main-mnu ul li a').on('click', function(event) {
		event.preventDefault();

		var selector = $(this).attr('href');

		var h = $(selector);

		$('html, body').animate(
			{
				scrollTop: h.offset().top
			},
			700
		);
	});

	$('.toggle-mnu-footer').on('click', function() {
		$('.main-mnu-footer').slideToggle(300, function() {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('#carousel-eq').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		navText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$('#tabs').owlCarousel({
		loop: true,
		dots: true,
		items: 1,
		smartSpeed: 800
	});

	$('.mfp-gallery').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() {
							$.magnificPopup.proto.next.call(self);
						}, 120);
					};
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() {
							$.magnificPopup.proto.prev.call(self);
						}, 120);
					};
				},
				imageLoadComplete: function() {
					var self = this;
					setTimeout(function() {
						self.wrap.addClass('mfp-image-loaded');
					}, 16);
				}
			}
		});
	});

	$('.mfp-portfolio').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() {
							$.magnificPopup.proto.next.call(self);
						}, 120);
					};
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() {
							$.magnificPopup.proto.prev.call(self);
						}, 120);
					};
				},
				imageLoadComplete: function() {
					var self = this;
					setTimeout(function() {
						self.wrap.addClass('mfp-image-loaded');
					}, 16);
				}
			}
		});
	});

	$('.carousel-item').each(function(e) {
		var th = $(this);

		th.attr('href', '#carousel-img-' + e).find('.carousel-popup').attr('id', 'carousel-img-' + e);
	});

	$(".carousel-item, a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});

	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data('form');
		var dataText = $(this).data('text');
		$('.form-callback h4').text(dataText);
		$('.form-callback [name=admin-data]').val(dataForm);
	});

	$('body').append("<div class='top'><i class='fa fa-angle-double-up'>");

	$('body').on('click', '.top', function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});

	/*$(function() {
		$('ul.const__caption').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active')
				.siblings()
				.removeClass('active')
				.closest('div.construction')
				.find('.const__content')
				.removeClass('active')
				.eq($(this).index())
				.addClass('active');
		});
	});*/

	jQuery.validator.addMethod(
		'laxName',
		function(value, element) {
			return this.optional(element) || /^[а-яёА-ЯЁ\s]+$/.test(value);
		},
		'Введите реальное имя'
	);

	jQuery.validator.addMethod(
		'laxPhone',
		function(value, element) {
			return this.optional(element) || /^(\+|[0-9]|\s){5,18}$/.test(value);
		},
		'Введите реальный номер'
	);

	$('#callback').validate({
		rules: {
			name: {
				required: true,
				minlength: 3,
				laxName: true
			},
			phone: {
				required: true,
				laxPhone: true
			}
		},
		messages: {
			name: {
				required: 'Заполните поле',
				minlength: 'Введите реальное имя'
			},
			phone: {
				required: 'Заполните поле'
			}
		} /*,

		submitHandler: function(form) {
			var str = $('#callback').serialize();

			$.ajax({
				type: 'POST',
				url: 'http://filatov33.beget.tech/mail.php',
				data: str
			}).done(function() {
				$('.success').addClass('active');
				$(this).find('input').val('');
				$('#form').trigger('reset');
			});
		}*/
	});

	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 3,
				laxName: true
			},
			phone: {
				required: true,
				laxPhone: true
			}
		},
		messages: {
			name: {
				required: 'Заполните поле',
				minlength: 'Введите реальное имя'
			},
			phone: {
				required: 'Заполните поле'
			}
		} /*,

		submitHandler: function(form) {
			var str = $('#form').serialize();

			$.ajax({
				type: 'POST',
				url: 'http://filatov33.beget.tech/mail.php',
				data: str
			}).done(function() {
				$('.success').addClass('active');
				$(this).find('input').val('');
				$('#form').trigger('reset');
			});
		}*/
	});
});
