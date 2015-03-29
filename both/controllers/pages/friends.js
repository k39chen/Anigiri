/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
FriendsPageController = AppController.extend({
    template: "friendsPage",
    data: {}
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.friendsPage.rendered = function() {
    var $page = $("#friends-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='friends']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
