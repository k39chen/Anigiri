AppController = RouteController.extend({
    layoutTemplate: "app",
    element: null
});
AppController.events({
    "click #sign-in": function(ev, template) {
        var $el = $(ev.target);
        var $loginButton = $("#login-buttons .login-button");

        $loginButton.trigger("click");
    }
});
