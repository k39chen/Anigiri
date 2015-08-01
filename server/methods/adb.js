/**
 * @source AniDB
 * @url http://wiki.anidb.net/w/HTTP_API_Definition
 * @url http://anisearch.outrance.pl/doc.html
 */
/*========================================================================*
 * ANIDB API CONFIG
 *========================================================================*/
ADB = {
    CLIENT   : "anigiri",
    VERSION  : "1",
    BASE_API : "http://api.anidb.net:9001/httpapi?client=anigiri&clientver=1&protover=1&"
};
ADB.URL = {
    search: "http://anisearch.outrance.pl/?task=search&query={title_str}",
    anime: ADB.BASE_API+"request=anime&aid={aid}",
    main: ADB.BASE_API+"request=main",
    hotanime: ADB.BASE_API+"request=hotanime",
    randomsimilar: ADB.BASE_API+"request=randomsimilar",
    randomrecommendation: ADB.BASE_API+"request=randomrecommendation"
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
     * Performs an AniDB request for getting an anime's full details.
     *
     * @method getAnime
     * @param aid {String} The AniDB anime id.
     * @return {Object} The anime details.
     */
    "ADB.getAnime": function(params) {
        printHeader("ADB.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["aid"]);

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.anime.replace("{aid}",params.aid),
            requestParams: {
                npmRequestOptions: {
                    gzip: true
                }
            },
            processResponse: ADB.formatAnime
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    },
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

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.search.replace("{title_str}",params.title_str),
            requestParams: {},
            processResponse: ADB.formatSearch
        });
        console.log("Serving well-formed results.");
        return response;
    },
    /**
     * Performs an AniDB request for fetching batch main requests.
     *
     * @method getMain
     * @return {Object} The bucketed responses.
     */
    "ADB.getMain": function(params) {
        printHeader("ADB.getMain",params);

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.main,
            requestParams: {
                npmRequestOptions: {
                    gzip: true
                }
            },
            processResponse: ADB.formatMain
        });
        console.log("Serving well-formed results.");
        return response;
    },
    /**
     * Performs an AniDB request for currently hot anime.
     *
     * @method getHotAnime
     * @return {Array} The list of hot anime.
     */
    "ADB.getHotAnime": function(params) {
        printHeader("ADB.getHotAnime",params);

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.hotanime,
            requestParams: {
                npmRequestOptions: {
                    gzip: true
                }
            },
            processResponse: ADB.formatHotAnime
        });
        console.log("Serving well-formed results.");
        return response;
    },
    /**
     * Performs an AniDB request for two similar animes.
     *
     * @method getRandomSimilar
     * @return {Array} The list of similar anime.
     */
    "ADB.getRandomSimilar": function(params) {
        printHeader("ADB.getRandomSimilar",params);

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.randomsimilar,
            requestParams: {
                npmRequestOptions: {
                    gzip: true
                }
            },
            processResponse: ADB.formatRandomSimilar
        });
        console.log("Serving well-formed results.");
        return response;
    },
    /**
     * Performs an AniDB request for random recommendations.
     *
     * @method getRandomRecommendation
     * @return {Array} The list of random recommended animes.
     */
    "ADB.getRandomRecommendation": function(params) {
        printHeader("ADB.getRandomRecommendation",params);

        // send the request
        var response = sendRequest({
            requestUrl: ADB.URL.randomrecommendation,
            requestParams: {
                npmRequestOptions: {
                    gzip: true
                }
            },
            processResponse: ADB.formatRandomRecommendation
        });
        console.log("Serving well-formed results.");
        return response;
    }
});
/*========================================================================*
 * ANIDB API HELPERS
 *========================================================================*/
