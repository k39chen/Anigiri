/**
 * This is a wrapper of the qtip 2 widget.
 *
 * @widget awDialog
 */
(function($) {
    $.fn.awDialog = function(param, name, value) {
        var $el = $(this);

        // if the parameter provided is an object, then the
        // invoker intends to bind the widget to the element
        // with an extension of the default options.
        if (_.isObject(param) && !_.isArray(param)) {
            var settings = $.extend({
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
                    ready: false,
                    solo: true,
                    modal: true
                },
                // Don't hide on any event except close button
                hide: false,
                templateData: {},
                position: {
                    target: $(window),
                    my: "center",
                    at: "center"
                },
                style: {
                    classes: "aw-dialog",
                    width: (param && param.width) || 300
                },
                buttons: {}
            }, param || {}, true);

            function initSettings() {
                if (!_.isNull(settings.title)) {
                    settings.content.title.text = settings.title;
                }
                if (!_.isNull(settings.template)) {
                    settings.content.text = "<div class='content-container'></div>";
                } else if (!_.isNull(settings.text)) {
                    settings.content.text = "<div class='content-container'>"+settings.text+"</div>";
                }
                if (_.size(settings.buttons) > 0) {
                    var $buttons = $("<div>");
                    var $pane = $("<div class='button-pane'>").appendTo($buttons);

                    // add each button
                    var index = 0;
                    _.each(settings.buttons, function(button, buttonLabel) {
                        var $button = $("<button data-index='"+index+"'>").text(buttonLabel);
                        if (button.classes) {
                            $button.addClass(button.classes);
                        }
                        $pane.append($button);
                        index++;
                    });
                    settings.content.text += $buttons.html();
                }
                // perform post-render behaviour
                if (!settings.events) settings.events = {};
                settings.events.render = $.proxy(function(settings,event,api) {
                    if (!_.isNull(settings.template)) {
                        var $templateContainer = $(api.tooltip).find(".content-container");
                        Blaze.renderWithData(Template[settings.template], settings.templateData, $templateContainer.get(0));
                    }
                    // attach the button pane buttons
                    if (settings.buttons) {
                        var $pane = $(api.tooltip).find(".button-pane");
                        var index = 0;
                        _.each(settings.buttons, function(button, buttonLabel) {
                            $pane.find("button[data-index='"+index+"']").click($.proxy(function(button, ev) {
                                button.click($(api.tooltip), ev);
                            }, this, button));
                            index++;
                        });
                    }
                }, this, settings);
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
