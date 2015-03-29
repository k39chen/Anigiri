/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.featuredPage.rendered = function() {
    Page.Featured = new PageClass("featured");
};
