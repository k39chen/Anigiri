/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
MusicPageController = AppController.extend({
    template: "musicPage",
    data: {}
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.musicPage.rendered = function() {
    var $page = $("#music-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='music']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
