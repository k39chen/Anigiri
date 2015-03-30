/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelSchemasTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $schemas = $page.find(".schemas-list");

    // set default values for the dropdowns
    $schemas.val("user");

    // initialize all the chosen plugins
    $schemas.chosen({
        width: "200px",
        inherit_select_classes: true,
        search_contains: true
    });
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelSchemasTab.events({
    // ...
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
