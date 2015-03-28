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
    
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.sidebar.helpers({
    navigation: function() {
        var items = [
            {key: "home", icon: "fa-home", label: "Home", href: "/"},
            {key: "gallery", icon: "fa-th-large", label: "Gallery", href: "/gallery"},
            {key: "featured", icon: "fa-star", label: "Featured", href: "/featured"},
            {key: "people", icon: "fa-users", label: "People", href: "/people"},
            {key: "admin", icon: "fa-wrench", label: "Admin", href: "/admin"}
        ];
        return items;
    }
});
