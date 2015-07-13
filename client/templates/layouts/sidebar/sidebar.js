/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.sidebar.rendered = function() {
    // ...
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.sidebar.events({
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
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.sidebar.helpers({
    navigationGroup: function() {
        var groups = [];

        // construct our Main navigation group
        if (Anigiri.Users.isLoggedIn()) {
            // only show the Main navigation group if there is a user that is
            // currently logged in.
            groups.push({
                title: "Main",
                list: [
                    {key: "explore", icon: "fa-globe", label: "Explore", href: "/explore"},
                    {key: "gallery", icon: "fa-th-large", label: "Gallery", href: "/gallery"},
                    {key: "social", icon: "fa-users", label: "Social", href: "/social"}
                ]
            });
        }
        // construct our Admin navigation group
        if (Anigiri.Users.isLoggedIn()) {
            // only show the Admin navigation group if there is a user that is
            // currently logged in.
            groups.push({
                title: "Admin",
                // only show the control panel if the currently logged-in user is an
                // administrator.
                list: Anigiri.Users.isAdmin() 
                    ? [{key: "control-panel", icon: "fa-wrench", label: "Control Panel", href: "/controlPanel"}] 
                    : []
            });
        }
        return groups;
    }
});
