/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
SuggestionsPageController = AppController.extend({
    template: "suggestionsPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.suggestionsPage.rendered = function() {
    SuggestionsPageController.element = $("#suggestions-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='suggestions']").addClass("active");

    // fade in the page
    SuggestionsPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
