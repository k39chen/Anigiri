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
// Sidebar state events
//-------------------------------------------------------------------------
    "mouseover #sidebar": function(ev, template) {
        var $el = $(ev.target);
        AppController.element.attr("data-min-sidebar","false");
    },
    "mouseout #sidebar": function(ev, template) {
        var $el = $(ev.target);
        AppController.element.attr("data-min-sidebar","true");
    },
// Search group event handling
//-------------------------------------------------------------------------
    "focus .search-input": function(ev, template) {
        var $el = $(ev.target);
        var $group = $el.closest(".search-group");

        // place the search group in an active state
        $group.addClass("active");
    },
    "blur .search-input": function(ev, template) {
        var $el = $(ev.target);
        var $group = $el.closest(".search-group");

        // remove the active state from the search input
        $group.removeClass("active");
    },
    "keyup .search-input": function(ev, template) {
        var $el = $(ev.target);
        var value = $el.val();

        // update the search input
        Search.updateInput(value);

        // if the search overlay is not already active, then
        // wrest control over to the search overlay
        if (!Search.isActive) {
            Search.enter($el);
        }
    },
// Sign in events
//-------------------------------------------------------------------------
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
