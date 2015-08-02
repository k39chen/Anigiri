/**
 * This is a widget that creates a cropping tool.
 *
 * @widget cropper
 */
$.widget("anigiri.cropper", {
    options: {
        title: "Crop Image"
    },
/*========================================================================*
* BOOTSTRAP / STATE MAINTENANCE OPERATIONS
*========================================================================*/
    /**
     * The widget constructor.
     *
     * @private
     * @method _create
     */
    _create: function() {
        var self = this;
        var $el = $(self.element);

        // add the binding class
        $el.addClass("Cropper");

        // render the template into the containing element
        //Blaze.render(Template.Cropper, $el.get(0));

        // this is actually going to be a dialog-esque kind of widget
        $el.awDialog({
            width: 640,
            title: self.options.title,
            template: "Cropper",
            templateData: {},
            buttons: {
                "Cancel": {
                    classes: "secondary",
                    click: $.proxy(function(qtip) {
                        this.close();
                    }, self)
                },
                "OK": {
                    click: $.proxy(function(qtip) {
                        this.close();
                    }, self)
                }
            }
        });
        self._refresh();
    },
    /**
     * Refreshes the widget when an option is changed.
     *
     * @private
     * @method _refresh
     */
    _refresh: function() {
        // trigger a callback/event
        this._trigger( "change" );
    },
    /**
     * Destroys the widget
     *
     * @private
     * @method _destroy
     */
    _destroy: function() {
        var self = this;

        // remove the binding class
        self.element.removeClass("Cropper");

        // empty the container
        self.element.empty();
    },
    /**
     * Sets a set of options.
     *
     * @private
     * @method _setOptions
     */
    _setOptions: function() {
        var self = this;
        self._superApply(arguments);
        self._refresh();
    },
    /**
     * Sets an option.
     *
     * @private
     * @method _setOption
     * @param key {String} The option key.
     * @param value {?} The new option value.
     */
    _setOption: function(key, value) {
        this._super(key, value);
    },
/*========================================================================*
 * WIDGET OPERATIONS
 *========================================================================*/
    /**
     * Opens the cropper.
     *
     * @method open
     */
    open: function() {
        var self = this;
        var $el = $(self.element);
        $el.awDialog("show");
    },
    /**
     * Closes the cropper.
     *
     * @method close
     */
    close: function() {
        var self = this;
        var $el = $(self.element);
        $el.awDialog("hide");
    }
/*========================================================================*
 * HELPER METHODS
 *========================================================================*/
    // ...
});