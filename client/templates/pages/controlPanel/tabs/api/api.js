/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelAPITab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-api");
    var $module = $tab.find("select.api-module-value");
    var $method = $tab.find("select.api-method-value");

    // select the initial module setting provided by the default configuration
    var activeModule = Session.get("controlPanelAPIModule");
    if (!_.isUndefined(activeModule)) {
        $module.attr("aw-opt-value", activeModule);
    }
    // select the initial method setting provided by the default configuration
    var activeMethod = Session.get("controlPanelAPIMethod");
    if (!_.isUndefined(activeMethod)) {
        $method.attr("aw-opt-value", activeMethod);
    }
    // attach the widgets on this tab
    Widgets.attach($tab);
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelAPITab.events({
    "change select.api-module-value": function(ev, template) {
        var $el = $(ev.target);
        var $methods = Page.ControlPanel.element.find("#tab-api select.api-method-value");
        var val = $el.val();

        // go through each methods option and unselect any previously selected values
        $methods.find("option").prop("selected",false);

        // update the chosen widget
        $el.trigger("chosen:updated");

        // update our reactive variables indicating the selected
        // module/method pair.
        Session.set("controlPanelAPIModule", val);
        Session.set("controlPanelAPIMethod", null);
    },
    "change select.api-method-value": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();

        // update the chosen widget
        $el.trigger("chosen:updated");

        // update our reactive variables indicating the selected
        // module/method pair.
        Session.set("controlPanelAPIMethod", val);
    },
    "focus .parameters .value": function(ev, template) {
        var $el = $(ev.target);
        var $help = $el.siblings(".help").first();

        $help.awTooltip("show");
    },
    "blur .parameters .value": function(ev, template) {
        var $el = $(ev.target);
        var $help = $el.siblings(".help").first();

        $help.awTooltip("hide");
    },
    "focus .parameters [aw='tag-select'] input": function(ev, template) {
        var $el = $(ev.target);
        var $help = $el.closest(".value").siblings(".help").first();

        $help.awTooltip("show");
    },
    "blur .parameters [aw='tag-select'] input": function(ev, template) {
        var $el = $(ev.target);
        var $help = $el.closest(".value").siblings(".help").first();

        $help.awTooltip("hide");
    },
    "click .api-submit-button": function(ev, template) {
        var $el = $(ev.target);
        var $form = $("#api-request-form");
        var $responsePanel = $(".response .content");
        var $response = $responsePanel.find("pre");

        ev.preventDefault();
        ev.stopPropagation();

        // serialize the form and turn it into an object that we can further manipulate
        var serializedResult = $form.serialize();
        var deparamedResult = $.deparam(serializedResult);

        // disambiguate the deparamed results
        var module = deparamedResult._module;
        var method = deparamedResult._method;
        var parameters = _.omit(deparamedResult, "_module", "_method") || {};

        // don't allow the user to continue if no module or method is specified.
        if (_.isEmpty(module) || _.isEmpty(method)) return;

        // get the corresponding API reference
        var api = API_MODULES[module].methods[method];

        // show a loading spinner in the response panel
        $response.empty();
        $responsePanel.loadingSpinner("open");

        // perform the API call
        var requestUrl = [module,method].join(".");
        Meteor.call(requestUrl, parameters, function(error, data) {
            var json;
            $responsePanel.loadingSpinner("close");

            if (!_.isEmpty(error)) {
                // on error
                console.log("error", error);
                json = error;
            } else {
                // on success
                console.log("success", data);
                json = data;
            }
            var node = new PrettyJSON.view.Node({
                el: $response,
                data: json
            });
        });
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelAPITab.helpers({
    modules: function() {
        return _.toArray(API_MODULES);
    },
    moduleDescription: function() {
        var activeModule = Session.get("controlPanelAPIModule");
        var module = API_MODULES[activeModule] || {};
        
        Meteor.defer(function() {
            var $modules = Page.ControlPanel.element.find("#tab-api select.api-module-value");
            var $help = $modules.siblings(".help").first();
            $help.awTooltip({
                content: $help.attr("tip") || "No module selected.",
                position: {my: "left center", at: "right center"}
            });
        });
        return module.description;
    },
    methods: function() {
        var activeModule = Session.get("controlPanelAPIModule");
        var module = API_MODULES[activeModule];
        var methods = module && module.methods;

        // methods have been re-rendered, update the chosen widget accordingly.
        Meteor.defer(function() {
            var $methods = Page.ControlPanel.element.find("#tab-api select.api-method-value");

            // notify the widget that it needs to update, plus extra book-keeping
            $methods.trigger("change");
        });
        return _.toArray(methods);
    },
    methodDescription: function() {
        var activeModule = Session.get("controlPanelAPIModule");
        var activeMethod = Session.get("controlPanelAPIMethod");
        var module = API_MODULES[activeModule];
        var method = (module && module.methods && module.methods[activeMethod]) || {};
        
        Meteor.defer(function() {
            var $modules = Page.ControlPanel.element.find("#tab-api select.api-method-value");
            var $help = $modules.siblings(".help").first();
            $help.awTooltip({
                content: $help.attr("tip") || "No method selected.",
                position: {my: "left center", at: "right center"}
            });
        });
        return method.description;
    },
    parameters: function() {
        var activeModule = Session.get("controlPanelAPIModule");
        var activeMethod = Session.get("controlPanelAPIMethod");
        var module = API_MODULES[activeModule];
        var method = module && module.methods && module.methods[activeMethod];
        var parameters = (method && method.parameters) || [];
        return parameters;
    },
    parameter: function(data) {
        var $container = $("<div/>");
        var $el;
        switch (data.type) {
        case "Array":
            $el = $("<ul />").appendTo($container)
                .addClass("value")
                .attr("aw","tag-select")
                .attr("aw-opt-width", "20.0em")
                .attr("aw-opt-field-name",data.name)
                .attr("name", data.name+"[]");
            break;
        case "String":
            $el = $("<input />").appendTo($container)
                .addClass("value api-parameter-value")
                .attr("type", "text")
                .attr("name", data.name)
                .attr("placeholder", data.name);
            break;
        case "Number":
            $el = $("<input />").appendTo($container)
                .addClass("value api-parameter-value")
                .attr("type", "number")
                .attr("name", data.name)
                .attr("placeholder", data.name);
            break;
        default:
            break;
        }
        // initialize any widgets in the parameters.
        Meteor.defer(function() {
            var $scope = Page.ControlPanel.element.find("#tab-api .parameters");
            Widgets.detach($scope);
            Widgets.attach($scope);
        });
        return $container.html();
    },
    parameterDescription: function(data) {
        Meteor.defer(function() {
            var $modules = Page.ControlPanel.element.find("#tab-api .value[name='"+data.name+"']");
            var $help = $modules.siblings(".help").first();
            $help.awTooltip({
                content: $help.attr("tip") || "Invalid parameter??",
                position: {my: "left center", at: "right center"}
            });
        });
        return "<b>Type:</b> "+data.type+
            "<div class='separator'></div>"+
            data.description+
            (data.optional ? ("<div class='soft-separator'></div><b>Optional</b>") : "");
    }
});
