/**
 * This is a wrapper of the tag-it plugin.
 *
 * @widget awTagSelect
 */
(function($) {
    $.fn.awTagSelect = function(param, name, value) {
        var $el = $(this);
        var settings = $.extend({
            width: "300px",
            placeholderText: "",
            allowSpaces: true,
            availableTags: []
        }, param || {});

        // if the parameter provided is an object, then the
        // invoker intends to bind the widget to the element
        // with an extension of the default options.
        if (_.isObject(param) && !_.isArray(param)) {
            function initSettings() {
                $el.css({width: settings.width});
            }
            initSettings();
            $el.tagit(settings);
        }
        // if the parameter provided to this widget is
        // of type string, then the invoker is intending
        // to access method.
        if (_.isString(param)) {
            if (!_.isUndefined(name) && !_.isUndefined(value)) {
                $el.tagit(param, name, value);
            } else if (!_.isUndefined(value)) {
                $el.tagit(param, name);
            } else {
                $el.tagit(param);
            }
        }
        // maintain chainability
        return $el;
    };
})(jQuery);
