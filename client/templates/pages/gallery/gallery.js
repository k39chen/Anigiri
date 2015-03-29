/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.galleryPage.rendered = function() {
    var $page = $("#gallery-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='gallery']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
