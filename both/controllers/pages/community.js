/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
CommunityPageController = AppController.extend({
    template: "communityPage",
    data: {},
    element: null
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.communityPage.rendered = function() {
    CommunityPageController.element = $("#community-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='community']").addClass("active");

    // fade in the page
    CommunityPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
