var AGPL = window.AGPL || {};

(function Module() {

    /* <--- custom selector ---> */
    const $ = function(selector) {
        if (selector[0] != '#' && document.querySelectorAll(selector).length > 1) {
            return document.querySelectorAll(selector);
        }
        else {
            return document.querySelector(selector);
        }
    };

	AGPL.utils = {
		shrinkCNC: function() {
			$('.AGPL-cnc-box').classList.toggle('shrink');
            $('.blocks .content').classList.toggle('shrink');
            console.log('test')
		}
	}

})(window);
