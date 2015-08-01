/**
 * @source TVDB
 * @url http://thetvdb.com/wiki/index.php?title=Programmers_API
 */
/*========================================================================*
 * TVDB API CONFIG
 *========================================================================*/
TVDB = {
    BASE_API : "http://thetvdb.com/api",
    API_KEY  : "B8E800CFF0D85989"
};
TVDB.URL = {
    search: TVDB.BASE_API+"/GetSeries.php?seriesname={title_str}"
};
/*========================================================================*
 * TVDB API METHODS
 *========================================================================*/
/**
 * The TVDB module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace TVDB
 */
Meteor.methods({
    /**
     * Performs a search on TVDB for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "TVDB.search": function(params) {
        printHeader("TVDB.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // send the request
        var response = sendRequest({
            requestUrl: TVDB.URL.search.replace("{title_str}",params.title_str),
            requestParams: {},
            processResponse: TVDB.formatResponse
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    }
});
/*========================================================================*
 * TVDB API HELPERS
 *========================================================================*/
TVDB = _.extend(TVDB, {
    /**
     * This will take a raw TVDB response then convert it from XML format
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
        var tvdb = json.Data;
        var result = {
            _: tvdb,
            animes: []
        };
        // format each type of anime entry
        result.animes = _.map(tvdb.Series, function(anime) {
            return TVDB.formatEntry(anime);
        });
        return result;
    },
    /**
     * This will take a JSON formatted entry TVDB response and reorganize
     * the data into a more user-friendly interface.
     *
     * @method formatEntry
     * @param entry {Object} The unorganized entry data.
     * @return {Object} The formatted entry data.
     */
    formatEntry: function(entry) {
        var picture = _.first(entry.banner) || null;

        if (!_.isNull(picture)) {
            picture = "http://thetvdb.com/banners/"+picture;
        }
        return {
            "id": _.first(entry.id) || null,
            "imdb_id": _.first(entry.IMDB_ID) || null,
            "language": _.first(entry.language) || null,
            "title": _.first(entry.SeriesName) || null,
            "picture": picture,
            "synopsis": _.first(entry.Overview) || null,
            "start_date": _.first(entry.FirstAired) || null,
            "network": _.first(entry.Network) || null
        };
    }
});
