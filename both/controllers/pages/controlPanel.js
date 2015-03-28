/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
ControlPanelPageController = AppController.extend({
    template: "controlPanelPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.controlPanelPage.rendered = function() {
    ControlPanelPageController.element = $("#control-panel-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='control-panel']").addClass("active");

    // fade in the page
    ControlPanelPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
