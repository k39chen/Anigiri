/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
HomePageController = AppController.extend({
    template: "homePage",
    data: {},
    element: null
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.homePage.rendered = function() {
    HomePageController.element = $("#home-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='home']").addClass("active");

    // fade in the page
    HomePageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
