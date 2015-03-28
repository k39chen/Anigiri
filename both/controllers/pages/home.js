/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
HomePageController = AppController.extend({
    template: "homePage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.homePage.rendered = function() {
    HomePageController.element = $("#home-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='home']").addClass("active");

    // fade in the page
    HomePageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
