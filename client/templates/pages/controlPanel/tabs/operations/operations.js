/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelOperationsTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-operations");

    // attach the widgets on this tab
    Widgets.attach($tab);
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelOperationsTab.events({
    "click .trigger-popup-btn": function(ev, template) {
        var $el = $(ev.target);

        // attach popup on the trigger
        $el.awPopup({
            title: "Popup Title",
            template: "controlPanelCollectionsTab"
        });
    },
    "click .trigger-dialog-btn": function(ev, template) {
        var $el = $(ev.target);

        // attach dialog on the trigger
        $el.awDialog({
            title: "Dialog Title",
            template: "controlPanelCollectionsTab"
        });
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelOperationsTab.helpers({
    // ...
});
