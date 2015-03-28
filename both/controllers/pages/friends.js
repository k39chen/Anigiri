/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
FriendsPageController = AppController.extend({
    template: "friendsPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.friendsPage.rendered = function() {
    FriendsPageController.element = $("#friends-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='friends']").addClass("active");
};
}
