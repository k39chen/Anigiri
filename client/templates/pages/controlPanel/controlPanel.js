window.Page.ControlPanel = new window.PageClass("control-panel", {
    /* @Options */
    options: {},
    /* @Methods */
    methods: {}
});
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelPage.rendered = function() {
    // set a default tab
    Session.set("controlPanelActiveTab", "operations");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelPage.events({
    "click .tab": function(ev, template) {
        var $el = $(ev.target);

        // update the active tab
        Session.set("controlPanelActiveTab", $el.attr("tab-name"));
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelPage.helpers({
    isOperationsTab: function() {
        return Session.get("controlPanelActiveTab") === "operations";
    },
    isSchemaTab: function() {
        return Session.get("controlPanelActiveTab") === "schemas";
    },
    isCollectionsTab: function() {
        return Session.get("controlPanelActiveTab") === "collections";
    },
    isAPITab: function() {
        return Session.get("controlPanelActiveTab") === "api";
    }
});
