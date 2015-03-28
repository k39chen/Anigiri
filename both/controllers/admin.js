/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
AdminController = AppController.extend({
    template: "adminPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.adminPage.rendered = function() {
    AdminController.element = $("#admin-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='admin']").addClass("active");
};
}
