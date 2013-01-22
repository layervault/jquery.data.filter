(function($) {
  $.fn.dfilter = function(attribute, value) {
    var
      // Stores a reference to the elements that have been matched by the jQuery selector.
      elems = this,

      // Asks jQuery for the type of the inputted value.
      valType = $.type(value);

    // Cleans up the attribute to match the format of a data attribute.
    attribute = attribute.toLowerCase()
                         .replace(/^data-/, '')
                         .replace('/[_|\s]/g', '-');

    if (valType === 'undefined' || (valType === 'boolean' && value))
      // If the value is undefined, empty, or a truthy boolean.
      return elems.filter('[data-' + attribute + ']');

    if (valType === 'boolean' && !value)
      // If the value is a falsy boolean.
      return elems.not('[data-' + attribute + ']');

    if (valType === 'array')
      // If the value is an array, we build a multiple selector string:
      //
      //   .dfilter('coord', [100, 101]) => [data-coord="100"],[data-coord="101"]
      //
      // For more on the multiple selector: http://api.jquery.com/multiple-selector/
      return elems.filter('[data-' + attribute + '="' + value.join('"],[data-' + attribute + '="') + '"]');

    if (valType === 'object') {
      var
        // If the value is an object literal, see if we can match on the actual parameter.
        objectLength = 0,

        // We'll count how many elements match the object literal.
        matchedLength = 0;

      return elems.filter(function(i, el){
        objectLength = 0;
        matchedLength = 0;

        for (var prop in value) {
          if (!value.hasOwnProperty(prop))
            return false;

          objectLength++;

          var data = $(el).data(attribute);

          if ($.type(data) === 'object' && data[prop] == value[prop])
            matchedLength++;
        }

        return matchedLength == objectLength;
      });
    }

    // Filters elements based on the number or string value.
    if (valType === 'string' || valType === 'number')
      return elems.filter('[data-' + attribute + '="' + value + '"]');
  };
})(jQuery);