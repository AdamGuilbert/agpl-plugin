(function(window) {

    var AGPL = window.AGPL || {};

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
		}
    }

    if (typeof(window.AGPL) === 'undefined'){
    	window.AGPL = AGPL;
  	}

})(window);
