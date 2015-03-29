/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.communityPage.rendered = function() {
    var $page = $("#community-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='community']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
