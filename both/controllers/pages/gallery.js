/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
GalleryPageController = AppController.extend({
    template: "galleryPage",
    data: {},
    element: null
});
if (Meteor.isClient) {
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.galleryPage.rendered = function() {
    GalleryPageController.element = $("#gallery-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='gallery']").addClass("active");

    // fade in the page
    GalleryPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
