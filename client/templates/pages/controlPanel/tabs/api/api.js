/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelAPITab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $model = $page.find("select.api-model-value");
    var $method = $page.find("select.api-method-value");

    // set default values for the dropdowns
    $model.val("Anime");
    $method.val("search");

    // initialize all the chosen plugins
    $model.chosen({
        inherit_select_classes: true,
        search_contains: true
    }).trigger("change");

    $method.chosen({
        inherit_select_classes: true,
        search_contains: true
    }).trigger("change");


    $(".api-submit-button").qtip({content:{text:"Model"}});
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelAPITab.events({
    "change .api-model-value": function(ev, template) {
        var $el = $(ev.target);
        var $method = $el.siblings("select.api-method-value");
        var val = $el.val();

        Session.set("controlPanelModel", val || null);
        Session.set("controlPanelMethod", null);
    },
    "change .api-method-value": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();
        Session.set("controlPanelMethod", val || null);
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
        var selectedModel = Session.get("controlPanelModel");
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
        }
        // destroy the previous chosen dropdown (if it existed)
        if ($select.data("chosen")) {
            $select.chosen("destroy");
        }
        // bind the chosen dropdown
        $select.chosen({
            inherit_select_classes: true,
            search_contains: true
        });
        return markup;
    },
    parameters: function() {
        var selectedModel = Session.get("controlPanelModel");
        var selectedMethod = Session.get("controlPanelMethod");
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
        var inputMarkup = "<input class='api-parameter-value' name='"+data.name+"' type='text' placeholder='"+data.name+"' />";
        switch (data.type) {
        case "String":
            inputMarkup = "\""+inputMarkup+"\"";
            break;
        case "Number":
            /* falls through */
        default:
            break;
        }
        return inputMarkup;
    }
});
