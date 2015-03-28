/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
GalleryPageController = AppController.extend({
    template: "galleryPage",
    data: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.galleryPage.rendered = function() {
    GalleryPageController.element = $("#gallery-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='gallery']").addClass("active");
};
}
