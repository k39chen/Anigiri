/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.friendsPage.rendered = function() {
    var $page = $("#friends-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='friends']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
