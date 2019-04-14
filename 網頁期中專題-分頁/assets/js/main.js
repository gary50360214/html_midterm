(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Items.
		$('.item').each(function() {

			var $this = $(this),
				$header = $this.find('header'),
				$a = $header.find('a'),
				$img = $header.find('img');

			// Set background.
				$a.css('background-image', 'url(' + $img.attr('src') + ')');

			// Remove original image.
				$img.remove();

		});

		// Scrolly.
			$('.scrolly').scrolly();

		// course.
			$('.course').each(function() {

				var	$course = $(this),
					$content = $course.find('.content');

				// Tabs.
					$course.each( function() {

						var $this = $(this),
							$tabs = $this.find('.tabs a'),
							$media = $this.find('.media');

						$tabs.on('click', function(e) {

							var $this = $(this),
								tag = $this.data('tag');

							// Prevent default.
							 	e.preventDefault();

							// Remove active class from all tabs.
								$tabs.removeClass('active');

							// Reapply active class to current tab.
								$this.addClass('active');

							// Hide media that do not have the same class as the clicked tab.
								$media
									.fadeOut('fast')
									.each(function() {

										var $this = $(this);

										if ($this.hasClass(tag))
											$this
												.fadeOut('fast')
												.delay(200)
												.queue(function(next) {
													$this.fadeIn();
													next();
												});

									});

						});

					});


			});


			$("#submit").on("click", function(){
			
				alert("我們已收到你的訊息");
			});

	});

})(jQuery);