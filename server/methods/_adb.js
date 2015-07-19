/*========================================================================*
 * AniDB API HELPERS
 *========================================================================*/
ADB = {
    /**
     * This will take a raw AniDB response then convert it from XML format
     * to JSON format, then afterwards parse the JSON formatted ANN
     * response and reorganize the data into a more user-friendly
     * interface.
     *
     * @method formatResponse
     * @param response {String} The response as a string-represented JSON.
     * @return {Array} The list of animes.
     */
    formatResponse: function(response) {
        // convert the XML formatted result into a JSON object.
        console.log("Received a response, converting XML to JSON format...");
        var json = xml2js.parseStringSync(response);
        var adb = json;
        var result = {};

        // TODO: kchen - Do this
        result = adb;

        console.log(adb);

        return result;
    },
    /**
     * This will take a JSON formatted entry AniDB response and reorganize
     * the data into a more user-friendly interface.
     *
     * @method formatEntry
     * @param entry {Object} The unorganized entry data.
     * @return {Object} The formatted entry data.
     */
    formatEntry: function(entry) {
        return entry;
    }
};
