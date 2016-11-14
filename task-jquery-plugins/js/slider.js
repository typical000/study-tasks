/**
 * Slider
 */

(function($) {

  'use strict';

  $.slider = function(container, options) {

    // TODO: Make a task :)

  }

  $.fn.slider = function(options) {
    if (options === undefined) {
      options = {}
    }
    if (typeof options === 'object') {
      return this.each(function() {
        new $.slider(this, options);
      });
    }
  }

})(jQuery);