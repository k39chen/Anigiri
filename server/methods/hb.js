/**
 * @source Hummingbird
 * @url https://github.com/hummingbird-me/hummingbird/wiki/API-v1-Methods
 */
/*========================================================================*
 * HUMMINGBIRD API CONFIG
 *========================================================================*/
HB = {
    BASE_API : "https://hummingbirdv1.p.mashape.com"
};
HB.URL = {
    search: HB.BASE_API+"/search/anime"
};
/*========================================================================*
 * HUMMINGBIRD API METHODS
 *========================================================================*/
/**
 * The Hummingbird module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace HB
 */
Meteor.methods({
    /**
     * Performs a search on Hummingbird for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "HB.search": function(params) {
        printHeader("HB.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // send the request
        var response = sendGetRequest({
            requestUrl: HB.URL.search,
            requestParams: {
                headers: {
                    'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY
                },
                params: {
                    query: params.title_str
                }
            },
            processResponse: HB.formatResponse
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    }
});
/*========================================================================*
 * HUMMINGBIRD API HELPERS
 *========================================================================*/
HB = _.extend(HB, {
    /**
     * This will take a raw HB response then parse the JSON formatted HB
     * response and reorganize the data into a more user-friendly
     * interface.
     *
     * @method formatResponse
     * @param response {String} The response as a string-represented JSON.
     * @return {Array} The list of animes.
     */
    formatResponse: function(response) {
        try {
            response = JSON.parse(response);
        } catch (e) {
            console.log("Unable to parse JSON");
            return;
        }
        var result = {};

        // TODO: kchen - Do this
        result = response;

        return response;
    },
    /**
     * This will take a JSON formatted entry HB response and reorganize
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
