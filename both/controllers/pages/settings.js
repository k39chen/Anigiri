/*========================================================================*
 * BOOTSTRAP / STATE MAINTENANCE OPERATIONS
 *========================================================================*/
SettingsPageController = AppController.extend({
    template: "settingsPage",
    data: {},
    element: null
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
if (Meteor.isClient) {
Template.settingsPage.rendered = function() {
    SettingsPageController.element = $("#settings-page");

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='settings']").addClass("active");

    // fade in the page
    SettingsPageController.element.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
}
