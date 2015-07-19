/*========================================================================*
 * ANIDB API CONFIG
 *========================================================================*/
ADB = {
    CLIENT   : "anigiri",
    VERSION  : "1",
    BASE_API : "http://api.anidb.net:9001/httpapi?client=anigiri&clientver=1&protover=1&"
};
ADB.URL = {
    hotanime: ADB.BASE_API+"request=hotanime"
};
/*========================================================================*
 * ANIDB API METHODS
 *========================================================================*/
/**
 * The ADB module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace ADB
 */
Meteor.methods({
    /**
     * Performs a search on AniDB for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "ADB.search": function(params) {
        printHeader("ADB.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // construct the request URL to the third-party service.
        var requestUrl = ADB.URL.hotanime;

        // send the request to Anime News Network
        var response = HTTP.get(requestUrl, {
            npmRequestOptions: {
                gzip: true
            }
        });
        // if there's nothing to parse then return an empty response
        if (_.isEmpty(response.content)) {
            console.log("Couldn't find any results");
            return {};
        }
        // get the raw XML ADB response, convert it into JSON, and
        // format it in a way that we can legibly read it.
        var result = ADB.formatResponse(response.content);

        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");

        // return the formatted result
        return result;
    }
});
/*========================================================================*
 * ANIDB API HELPERS
 *========================================================================*/
ADB = _.extend(ADB, {
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
});
