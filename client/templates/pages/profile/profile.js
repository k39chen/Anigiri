window.Page.Profile = new window.PageClass("profile",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.profilePage.rendered = function() {
    Page.Profile.init();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
 Template.profilePage.events({
    // ...
 });
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.profilePage.helpers({
    // ...
});
