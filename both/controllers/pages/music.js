/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
MusicPageController = AppController.extend({
    template: "musicPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.musicPage.rendered = function() {
    MusicPageController.element = $("#music-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='music']").addClass("active");
};
}
