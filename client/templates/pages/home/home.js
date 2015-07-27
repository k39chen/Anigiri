window.Page.Home = new window.PageClass("home",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.homePage.rendered = function() {
    Page.Home.init();
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
                Router.go("/");
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
