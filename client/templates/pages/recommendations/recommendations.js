window.Page.Recommendations = new window.PageClass("recommendations",
    /* @Options */
    {},
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.recommendationsPage.rendered = function() {
    Page.Recommendations.init();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
 Template.recommendationsPage.events({
    // ...
 });
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.recommendationsPage.helpers({
    // ...
});
