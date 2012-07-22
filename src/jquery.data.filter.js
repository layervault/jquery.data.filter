(function($) {
  $.fn.dfilter = function(attribute, value) {

    // sanitize
    attribute = attribute.toLowerCase();
    attribute = attribute.replace(/^data-/, "");
    attribute = attribute.replace('_', '-');
    attribute = attribute.replace(' ', '-');

    if (typeof value === "undefined" || value === "") {
      return this.filter('[data-' + attribute + ']');
    }
    else if (typeof value === "boolean") {
      if (value) { // value === true
        return this.filter('[data-' + attribute + ']')
      }
      else { // value === false
        return this.not('[data-' + attribute + ']');
      }
    }
    else if ($.isArray(value)) {

      // In the case that we have an array, we want to build a big multiple selector string:
      // If we feed in something like:
      //
      //   [100, 101]
      //
      // Then we build the following selector:
      //
      //   [data-id="100"],[data-id="101"]
      //
      // For more reading on the multiple selector, see
      //
      //   http://api.jquery.com/multiple-selector/
      return this.filter(
        '[data-' + attribute + '="' + value.join('"],[data-' + attribute + '="') + '"]'
      );
    }

    return this.filter('[data-' + attribute + '="' + value + '"]');
  };
})(jQuery);
