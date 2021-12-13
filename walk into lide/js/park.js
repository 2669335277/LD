var MyModal = (function() {
	function modal(fn) {
		this.fn = fn; //ç‚¹å‡»ç¡®å®šåŽçš„å›žè°ƒå‡½æ•°
		this._addClickListen();
	}
	modal.prototype = {
		show: function() {
			$('.m-modal').fadeIn(100);
		},
		_addClickListen: function() {
			var that = this;
			$(".m-modal").find('*').on("click", function(event) {
				event.stopPropagation(); //é˜»æ­¢äº‹ä»¶å†’æ³¡
			});
			$(".m-modal,.m-modal-close,.m-btn-cancel").on("click", function(event) {
				that.hide();
			});
		},
		hide: function() {
			var $modal = $('.m-modal');
			$modal.fadeOut(500);
		}

	};
	return {
		modal: modal
	}
})();
var m1 = new MyModal.modal
$('.btn1').on("click", function() {
	$(this).next().show();
});
