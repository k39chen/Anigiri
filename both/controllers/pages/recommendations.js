/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
RecommendationsPageController = AppController.extend({
    template: "recommendationsPage",
    data: {},
    element: null
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.recommendationsPage.rendered = function() {
    RecommendationsPageController.element = $("#recommendations-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='recommendations']").addClass("active");

    // fade in the page
    RecommendationsPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
