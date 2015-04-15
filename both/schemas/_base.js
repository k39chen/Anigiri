Schemas = {};

/**
 * Automatically inserts a timestamp date.
 *
 * @method autoDate
 */
autoDate = function() {
    if (this.isInsert) {
        return new Date;
    } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
    } else {
        this.unset();
    }
}
