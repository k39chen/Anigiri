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
