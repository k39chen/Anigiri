/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
TrendingPageController = AppController.extend({
    template: "trendingPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.trendingPage.rendered = function() {
    TrendingPageController.element = $("#trending-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='trending']").addClass("active");
};
}
