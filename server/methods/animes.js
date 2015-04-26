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
        if (_.isEmpty(params)) {
            throw new Meteor.Error("parameters-required", "Must specify parameters for this request.");
        }
        if (_.isEmpty(params.title_str)) {
            throw new Meteor.Error("invalid-parameter", "The parameter `title_str` must be specified.");
        }
        // construct the request URL to the third-party service.
        var requestUrl = API_CONFIG.ANN_API+"?title=~"+params.title_str;

        var response = HTTP.get(requestUrl, {
            headers: {'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY}
        });
        var results = [];
        if (!_.isEmpty(response.content)) {
            console.log("Received a response, converting XML to JSON format...");

            // convert the XML formatted result into a JSON object.
            var result = xml2js.parseStringSync(response.content);

            // TODO: Make sure that we cache the data into our DB

            // return the formatted result
            return result;
        } else {
            console.log("Couldn't find any results.");
        }
        return results;
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
        // TODO: Implement this
    },
    /**
     * Removes an anime from the Anigiri anime repository.
     *
     * @method remove
     * @param anime_id {String} The id of the anime that we wish to remove.
     */
    "Animes.remove": function(params) {
        printHeader("Animes.remove",params);
        // TODO: Implement this
    }
});
