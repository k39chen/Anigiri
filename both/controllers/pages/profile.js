/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
ProfilePageController = AppController.extend({
    template: "profilePage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.profilePage.rendered = function() {
    ProfilePageController.element = $("#profile-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='profile']").addClass("active");
};
}
