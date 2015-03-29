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
                    {key: "profile", icon: "fa-user", label: "Profile", href: "/profile"},
                    {key: "gallery", icon: "fa-th-large", label: "Gallery", href: "/gallery"},
                    {key: "friends", icon: "fa-users", label: "Friends", href: "/friends"},
                    {key: "recommendations", icon: "fa-pie-chart", label: "Recommendations", href: "/recommendations"}
                ]
            });
        }
        // construct our Discover navigation group
        groups.push({
            title: "Discover",
            list: [
                {key: "featured", icon: "fa-star", label: "Featured", href: "/featured"},
                {key: "trending", icon: "fa-line-chart", label: "Trending", href: "/trending"},
                {key: "community", icon: "fa-globe", label: "Community", href: "/community"},
                {key: "music", icon: "fa-music", label: "Music", href: "/music"}
            ]
        });
        // construct our Admin navigation group
        if (Anigiri.Users.isLoggedIn()) {
            // only show the Admin navigation group if there is a user that is
            // currently logged in.
            groups.push({
                title: "Admin",
                list: [
                    {key: "settings", icon: "fa-cog", label: "Settings", href: "/settings"}
                ].concat(
                    // only show the control panel if the currently logged-in user is an
                    // administrator.
                    Anigiri.Users.isAdmin() ? [{key: "control-panel", icon: "fa-wrench", label: "Control Panel", href: "/controlPanel"}] : []
                )
            });
        }
        return groups;
    }
});