ADB = _.extend(ADB, {
    /**
     * This will take a non-formatted anime request JSON and format it
     * appropriately.
     *
     * @method formatAnime
     * @param adb {Object} The json object.
     * @return {Object} The formatted response.
     */
    formatAnime: function(adb) {
        var anime = {};
        // format the response to JSON
        adb = ADB.toJSON(adb);
        var anime = adb.anime;

        // start building our values
        var start_date = anime["startdate"] ? anime["startdate"][0] : null;
        var end_date = anime["enddate"] ? anime["enddate"][0] : null;
        var picture = anime["picture"] ? anime["picture"][0] : null;
        var description = anime["description"] ? anime["description"][0] : null;
        var episode_count = anime["episodecount"] ? parseInt(anime["episodecount"][0],10) : null;
        var _ratings = anime["ratings"] ? anime["ratings"][0] : null;

        //return anime;

        // build titles
        var titles = [];
        _.each(anime["titles"][0].title, function(title) {
            titles.push({
                type: title.$.type,
                lang: title.$["xml:lang"],
                value: title._
            });
        });
        // build related anime
        var related = [];
        if (anime["relatedanime"]) {
            _.each(anime["relatedanime"][0].anime, function(anime) {
                related.push({
                    id: anime.$.id,
                    title: anime._,
                    type: anime.$.type
                });
            });
        }
        // build similar anime
        var similar = [];
        if (anime["similaranime"]) {
            _.each(anime["similaranime"][0].anime, function(anime) {
                similar.push({
                    id: anime.$.id,
                    title: anime._,
                    approval: parseInt(anime.$.approval,10),
                    total: parseInt(anime.$.total,10)
                });
            });
        }
        // build comments
        var comments = [];
        if (anime["recommendations"]) {
            _.each(anime["recommendations"][0].recommendation, function(comment) {
                comments.push(comment._);
            });
        }
        // build creators
        var creators = [];
        if (anime["creators"]) {
            _.each(anime["creators"][0].name, function(creator) {
                creators.push({
                    id: creator.$.id,
                    name: creator._,
                    role: creator.$.type
                });
            });
        }
        // build characters
        var characters = [];
        if (anime["characters"]) {
            _.each(anime["characters"][0].character, function(character) {
                var _character = {
                    "id": character.$.id,
                    "name": character.name[0],
                    "gender": character.gender[0],
                    "type": character.$.type,
                    "update": character.$.update,
                    "description": character.description ? character.description[0] : null,
                    "picture": character.picture[0],
                    "rating": {},
                    "actor": {}
                };
                if (character.rating) {
                    _character["rating"] = {
                        "num_votes": parseInt(character.rating[0].$.votes,10),
                        "weighted": parseFloat(character.rating[0]._,10)
                    };
                }
                if (character.seiyuu) {
                    _character["actor"] = {
                        "id": character.seiyuu[0].$.id,
                        "name": character.seiyuu[0]._,
                        "picture": character.seiyuu[0].$.picture
                    };
                }
                characters.push(_character);
            });
        }
        // build episodes
        var episodes = [];
        if (anime["episodes"]) {
            _.each(anime["episodes"][0].episode, function(episode) {
                var _episode = {
                    "index": episode.epno[0]._,
                    "title": {
                        "title": episode.title[0]._,
                        "lang": episode.title[0].$["xml:lang"]
                    },
                    "type": episode.epno[0].$.type,
                    "length": episode.length[0],
                    "airdate": episode.airdate ? episode.airdate[0] : null,
                    "rating": {}
                };
                if (episode.rating) {
                    _episode["rating"] = {
                        "num_votes": episode.rating[0].$.votes,
                        "weighted": episode.rating[0]._
                    };
                }
                episodes.push(_episode);
            });
        }
        // build categories
        var categories = [];
        if (anime["categories"]) {
            _.each(anime["categories"][0].category, function(category) {
                categories.push({
                    "name": category.name[0],
                    "description": category.description[0],
                    "hentai": category.$.hentai,
                    "weight": parseInt(category.$.weight,10)
                });
            });
        }
        // build tags
        var tags = [];
        if (anime["tags"]) {
            _.each(anime["tags"][0].tag, function(tag) {
                tags.push({
                    "name": tag.name[0],
                    "count": parseInt(tag.count[0],10),
                    "description": tag.description ? tag.description[0] : null,
                    "approval": parseInt(tag.$.approval,10),
                    "spoiler": tag.$.spoiler,
                    "weight": parseInt(tag.$.weight,10)
                });
            });
        }
        // construct our formatted result
        anime = {
            "id": anime["$"].id,
            "titles": titles,
            "related": related,
            "similar": similar,
            "comments": comments,
            "creators": creators,
            "categories": categories,
            "tags": tags,
            "episodes": episodes,
            "ratings": {},
            "restricted": anime["$"].restricted,
            "type": anime["type"][0],
            "episode_count": episode_count,
            "start_date": start_date,
            "end_date": end_date,
            "description": description,
            "picture": picture
        };
        if (_ratings) {
            anime["ratings"] = {};
            if (_ratings.permanent) {
                anime["ratings"]["permanent"] = {
                    "num_votes": parseInt(_ratings.permanent[0]["$"].count,10),
                    "weighted": parseFloat(_ratings.permanent[0]["_"],10)
                };
            }
            if (_ratings.temporary) {
                anime["ratings"]["temporary"] = {
                    "num_votes": parseInt(_ratings.temporary[0]["$"].count,10),
                    "weighted": parseFloat(_ratings.temporary[0]["_"],10)
                }
            }
            if (_ratings.review) {
                anime["ratings"]["review"] = {
                    "num_votes": parseInt(_ratings.review[0]["$"].count,10),
                    "weighted": parseFloat(_ratings.review[0]["_"],10)
                }
            }
        }
        // return our formatted result
        return {_: adb, anime: anime};
    },
    /**
     * This will take a non-formatted 'search' request JSON and format it
     * appropriately.
     *
     * @method formatSearch
     * @param adb {Object} The json object.
     * @return {Object} The formatted response.
     */
    formatSearch: function(adb) {
        // format the response to JSON
        adb = ADB.toJSON(adb);
        
        // go through each anime title and return the formatted list
        var list = [];
        _.each(adb.animetitles.anime, function(anime) {
            var _anime = {
                id: anime.$.aid,
                titles: []
            };
            _.each(anime.title, function(title) {
                _anime.titles.push({
                    type: title.$.type,
                    lang: title.$.lang,
                    value: title._
                });
            });
            list.push(_anime);
        });
        return {_: adb, list: list};
    },
    /**
     * This will take a non-formatted 'main' request JSON and format it
     * appropriately.
     *
     * @method formatMain
     * @param adb {Object} The json object.
     * @return {Object} The formatted response.
     */
    formatMain: function(adb) {
        // format the response to JSON
        adb = ADB.toJSON(adb);

        // go through each bucket and format each accordingly
        var results = {
            _: adb,
            "hotanime": ADB.formatHotAnime(adb.main["hotanime"],true),
            "randomsimilar": ADB.formatRandomSimilar(adb.main["randomsimilar"],true),
            "randomrecommendation": ADB.formatRandomRecommendation(adb.main["randomrecommendation"],true)
        };
        return results;
    },
    /**
     * This will take a non-formatted 'randomrecommendation' request JSON and format it
     * appropriately.
     *
     * @method formatRandomRecommendation
     * @param adb {Object} The json object.
     * @param isJSON {Boolean} Flag to indicate if this response is already in JSON format.
     * @return {Array} The list of recommendations.
     */
    formatRandomRecommendation: function(adb, isJSON) {
        var list = [];

        // format to JSON if this is not already in JSON format
        if (!isJSON) {
            adb = ADB.toJSON(adb);
            adb = adb.randomrecommendation;
        } else {
            adb = adb[0];
        }
        // go through each random recommendation
        _.each(adb["recommendation"], function(anime) {
            anime = anime["anime"][0];
            var _ratings = anime["ratings"][0];

            // create and push the result
            list.push({
                "id": anime["$"].id,
                "title": anime["title"][0]["_"],
                "restricted": anime["$"].restricted,
                "type": anime["type"][0],
                "episode_count": parseInt(anime["episodecount"][0],10),
                "start_date": anime["startdate"][0],
                "end_date": anime["enddate"][0],
                "picture": anime["picture"][0],
                "ratings": {
                    "num_votes": parseInt(_ratings.permanent[0]["$"].count,10),
                    "weighted": parseInt(_ratings.permanent[0]["_"],10) / 100,
                    "num_recommendations": parseInt(_ratings.recommendations[0],10)
                }
            });
        });
        // return the result: if this is already formatted as a JSON when
        // it came into this method, this means that this probably came
        // from the 'main' call, so it already includes the metadata.
        if (isJSON) {
            return list;
        } else {
            return {_: adb, list: list};
        }
    },
    /**
     * This will take a non-formatted 'randomsimilar' request JSON and format it
     * appropriately.
     *
     * @method formatRandomSimilar
     * @param adb {Object} The json object.
     * @param isJSON {Boolean} Flag to indicate if this response is already in JSON format.
     * @return {Array} The list of similar animes.
     */
    formatRandomSimilar: function(adb, isJSON) {
        var list = [];

        // format to JSON if this is not already in JSON format
        if (!isJSON) {
            adb = ADB.toJSON(adb);
            adb = adb.randomsimilar;
        } else {
            adb = adb[0];
        }
        // go through each random similar
        _.each(adb["similar"], function(pair) {
            var _source = pair.source[0];
            var _target = pair.target[0];

            // create and push the result
            list.push({
                "source": {
                    "id": _source["$"].id,
                    "title": _source["title"][0]["_"],
                    "restricted": _source["$"].restricted,
                    "picture": _source["picture"][0]
                },
                "target": {
                    "id": _target["$"].id,
                    "title": _target["title"][0]["_"],
                    "restricted": _target["$"].restricted,
                    "picture": _target["picture"][0]
                }
            });
        });
        // return the result: if this is already formatted as a JSON when
        // it came into this method, this means that this probably came
        // from the 'main' call, so it already includes the metadata.
        if (isJSON) {
            return list;
        } else {
            return {_: adb, list: list};
        }
    },
    /**
     * This will take a non-formatted 'hotanime' request JSON and format it
     * appropriately.
     *
     * @method formatHotAnime
     * @param adb {Object} The json object.
     * @param isJSON {Boolean} Flag to indicate if this response is already in JSON format.
     * @return {Array} The list of hot animes.
     */
    formatHotAnime: function(adb, isJSON) {
        var list = [];

        // format to JSON if this is not already in JSON format
        if (!isJSON) {
            adb = ADB.toJSON(adb);
            adb = adb.hotanime;
        } else {
            adb = adb[0];
        }
        // go through each hot anime
        _.each(adb["anime"], function(anime) {
            var _ratings = anime["ratings"][0];

            // create and push the result
            list.push({
                "id": anime["$"].id,
                "title": anime["title"][0]["_"],
                "restricted": anime["$"].restricted,
                "start_date": anime["startdate"][0],
                "picture": anime["picture"][0],
                "ratings": {
                    "permanent": {
                        "num_votes": parseInt(_ratings.permanent[0]["$"].count,10),
                        "weighted": parseFloat(_ratings.permanent[0]["_"],10)
                    },
                    "temporary": {
                        "num_votes": parseInt(_ratings.temporary[0]["$"].count,10),
                        "weighted": parseFloat(_ratings.temporary[0]["_"],10)
                    }
                }
            });
        });
        // return the result: if this is already formatted as a JSON when
        // it came into this method, this means that this probably came
        // from the 'main' call, so it already includes the metadata.
        if (isJSON) {
            return list;
        } else {
            return {_: adb, list: list};
        }
    },
    /**
     * This will take a raw AniDB response then convert it from XML format
     * to JSON format.
     *
     * @method toJSON
     * @param response {String} The response as a string-represented XML.
     * @return {Array} The response as a JSON.
     */
    toJSON: function(response) {
        // convert the XML formatted result into a JSON object.
        console.log("Received a response, converting XML to JSON format...");
        return xml2js.parseStringSync(response);
    },
});
