/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelSchemasTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-schemas");
    var $schemas = $tab.find("select.schemas-list");

    // attach the widgets on this tab
    Widgets.attach($tab);

    // set default values for the dropdowns
    $schemas.val("user").trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelSchemasTab.events({
    "change select.schemas-list": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();

        $el.trigger("chosen:updated");
        Session.set("controlPanelSchemasValue", val || null);
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelSchemasTab.helpers({
    schemas: function() {
        return [
            {value: "user", name: "Users"},
            {value: "anime", name: "Animes"},
            {value: "subscriptions", name: "Subscriptions"},
            {value: "episode", name: "Episodes"},
            {value: "song", name: "Songs"},
            {value: "recommendation", name: "Recommendations"}
        ]
    }
});
