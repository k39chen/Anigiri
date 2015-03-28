/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
MusicPageController = AppController.extend({
    template: "musicPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.musicPage.rendered = function() {
    MusicPageController.element = $("#music-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='music']").addClass("active");

    // fade in the page
    MusicPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
