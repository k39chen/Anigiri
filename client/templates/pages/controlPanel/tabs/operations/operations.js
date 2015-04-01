/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelOperationsTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-operations");

    // attach the widgets on this tab
    Widgets.attach($tab);
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelOperationsTab.events({
    // ...
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelOperationsTab.helpers({
    // ...
});
