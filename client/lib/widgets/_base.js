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
                    options[name.replace(/aw-opt-/g,"")] = value;
                }
            });
            // depending on the type of the widget, we will need to
            // initialize the widget with a different widget definition.
            switch (widgetType) {
            case "tooltip":
                // TODO: kchen - Do this.
                break;
            case "button":
                // TODO: kchen - Do this.
                break;
            case "text-field":
                // TODO: kchen - Do this.
                break;
            case "single-select":
                $el.awSingleSelect(options);
                break;
            case "multi-select":
                $el.awMultiSelect(options);
                break;
            case "tag-select":
                $el.awTagSelect(options);
                break;
            case "popup":
                // TODO: kchen - Do this.
                break;
            case "dialog":
                // TODO: kchen - Do this.
                break;
            }
        });
    }
};
