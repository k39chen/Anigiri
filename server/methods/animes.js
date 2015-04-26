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
        
        // construct the request URL to the third-party service.
        var requestUrl = API_CONFIG.ANN_REPORTS+'?id=155&type=anime&nlist=all';

        var response = HTTP.get(requestUrl, {
            headers: {'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY}
        });
        var results = [];
        if (!_.isEmpty(response.content)) {
            console.log(response.content);
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
