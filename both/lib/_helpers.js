Helpers = {
    /**
     * Slugifies a string.
     *
     * @method slugify
     * @params src {String} The original string.
     * @params options {Object} Additional options.
     * @return {String} The slugified string with the applied options.
     */
    slugify: function(src, options) {
        var options = _.extend({
            delimiter: "-",
            stripPunctuation: true,
            allLowerCase: false
        }, options);

        // trim the string
        src = src.replace(/^\s+|\s+$/g, '');

        // switch to lower casse
        if (options.allLowerCase) {
            src = src.toLowerCase();
        }
        // remove accents, swap ñ for n, etc
        var from = "ãàáäâẽèéëêìíïîōõòóöôūùúüûñç·/_,:;";
        var to   = "aaaaaeeeeeiiiioooooouuuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
            src = src.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        src = src.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, options.delimiter) // collapse whitespace and replace by the delimiter
            .replace(new RegExp("\\"+options.delimiter+"+","g"), options.delimiter); // collapse delimiter

        return src;
    },
    /**
     * Calculates and formats the difference between two moments.
     *
     * @method getDuration
     * @param startTime {Object} The start time moment object.
     * @param endTime {Object} The end time moment object.
     * @return {String} Return the difference between two moments.
     */
    getDuration: function(startTime,endTime) {
        var format = "DD/MM/YYYY HH:mm:ss";
        var diff = moment.utc(moment(endTime, format).diff(moment(startTime, format)));
        var duration = moment.duration(diff);
        var formatted = Math.floor(duration.asHours()) + moment.utc(diff).format(":mm:ss.SSS");

        return formatted;
    }
};
