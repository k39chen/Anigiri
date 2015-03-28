/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
ControlPanelPageController = AppController.extend({
    template: "controlPanelPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.controlPanelPage.rendered = function() {
    ControlPanelPageController.element = $("#control-panel-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='control-panel']").addClass("active");
};
}
