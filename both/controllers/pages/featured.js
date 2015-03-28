/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
FeaturedPageController = AppController.extend({
    template: "featuredPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.featuredPage.rendered = function() {
    FeaturedPageController.element = $("#featured-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='featured']").addClass("active");

    // fade in the page
    FeaturedPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
