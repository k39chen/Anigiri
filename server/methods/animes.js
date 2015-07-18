/**
 * The animes model contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace Animes
 */
Meteor.methods({
    /**
     * Performs a search for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "Animes.search": function(params) {
        printHeader("Animes.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // TODO: Implement this
        throw new Meteor.Error("incomplete", "This method has not been implemented.");
    },
    /**
     * Performs a search on ANN for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "Animes.searchANN": function(params) {
        printHeader("Animes.searchANN",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // construct the request URL to the third-party service.
        var requestUrl = API_CONFIG.ANN_API+"?title=~"+params.title_str;

        // send the request to Anime News Network
        var response = HTTP.get(requestUrl, {
            headers: {'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY}
        });
        var list = [];
        if (!_.isEmpty(response.content)) {
            // get the raw XML ANN response, convert it into JSON, and
            // format it in a way that we can legibly read it.
            result = ANN.formatResponse(response.content);

            //console.log("Add additional entry to DB.");
            //console.log("Augment existing entry in DB.");
            console.log("Serving well-formed results.");

            // return the formatted result
            return result;
        } else {
            throwError("no-results","Couldn't find any results");
        }
        return result;
    },
    /**
     * Performs a search on Hummingbird for an anime given an arbitrary title string.
     *
     * @method searchHB
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "Animes.searchHB": function(params) {
        printHeader("Animes.searchHB",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // TODO: Implement this
        throw new Meteor.Error("incomplete", "This method has not been implemented.");
    },
    /**
     * Fetches from the set of third-party sources to update the
     * requested anime.
     *
     * @method update
     * @param anime_id {String} The id of the anime that we wish to update.
     * @return {Object} The newly updated anime data.
     */
    "Animes.update": function(params) {
        printHeader("Animes.update",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["anime_id"]);

        // TODO: Implement this
        throw new Meteor.Error("incomplete", "This method has not been implemented.");
    },
    /**
     * Removes an anime from the Anigiri anime repository.
     *
     * @method remove
     * @param anime_id {String} The id of the anime that we wish to remove.
     */
    "Animes.remove": function(params) {
        printHeader("Animes.remove",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["anime_id"]);

        // TODO: Implement this
        throw new Meteor.Error("incomplete", "This method has not been implemented.");
    }
});
