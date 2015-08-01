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
    anime: HB.BASE_API+"/anime/{id}",
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
     * Performs an Hummingbird request for getting an anime's full details.
     *
     * @method getAnime
     * @param id {String} The Hummingbird anime id.
     * @return {Object} The anime details.
     */
    "HB.getAnime": function(params) {
        printHeader("HB.getAnime",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["id"]);

        // send the request
        var response = sendRequest({
            requestUrl: HB.URL.anime.replace("{id}",params.id),
            requestParams: {
                headers: {
                    'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY
                },
                params: {
                    query: params.id
                }
            },
            processResponse: HB.formatEntry
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    },
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
        var response = sendRequest({
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
        var result = {
            _: response,
            animes: []
        };
        // format each type of anime entry
        result.animes = _.map(response, function(anime) {
            return HB.formatEntry(anime);
        });
        return result;
    },
    /**
     * This will take a JSON formatted entry HB response and reorganize
     * the data into a more user-friendly interface.
     *
     * @method formatEntry
     * @param entry {Object} The unorganized entry data.
     * @param isParsed {Boolean} Flag to indicate if this response is already in JSON format.
     * @return {Object} The formatted entry data.
     */
    formatEntry: function(entry, isParsed) {
        if (!isParsed) {
            try {
                entry = JSON.parse(entry);
            } catch (e) {
                console.log("Unable to parse JSON");
                return;
            }
        }
        var genres = {};
        _.each(entry.genres, function(genre) {
            genres[genre.name.toLowerCase()] = {
                name: _.capitalize(genre.name)
            };
        });
        return {
            "id": entry.id,
            "mal_id": entry.mal_id,
            "slug": entry.slug,
            "status": entry.status,
            "url": entry.url,
            "title": entry.title,
            "alternate_title": entry.alternate_title || null,
            "episode_count":  entry.episode_count,
            "episode_length":  entry.episode_length,
            "cover_image": entry.cover_image,
            "synopsis": entry.synopsis,
            "show_type": entry.show_type,
            "started_airing": entry.started_airing,
            "finished_airing": entry.finished_airing,
            "community_rating": entry.community_rating,
            "age_rating": entry.age_rating,
            "genres": genres
        };
    }
});
