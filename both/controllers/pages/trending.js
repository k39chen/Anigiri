/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
TrendingPageController = AppController.extend({
    template: "trendingPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.trendingPage.rendered = function() {
    TrendingPageController.element = $("#trending-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='trending']").addClass("active");

    // fade in the page
    TrendingPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
