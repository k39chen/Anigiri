/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
HomeController = AppController.extend({
    template: "homePage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.homePage.rendered = function() {
    HomeController.element = $("#home-page");
};
}
