/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
AppController = RouteController.extend({
    layoutTemplate: "app",
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.app.rendered = function() {
    AppController.element = $("body");
};
}
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
AppController.events({
    "click #sign-in": function(ev, template) {
        var $el = $(ev.target);
        var $loginButton = $("#login-buttons .login-button");

        $loginButton.trigger("click");
    }
});
