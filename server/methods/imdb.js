/**
 * @source IMDB
 * @url http://www.animenewsnetwork.com/encyclopedia/api.php
 */
/*========================================================================*
 * IMDB API CONFIG
 *========================================================================*/
IMDB = {
    BASE_API: "http://www.omdbapi.com/"
};
IMDB.URL = {
    // ...
};
/*========================================================================*
 * IMDB API METHODS
 *========================================================================*/
/**
 * The IMDB module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace IMDB
 */
Meteor.methods({
    /**
     * Performs a search on IMDB for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "IMDB.search": function(params) {
        printHeader("IMDB.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // send the request
        var response = sendRequest({
            requestUrl: IMDB.BASE_API,
            requestParams: {
                params: {
                    t: params.title_str,
                    r: "json"
                }
            },
            processResponse: IMDB.formatResponse
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    }
});
/*========================================================================*
 * IMDB API HELPERS
 *========================================================================*/
IMDB = _.extend(IMDB, {
    /**
     * This will take a raw AniDB response then convert it from XML format
     * to JSON format, then afterwards parse the JSON formatted IMDB
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
        var result = {
            animes: []
        };
        // format each type of anime entry
        result.animes.push(IMDB.formatEntry(response));

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
        var genres = {};
        var actors = [];
        var writers = [];

        if (entry.Genre) {
            var _genres = entry.Genre.split(",");
            _.each(_genres, function(genre) {
                genre = _.trim(genre);
                genres[genre.toLowerCase()] = {
                    name: _.capitalize(genre)
                };
            });
        }
        if (entry.Actors) {
            var _actors = entry.Actors.split(",");
            _.each(_actors, function(actor) {
                actor = _.trim(actor);
                actors.push({
                    name: actor,
                    role: "Actor"
                });
            });
        }
        if (entry.Writer) {
            var _writers = entry.Writer.split(",");
            _.each(_writers, function(writer) {
                writer = _.trim(writer);
                writers.push({
                    name: writer,
                    role: "Writer"
                });
            });
        }
        return {
            "id": entry.imdbID,
            "type": entry.Type,
            "title": entry.Title,
            "year": entry.Year,
            "rated": entry.Rated,
            "released": entry.Released,
            "runtime": entry.Runtime,
            "genres": genres,
            "director": entry.Director,
            "writers": writers,
            "actors": actors,
            "synopsis": entry.Plot,
            "country": entry.Country,
            "awards": entry.Awards,
            "poster": entry.Poster,
            "metascore": entry.Metascore,
            "rating": entry.imdbRating,
            "votes": entry.imdbVotes,
            "response": entry.Response
        };
    }
});
