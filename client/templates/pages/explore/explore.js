window.Page.Explore = new window.PageClass("explore",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.explorePage.rendered = function() {
    Page.Explore.init();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.explorePage.events({
    // ...
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.explorePage.helpers({
    // ...
});
