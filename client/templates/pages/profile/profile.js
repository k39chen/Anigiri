/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.profilePage.rendered = function() {
    var $page = $("#profile-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='profile']").addClass("active");

    // fade in the page
    $page.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
