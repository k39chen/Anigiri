window.Page.Featured = new window.PageClass("featured",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.featuredPage.rendered = function() {
    Page.Featured.init();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
 Template.featuredPage.events({
    // ...
 });
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.featuredPage.helpers({
    // ...
});
