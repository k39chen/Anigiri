/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
FeaturedPageController = AppController.extend({
    template: "featuredPage",
    data: {}
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.featuredPage.rendered = function() {
    var $page = $("#featured-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='featured']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
