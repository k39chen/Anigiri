/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.trendingPage.rendered = function() {
    Page.Trending = new PageClass("trending");
};
