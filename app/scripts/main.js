(function($){
	'use strict';
	/* trigger when page is ready */
	$(document).ready(function (){
		// onload stuff
		console.log('ready!');

		function onMobileMenuclick (e) {
			e.preventDefault();
			var $mainnav = $('.main-nav')
			, $usernav = $('.user-nav');

			$mainnav.toggle();
			$usernav.toggle();
		}

		// events below
		$('.mobile-menu').on('click', $.proxy(onMobileMenuclick, this));
	});

	/* optional triggers
	$(window).load(function() {
		
	});
	$(window).resize(function() {
		
	});
	*/

})(window.jQuery);