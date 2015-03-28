/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
ProfilePageController = AppController.extend({
    template: "profilePage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.profilePage.rendered = function() {
    ProfilePageController.element = $("#profile-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='profile']").addClass("active");

    // fade in the page
    ProfilePageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
