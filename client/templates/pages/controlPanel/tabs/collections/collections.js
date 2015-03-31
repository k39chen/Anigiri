/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelCollectionsTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-collections");
    var $collections = $tab.find("select.collections-list");

    // attach the widgets on this tab
    Widgets.attach($tab);

    // set default values for the dropdowns
    $collections.val("user").trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelCollectionsTab.events({
    "change select.collections-list": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();

        $el.trigger("chosen:updated");
        Session.set("controlPanelCollectionsValue", val || null);
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelCollectionsTab.helpers({
    collections: function() {
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
