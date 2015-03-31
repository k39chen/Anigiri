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
                $el.chosen({
                    width: "200px",
                    inherit_select_classes: true,
                    search_contains: true
                })
                break;
            case "multi-select":
                // TODO: kchen - Do this.
                break;
            case "tag-select":
                // TODO: kchen - Do this.
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
