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
            {icon: "fa-user", label: "Dashboard"},
            {icon: "fa-th-large", label: "Gallery"},
            {icon: "fa-star", label: "Featured"},
            {icon: "fa-users", label: "People"},
            {icon: "fa-wrench", label: "Admin"}
        ];
        return items;
    }
});
