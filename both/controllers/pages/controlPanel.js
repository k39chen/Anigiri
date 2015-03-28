/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
ControlPanelPageController = AppController.extend({
    template: "controlPanelPage",
    data: {},
    element: null
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelPage.rendered = function() {
    ControlPanelPageController.element = $("#control-panel-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='control-panel']").addClass("active");

    // fade in the page
    ControlPanelPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);

    var $model = ControlPanelPageController.element.find(".request-model-value");
    var $method = ControlPanelPageController.element.find(".request-method-value");

    // set a default request
    $model.val("Anime");
    $method.val("search");

    // initialize all the chosen plugins
    $model.chosen({search_contains:true}).trigger("change");
    $method.chosen({search_contains:true}).trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelPage.events({
    "change .request-model-value": function(ev, template) {
        var $el = $(ev.target);
        var $method = $el.siblings(".request-method-value");
        var val = $el.val();

        Session.set("controlPanelModel", val || null);
        Session.set("controlPanelMethod", null);
    },
    "change .request-method-value": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();
        Session.set("controlPanelMethod", val || null);
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelPage.helpers({
    models: function() {
        return API_MODELS;
    },
    methods: function() {
        var selectedModel = Session.get("controlPanelModel");
        var $select = $("#control-panel-page .request-method-value");
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
        $select.chosen({search_contains:true});

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
        var inputMarkup = "<input class='request-parameter-value' name='"+data.name+"' type='text' placeholder='"+data.name+"' />";
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
}