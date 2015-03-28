/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
AppController = RouteController.extend({
    layoutTemplate: "app",
    waitOn: function() {
        // always load the current user data
        this.subscribe("userData");
    },
    onAfterAction: function() {
        // invalidate all navigation options
        $("#navigation .nav-item").removeClass("active");
    }
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.app.rendered = function() {
    AppController.element = $("#Anigiri");

    // we will have the sidebar open when the application is initially rendered
    AppController.element.addClass("sidebar-mode");
};
}
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
AppController.events({
    "click .sign-in": function(ev, template) {
        var $el = $(ev.target);
        var $loginButton = $("#login-buttons .login-button");

        $loginButton.trigger("click");

        var interval = setInterval(function() {
            if (Anigiri.Users.isLoggedIn()) {
                Router.go("/profile");
                clearInterval(interval);
            }
        }, 500);
    },
    "click .sign-out": function(){
        Meteor.logout();
        Router.go("/");
    }
});
