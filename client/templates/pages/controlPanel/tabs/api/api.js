/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelAPITab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-api");
    var $model = $tab.find("select.api-model-value");
    var $method = $tab.find("select.api-method-value");

    // attach the widgets on this tab
    Widgets.attach($tab);

    // set default values for the dropdowns
    $model.val("Anime").trigger("change");
    $method.val("search").trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelAPITab.events({
    "change select.api-model-value": function(ev, template) {
        var $el = $(ev.target);
        var $method = $el.siblings("select.api-method-value");
        var val = $el.val();

        $el.trigger("chosen:updated");
        Session.set("controlPanelAPIModel", val || null);
        Session.set("controlPanelAPIMethod", null);
    },
    "change select.api-method-value": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();

        $el.trigger("chosen:updated");
        Session.set("controlPanelAPIMethod", val || null);
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelAPITab.helpers({
    models: function() {
        return API_MODELS;
    },
    methods: function() {
        var selectedModel = Session.get("controlPanelAPIModel");
        var $select = Page.ControlPanel.element.find("select.api-method-value");
        var markup = "<option value=''>-</option>";
        var methods = [];

        if (!_.isEmpty(selectedModel)) {
            var model = _.findWhere(API_MODELS, {name: selectedModel});

            if (!_.isUndefined(model)) {
                methods = model.methods;
            }
        }
        // construct the dropdown markup
        _.each(methods, function(method, index) {
            markup += ("<option value='"+method.name+"' "+(index === 0 ? "default" : "")+">"+method.name+"</option>");
        });
        // add the markup to the dropdown element
        if ($select.length > 0) {
            $select.html(markup);
            $select.trigger("change");
        }
        return markup;
    },
    parameters: function() {
        var selectedModel = Session.get("controlPanelAPIModel");
        var selectedMethod = Session.get("controlPanelAPIMethod");
        var parameters = [];

        if (!_.isEmpty(selectedModel) && !_.isEmpty(selectedMethod)) {
            var model = _.findWhere(API_MODELS, {name: selectedModel});

            if (!_.isUndefined(model)) {
                var methods = _.findWhere(model.methods, {name: selectedMethod});

                if (!_.isUndefined(methods)) {
                    parameters = methods.parameters;
                }
            }
        }
        return parameters;
    },
    parameter: function(data) {
        var $container = $("<div/>");
        var $el;
        switch (data.type) {
        case "Array":
            // TODO: kchen - Apply a tagit widget
            return "";
        case "Number":
            $el = $("<input />").appendTo($container)
                .addClass("api-parameter-value")
                .attr("aw", "text-field")
                .attr("type", "number")
                .attr("name", data.name)
                .attr("placeholder", data.name);
            return $container.html();
        case "String":
            $el = $("<input />").appendTo($container)
                .addClass("api-parameter-value")
                .attr("aw", "text-field")
                .attr("type", "text")
                .attr("name", data.name)
                .attr("placeholder", data.name);
            return "\"" + $container.html() + "\"";
        default:
            break;
        }
    }
});
