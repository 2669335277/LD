/*
 *author:Null
 *DATE:2013.5.24
 */

(function($) {
	$.fn.capacityFixed = function(options) {
		var opts = $.extend({}, $.fn.capacityFixed.deflunt, options);
		var FixedFun = function(element) {
			var top = opts.top;
			element.css({
				"top": 40
			});
			$(window).scroll(function() {
				var scrolls = $(this).scrollTop();
				if (scrolls > top) {

					if (window.XMLHttpRequest) {
						element.css({
							position: "fixed",
							top: 0
						});
					} else {
						element.css({
							top: scrolls
						});
					}
				} else {
					element.css({
						position: "absolute",
						top: 40
					});
				}
			});
		};
		return $(this).each(function() {
			FixedFun($(this));
		});
	};
	$.fn.capacityFixed.deflunt = {
		right: 0, //ç›¸å¯¹äºŽé¡µé¢å®½åº¦çš„å³è¾¹å®šä½
		top: 40
	};
})(jQuery);
