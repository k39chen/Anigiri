/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
CommunityPageController = AppController.extend({
    template: "communityPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.communityPage.rendered = function() {
    CommunityPageController.element = $("#community-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='community']").addClass("active");
};
}
