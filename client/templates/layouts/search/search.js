/**
 * An interface for invoking and handling the search template remotely.
 *
 * @global Search
 */
window.Search = {
    $el: null,
    $trigger: null,

    // inidicate miscellaneous options
    options: {
        animationDuration: 500,
        maxOpacity: 0.95
    },
    // a flag to indicate if the search overlay is currently active
    isActive: false,

    /**
     * Enters the search overlay state with an initial search
     * input trigger.
     *
     * @method enter
     * @param $trigger {Object} The search input that triggered this.
     */
    enter: function($trigger) {
        var self = this;
        var $el = self.$el;
        var $input = $el.find(".search-input");

        // update our initial trigger reference
        self.$trigger = $trigger;

        // place the overlay in an active state
        self.$el.addClass("active");
        Search.isActive = true;

        // reset the state of the search input
        $input.val("");

        // animate this into existence
        $el.show().css({opacity:0}).stop().animate(
            {opacity: Search.options.maxOpacity},
            Search.options.animationDuration,
            $.proxy(function() {
                var self = this;
                var value = $.trim(self.$trigger.val()) || "";

                // reset the triggering input field blur the triggering element
                self.$trigger.val("").blur();

                // put focus on the search input
                self.$el.find(".search-input")
                    .val(value)
                    .focus();
            }, self)
        );
    },
    /**
     * Exits the search overlay.
     *
     * @method exit
     */
    exit: function() {
        var self = this;
        var $el = self.$el;

        // blur the search overlay input so we can hide this without
        // interruption
        var $input = $el.find(".search-input");
        $input.blur();

        // animate this out of existence
        $el.css({opacity: Search.options.maxOpacity}).stop().animate(
            {opacity:0},
            Search.options.animationDuration,
            $.proxy(function() {
                var self = this;

                // hide the search overlay
                self.$el.hide();

                // reset the state of the originating search input
                self.$trigger.focus();

                // removes the active state from the search overlay
                self.$el.removeClass("active");
                Search.isActive = false;
            }, self)
        );
    },
    /**
     * Remotely updates the search input value.
     *
     * @method updateInput
     * @param value {String} The new input value.
     */
    updateInput: function(value) {
        var self = this;
        var $el = self.$el;
        var $input = $el.find(".search-input");

        // update the search input
        $input.val(value);
    },
    /**
     * Submits a search request with the provided search string.
     *
     * @method submit
     * @param searchValue {String} The provided search string.
     */
    submit: function(searchValue) {
        var self = this;
        var $el = self.$el;

        // TODO: kchen - Submit a request here
        console.log("TODO: searching...",searchValue);
    }
};
/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.search.rendered = function() {
    // bind the created element to our global search reference
    Search.$el = $(this.firstNode);
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.search.events({
// Search input event handling
//-------------------------------------------------------------------------
    "click .fa-search": function(ev, template) {
        var $el = $(ev.target);
        var $input = Search.$el.find(".search-input");
        var value = $input.val();

        ev.preventDefault();
        ev.stopPropagation();

        // forcibly submit the search value
        Search.submit(value);
    },
    "click .exit-btn": function(ev, template) {
        var $el = $(ev.target);

        ev.preventDefault();
        ev.stopPropagation();

        // exit search mode
        Search.exit();
    },
    "focus .search-input": function(ev, template) {
        var $el = $(ev.target);
        var $group = $el.closest(".search-group");

        // place the search group in an active state
        $group.addClass("active");
    },
    "blur .search-input": function(ev, template) {
        var $el = $(ev.target);
        var $group = $el.closest(".search-group");

        // remove the active state from the search input
        $group.removeClass("active");
    },
    "keyup .search-input": function(ev,template) {
        var $el = $(ev.target);
        var value = $el.val();
        var keyCode = ev.keyCode || ev.which;

        // perform different behaviour depending on the key pressed
        switch (keyCode) {
        case $.ui.keyCode.ESCAPE:
            // exit search mode
            Search.exit();
            break;
        case $.ui.keyCode.ENTER:
            // forcibly submit the search value
            Search.submit(value);
            break;
        case $.ui.keyCode.UP:
            // navigate the search results
            break;
        case $.ui.keyCode.DOWN:
            // navigate the search results
            break;
        default:
            break;
        }
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.search.helpers({
    // ...
});
