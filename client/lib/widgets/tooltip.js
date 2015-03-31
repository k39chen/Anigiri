/**
 * This is a wrapper of the qTip2 plugin.
 *
 * @widget awTooltip
 */
(function($) {
    $.fn.awTooltip = function(param, name, value) {
        var $el = $(this);

        // if the parameter provided is an object, then the
        // invoker intends to bind the widget to the element
        // with an extension of the default options.
        if (_.isObject(param) && !_.isArray(param)) {
            var settings = $.extend({
                content: "",
                show: "mouseenter",
                hide: "mouseleave",
                position: {
                    my: "top center",
                    at: "bottom center"
                },
                style: {
                    classes: "aw-tooltip"
                }
            }, param || {}, true);

            function initSettings() {
                if (!_.isUndefined(settings.pos) && _.isString(settings.pos)) {
                    switch (settings.pos) {
                    case "top":
                        settings.position = {my: "bottom center", at: "top center"};
                        break;
                    case "bottom":
                        settings.position = {my: "top center", at: "bottom center"};
                        break;
                    case "left":
                        settings.position = {my: "center right", at: "center left"};
                        break;
                    case "right":
                        settings.position = {my: "center left", at: "center right"};
                        break;
                    default:
                        break;
                    }
                }
            }
            initSettings();
            $el.qtip(settings);
        }
        // if the parameter provided to this widget is
        // of type string, then the invoker is intending
        // to access method.
        if (_.isString(param)) {
            if (!_.isUndefined(name) && !_.isUndefined(value)) {
                $el.qtip(param, name, value);
            } else if (!_.isUndefined(value)) {
                $el.qtip(param, name);
            } else {
                $el.qtip(param);
            }
        }
        // maintain chainability
        return $el;
    };
})(jQuery);
