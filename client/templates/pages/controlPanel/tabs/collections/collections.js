/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelCollectionsTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $collections = $page.find(".collections-list");

    // set default values for the dropdowns
    $collections.val("user");

    // initialize all the chosen plugins
    $collections.chosen({search_contains:true});
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelPage.events({
    // ...
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelPage.helpers({
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
