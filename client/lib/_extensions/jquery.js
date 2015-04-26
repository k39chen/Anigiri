(function($) {
    $.fn.getAttributes = function() {
        var attributes = {};

        if (this.length) {
            $.each(this[0].attributes, function(index,attr) {
                attributes[attr.name] = attr.value;
            });
        }
        return attributes;
    };
    $.fn.loadingSpinner = function(operation) {
        if (operation === "open") {
            $(this).prepend("<div class='loading-spinner'><i class='fa fa-spin fa-spinner'></i></div>");
        }
        if (operation === "close") {
            $(this).find("> .loading-spinner").remove();
        }
    };
})(jQuery);
