/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.app.rendered = function() {
    AppController.element = $("#Anigiri");

    // we will have the sidebar open when the application is initially rendered
    AppController.element.addClass("sidebar-mode");
};
