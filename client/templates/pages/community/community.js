window.Page.Community = new window.PageClass("community",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.communityPage.rendered = function() {
    Page.Community.init();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
 Template.communityPage.events({
    // ...
 });
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.communityPage.helpers({
    // ...
});
