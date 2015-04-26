window.Widgets = {
    /**
     * Attaches all marked Anigiri widgets.
     *
     * @method attach
     * @param $scope {Object} The element scope from which we will look for widgets.
     */
    attach: function($scope) {
        // go through all elements that have the `aw` prefix which indicates
        // elements intended to be initialized as an Anigiri widget.
        $scope.find("[aw]").each(function() {
            var $el = $(this);
            var widgetType = $el.attr("aw");

            // construct all options provided on this element
            var options = {};
            _.each($el.getAttributes(), function(value, name) {
                if (name.indexOf("aw-opt-") > -1) {
                    var optname = name.replace(/aw-opt-/g,"");
                    optname = _.camelize(optname);
                    options[optname] = value;
                }
            });
            // depending on the type of the widget, we will need to
            // initialize the widget with a different widget definition.
            switch (widgetType) {
            case "single-select":
                $el.awSingleSelect(options);
                break;
            case "multi-select":
                $el.awMultiSelect(options);
                break;
            case "tag-select":
                $el.awTagSelect(options);
                break;
            }
        });
        // go through each element and initialize all anigiri tooltips
        $scope.find("[aw-tooltip]").each(function() {
            var $el = $(this);
            var options = {};
            var content = $el.attr("aw-tooltip");

            // construct all options provided on this element
            options.content = content;
            _.each($el.getAttributes(), function(value, name) {
                if (name.indexOf("aw-tooltip-") > -1) {
                    options[name.replace(/aw-tooltip-/g,"")] = value;
                }
            });
            $el.awTooltip(options);
        });
    },
    /**
     * Detaches all marked Anigiri widgets.
     *
     * @method detach
     * @param $scope {Object} The element scope from which we will look for widgets.
     */
    detach: function($scope) {
        // go through all elements that have the `aw` prefix which indicates
        // elements intended to be denounced as an Anigiri widget.
        $scope.find("[aw]").each(function() {
            var $el = $(this);
            var widgetType = $el.attr("aw");

            // depending on the type of the widget, we will need to
            // destroy the widget in a different way.
            switch (widgetType) {
            case "single-select":
                if ($el.data("chosen")) {
                    $el.awSingleSelect("destroy");
                }
                break;
            case "multi-select":
                if ($el.data("chosen")) {
                    $el.awMultiSelect("destroy");
                }
                break;
            case "tag-select":
                if ($el.hasClass("tagit")) {
                    $el.empty();
                    $el.awTagSelect("destroy");
                }
                break;
            }
        });
        // go through each element and initialize all anigiri tooltips
        $scope.find("[aw-tooltip]").each(function() {
            var $el = $(this);
            $el.awTooltip("destroy");
        });

    }
};
