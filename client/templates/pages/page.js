/**
 * Stores all pages that have been rendered as object references.
 * 
 * @global Page
 */
window.Page = {};

/**
 * This class defines a standard page in the Anigiri application
 * and performs various common behaviours.
 *
 * @class PageClass
 * @param id {String} The unique identifier for the page.
 * @param options {Object} Hash map of options to assign this page.
 */
window.PageClass = function(id, options) {
    var self = this;

    // initialize the page options
    self.options = $.extend({
        id: id
    }, options);

    // initialize the element
    self.element = $("#"+self.options.id+"-page");

    // initialize the page
    self._init();
};
/**
 * Page helper for initializing a page.
 *
 * @private
 * @method init
 */
PageClass.prototype._init = function() {
    var self = this;
    var $el = $(self.element);

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='"+self.options.id+"']").addClass("active");

    // fade in the page
    $el.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
