(function($){
	'use strict';
	/* trigger when page is ready */
	$(document).ready(function (){
		// onload stuff

        $('#responsiveTabsDemo').responsiveTabs({
			setHash: true
		});

		function onDtclick (e) {
			var $dt = $(e.target)
			, $dd = $dt.next('dd');

			$dt.toggleClass('active');
			$dd.toggle();
		}
		function onPrevclick () {
            var curr = $('#responsiveTabsDemo li.r-tabs-state-active').index();
            if (curr > 0) {
                $('#responsiveTabsDemo').responsiveTabs('activate', --curr);
            }
		}

		function onNextclick () {
            var curr = $('#responsiveTabsDemo li.r-tabs-state-active').index();
            if (curr < 2) {
                $('#responsiveTabsDemo').responsiveTabs('activate', ++curr);
            }
		}

		// events below
		$('.faq-dl dt').on('click', $.proxy(onDtclick, this));
		$('.tabs-prev').on('click', $.proxy(onPrevclick, this));
		$('.tabs-next').on('click', $.proxy(onNextclick, this));
	});
})(window.jQuery);
