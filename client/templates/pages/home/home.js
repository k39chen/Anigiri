/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.homePage.rendered = function() {
    Page.Home = new PageClass("home");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.homePage.events({
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
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.homePage.helpers({
    // ...
});
