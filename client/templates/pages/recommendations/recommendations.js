/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.recommendationsPage.rendered = function() {
    var $page = $("#recommendations-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='recommendations']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
