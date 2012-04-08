(function($) {
  $.fn.dfilter = function(attribute, value) {
    attribute = attribute.replace(/^data-/, "");

    if (typeof value === "undefined" || value === "") {
      return this.filter('[data-' + attribute + ']');
    }

    return this.filter('[data-' + attribute + '="' + value + '"]');
  };
})(jQuery);
