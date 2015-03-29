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
 * @param options {Object} Hash map of options to assign this object.
 */
window.PageClass = function(id, options, methods) {
    var self = this;

    // assign the id at the highest level
    self.id = id;

    // initialize the page options
    self.options = $.extend({
        // ...
    }, options);

    // initialize the page methods
    self.methods = $.extend({
        // ...
    }, methods);

    // initialize the element
    self.element = $("#"+self.id+"-page");

    // initialize the page
    self.init();
};
/**
 * Page helper for initializing a page.
 *
 * @method init
 */
PageClass.prototype.init = function() {
    var self = this;
    var $el = $(self.element);

    // update the navigation bar to highlight the appropriate item
    $("#navigation .nav-item[data-key='"+self.id+"']").addClass("active");

    // fade in the page
    $el.css({opacity:0}).stop().animate({opacity:1}, 1000);
};
