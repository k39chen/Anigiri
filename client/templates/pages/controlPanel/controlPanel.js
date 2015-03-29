window.Page.ControlPanel = new window.PageClass("control-panel", 
    /* @Options */
    {},
    /* @Methods */
    {
        /**
         * Sets the active tab on the control panel view.
         *
         * @method setActiveTab
         * @param tabId {String} The tab to activate.
         */
        setActiveTab: function(tabId) {
            var self = this;
            var $el = $(Page.ControlPanel.element);

            // invalidate all previously active tabs
            $el.find(".tab").removeClass("active");

            // activate the request tab
            $el.find(".tab[tab-name='"+tabId+"']").addClass("active");

            // update the session variable to track the active tab
            Session.set("controlPanelActiveTab", tabId);
        }
    }
);
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelPage.rendered = function() {
    Page.ControlPanel.init();

    // set a default tab
    Page.ControlPanel.methods.setActiveTab("operations");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelPage.events({
    "click .tab": function(ev, template) {
        var $el = $(ev.target);

        // update the active tab
        Page.ControlPanel.methods.setActiveTab($el.attr("tab-name"));
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
