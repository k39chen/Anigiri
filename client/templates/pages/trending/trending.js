/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.trendingPage.rendered = function() {
    var $page = $("#trending-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='trending']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
