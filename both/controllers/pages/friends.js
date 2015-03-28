/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
FriendsPageController = AppController.extend({
    template: "friendsPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.friendsPage.rendered = function() {
    FriendsPageController.element = $("#friends-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='friends']").addClass("active");

    // fade in the page
    FriendsPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
