/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelPage.rendered = function() {
    var $page = $("#control-panel-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='control-panel']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);

    var $schemas = $page.find(".schemas-list");
    var $collections = $page.find(".collections-list");
    var $model = $page.find(".api-model-value");
    var $method = $page.find(".api-method-value");

    // set default values for the dropdowns
    $schemas.val("user");
    $collections.val("user");
    $model.val("Anime");
    $method.val("search");

    // initialize all the chosen plugins
    $schemas.chosen({search_contains:true});
    $collections.chosen({search_contains:true});
    $model.chosen({search_contains:true}).trigger("change");
    $method.chosen({search_contains:true}).trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelPage.events({
    "click .tab": function(ev, template) {
        var $el = $(ev.target);
        Session.set("controlPanelActiveTab", $el.attr("tab-name"));
    },
    "change .api-model-value": function(ev, template) {
        var $el = $(ev.target);
        var $method = $el.siblings(".api-method-value");
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
Template.controlPanelPage.helpers({
    isSchemaTab: function() {
        return Session.get("controlPanelActiveTab") === "schemas";
    },
    isCollectionsTab: function() {
        return Session.get("controlPanelActiveTab") === "collections";
    },
    isAPITab: function() {
        return Session.get("controlPanelActiveTab") === "api";
    },
    schemas: function() {
        return [
            {value: "user", name: "Users"},
            {value: "anime", name: "Animes"},
            {value: "subscriptions", name: "Subscriptions"},
            {value: "episode", name: "Episodes"},
            {value: "song", name: "Songs"},
            {value: "recommendation", name: "Recommendations"}
        ]
    },
    collections: function() {
        return [
            {value: "user", name: "Users"},
            {value: "anime", name: "Animes"},
            {value: "subscriptions", name: "Subscriptions"},
            {value: "episode", name: "Episodes"},
            {value: "song", name: "Songs"},
            {value: "recommendation", name: "Recommendations"}
        ]
    },
    models: function() {
        return API_MODELS;
    },
    methods: function() {
        var $page = $("#control-panel-page");
        var selectedModel = Session.get("controlPanelModel");
        var $select = $page.find(".api-method-value");
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
