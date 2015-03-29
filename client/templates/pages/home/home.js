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
