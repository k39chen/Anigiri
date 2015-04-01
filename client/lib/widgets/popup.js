/**
 * This is a wrapper of the qTip 2 plugin.
 *
 * @widget awPopup
 */
(function($) {
    $.fn.awPopup = function(param, name, value) {
        var $el = $(this);

        // if the parameter provided is an object, then the
        // invoker intends to bind the widget to the element
        // with an extension of the default options.
        if (_.isObject(param) && !_.isArray(param)) {
            var settings = $.extend({
                width: 300,
                title: null,
                text: null,
                template: null,
                content: {
                    title: {
                        text: "[Sample title]",
                        button: "close"
                    },
                    text: "[Sample text]"
                },
                show: {
                    event: "click",
                    ready: true,
                    solo: true
                },
                // Don't hide on any event except close button
                hide: false,
                templateData: {},
                position: {
                    viewport: $("body"),
                    my: "top center",
                    at: "bottom center"
                },
                style: {
                    classes: "aw-popup"
                }
            }, param || {}, true);

            function initSettings() {
                if (!_.isNull(settings.title)) {
                    settings.content.title.text = settings.title;
                }
                if (!_.isNull(settings.template)) {
                    settings.content.text = "<div class='template-container'></div>";
                    if (!settings.events) settings.events = {};
                    settings.events.render = function(event,api) {
                        var $templateContainer = $(api.tooltip).find(".template-container");
                        Blaze.renderWithData(Template[settings.template], settings.templateData, $templateContainer.get(0));
                    };
                } else if (!_.isNull(settings.text)) {
                    settings.content.text = settings.text;
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
