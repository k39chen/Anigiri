/*========================================================================*
 * MYANIMELIST API CONFIG
 *========================================================================*/
MAL = {
    BASE_API : "http://myanimelist.net/api"
};
MAL.URL = {
    search: MAL.BASE_API+"/anime/search.xml?q={title_slug}"
};
/*========================================================================*
 * MYANIMELIST API METHODS
 *========================================================================*/
/**
 * The MyAnimeList module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace MAL
 */
Meteor.methods({
    /**
     * Performs a search on MAL for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "MAL.search": function(params) {
        printHeader("MAL.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // construct the request URL to the third-party service.
        var requestUrl = MAL.URL.search
            .replace("{title_slug}", Helpers.slugify(params.title_str, {
                delimiter: "+",
                allLowerCase: true 
            }));

        // send the request to Anime News Network
        var response = HTTP.get(requestUrl, {
            auth: "k39chen:malapicredential"
        });
        // if there's nothing to parse then return an empty response
        if (_.isEmpty(response.content)) {
            console.log("Couldn't find any results");
            return {};
        }
        // format the MAL response
        var result = MAL.formatResponse(response.content);

        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");

        // return the formatted result
        return result;
    }
});
/*========================================================================*
 * MYANIMELIST API HELPERS
 *========================================================================*/
MAL = _.extend(MAL, {
    /**
     * This will take a raw MAL response then convert it from XML format
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
        var mal = json;
        var result = {};

        // TODO: kchen - Do this
        result = mal;

        return result;
    },
    /**
     * This will take a JSON formatted entry MAL response and reorganize
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
