(function($){
	'use strict';
	/* trigger when page is ready */
	$(document).ready(function (){
		// onload stuff
		console.log('ready!');

		if($('#responsiveTabsDemo').length > 0){
			$('#responsiveTabsDemo').responsiveTabs({
				setHash: true,
				active: 0
			});
		}

		function onDtclick (e) {
			var $dt = $(e.target)
			, $dd = $dt.next('dd');

			$dt.toggleClass('active');
			$dd.toggle();
		}
		function onPrevclick () {
			var $hash = window.location.hash;
			var $activetab = $hash.replace( /^\D+/g, '');

			if($activetab > 1){
				var $newhash = '#tab-' + ($activetab - 1);
				window.location.hash = $newhash;
			}
		}

		function onNextclick () {
			var $hash = window.location.hash;
			var $activetab = parseInt($hash.replace( /^\D+/g, ''), 10);

			if($activetab < 3){
				var $newhash = '#tab-' + ($activetab + 1);
				window.location.hash = $newhash;
			}
		}
		// events below
		$('.faq-dl dt').on('click', $.proxy(onDtclick, this));
		$('.tabs-prev').on('click', $.proxy(onPrevclick, this));
		$('.tabs-next').on('click', $.proxy(onNextclick, this));
	});
})(window.jQuery);
