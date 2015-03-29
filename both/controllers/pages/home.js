/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
HomePageController = AppController.extend({
    template: "homePage",
    data: {}
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.homePage.rendered = function() {
    var $page = $("#home-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='home']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
