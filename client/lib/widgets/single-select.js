/**
 * This is a wrapper of the chosen plugin.
 *
 * @widget awSingleSelect
 */
(function($) {
    $.fn.awSingleSelect = function(param, name, value) {
        var $el = $(this);

        // if the parameter provided is an object, then the
        // invoker intends to bind the widget to the element
        // with an extension of the default options.
        if (_.isObject(param) && !_.isArray(param)) {
            var settings = $.extend({
                width: "200px",
                inherit_select_classes: true,
                search_contains: true,
                value: null
            }, param || {});

            function initSettings() {
                // if the user specified that they want to have an initial
                // selected value, then make it so.
                if (!_.isNull(settings.value)) {
                    $el.find("option").prop("selected",false).removeAttr("selected");
                    $el.find("option[value='"+settings.value+"']").prop("selected",true);
                }    
            }
            initSettings();
            $el.chosen(settings);
        }
        // if the parameter provided to this widget is
        // of type string, then the invoker is intending
        // to access method.
        if (_.isString(param)) {
            // ...
        }
        // maintain chainability
        return $el;
    };
})(jQuery);
