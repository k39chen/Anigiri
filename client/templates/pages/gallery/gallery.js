window.Page.Gallery = new window.PageClass("gallery",
    /* @Options */
    {
        $cropper: null
    },
    /* @Methods */
    {}
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.galleryPage.rendered = function() {
    Page.Gallery.init();

    // bind the cropper widget
    Page.Gallery.$cropper = Page.Gallery.element.find(".cropper");
    Page.Gallery.$cropper.cropper();
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.galleryPage.events({
    "click .crop-btn": function(ev, template) {
        var $el = $(ev.target);

        // open the cropper
        Page.Gallery.$cropper.cropper("open");
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.galleryPage.helpers({
    // ...
});
