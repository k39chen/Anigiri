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

            // hide all the tab content sections
            $el.find(".tab-content").hide();

            // fade in the activated tab
            $el.find("#tab-"+tabId).show().css({opacity:0}).stop().animate({opacity:1},1000);

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

    // get the parent node to append tab content to.
    var $el = Page.ControlPanel.element.get(0);

    // we will now add all of the tab contents
    Blaze.render(Template.controlPanelOperationsTab, $el);
    Blaze.render(Template.controlPanelAPITab, $el);
    Blaze.render(Template.controlPanelCollectionsTab, $el);
    Blaze.render(Template.controlPanelSchemasTab, $el);

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
