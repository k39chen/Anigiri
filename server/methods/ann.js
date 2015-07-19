/*========================================================================*
 * ANIME NEWS NETWORK API CONFIG
 *========================================================================*/
ANN = {
    BASE_API : "https://animenewsnetwork.p.mashape.com/api.xml",
    REPORTS  : "https://animenewsnetwork.p.mashape.com/reports.xml"
};
ANN.URL = {
    search: ANN.BASE_API+"?title=~{title_str}"
};
/*========================================================================*
 * ANIME NEWS NETWORK API METHODS
 *========================================================================*/
/**
 * The ANN module contains methods that exposes server-side functionality 
 * in a format that is simple for the client to interface and use.
 *
 * @namespace ANN
 */
Meteor.methods({
    /**
     * Performs a search on ANN for an anime given an arbitrary title string.
     *
     * @method search
     * @param title_str {String} The title of the anime that we want to search.
     * @return {Array} The list of search results.
     */
    "ANN.search": function(params) {
        printHeader("ANN.search",params);

        // validate the parameters before we make any requests
        validateParameters(params, ["title_str"]);

        // send the request
        var response = sendGetRequest({
            requestUrl: ANN.URL.search.replace("{title_str}",params.title_str),
            requestParams: {
                headers: {'X-Mashape-Authorization': API_CONFIG.MASHAPE_KEY}    
            },
            processResponse: ANN.formatResponse
        });
        //console.log("Add additional entry to DB.");
        //console.log("Augment existing entry in DB.");
        console.log("Serving well-formed results.");
        return response;
    }
});
/*========================================================================*
 * ANIME NEWS NETWORK API HELPERS
 *========================================================================*/
ANN = _.extend(ANN, {
    /**
     * This will take a raw ANN response then convert it from XML format
     * to JSON format, then afterwards parse the JSON formatted ANN
     * response and reorganize the data into a more user-friendly
     * interface.
     *
     * @method formatResponse
     * @param response {String} The response as a string-represented XML.
     * @return {Array} The list of animes.
     */
     formatResponse: function(response) {
        // convert the XML formatted result into a JSON object.
        console.log("Received a response, converting XML to JSON format...");
        var json = xml2js.parseStringSync(response);
        var ann = json.ann;
        var result = {
            animes: [],
            mangas: []
        };
        console.log("Finished converting response to XML. Reformatting to adhere to schema rules.");

        // format each type of ANN media
        result.animes = _.map(ann.anime, function(anime) {
            return ANN.formatEntry("anime", anime);
        });
        result.mangas = _.map(ann.manga, function(manga) {
            return ANN.formatEntry("manga",manga);
        });
        return result;
    },
    /**
     * This will take a JSON formatted entry ANN response and reorganize
     * the data into a more user-friendly interface.
     *
     * @method formatEntry
     * @param mediaType {String} Either anime or manga.
     * @param entry {Object} The unorganized entry data.
     * @return {Object} The formatted entry data.
     */
     formatEntry: function(mediaType, entry) {
        // let's bucket all the known data groupings
        var _metadata     = entry["$"];
        var _info         = entry["info"];
        var _relatedPrev  = entry["related-prev"];
        var _relatedNext  = entry["related-next"];
        var _episodes     = entry["episode"];
        var _ratings      = entry["ratings"];
        var _reviews      = entry["review"];
        var _releases     = entry["release"];
        var _news         = entry["news"];
        var _staff        = entry["staff"];
        var _cast         = entry["cast"];
        var _credits      = entry["credit"];

        // build requested properties
        var id = _metadata.id;
        var type = _metadata.type;
        var title = {lang: "EN", value: _metadata.name};

        // scrape everything out of the info metadata
        var picture = {};
        var altPictures = [];
        var altTitles = [];
        var summary = null;
        var genres = {};
        var themes = {};
        var premiereDate = null;
        var numEpisodes = null;
        var numPages = null;
        var numTankoubon = null;
        var runningTime = null;
        var vintage = [];
        var openings = [];
        var endings = [];
        var specials = [];

        _.each(_info, function(info) {
            switch (info.$.type) {
            case "Picture":
                picture = {
                    src: info.$.src,
                    width: info.$.width,
                    height: info.$.height
                };
                // construct a list of alternate images
                _.each(info["img"], function(img) {
                    altPictures.push({
                        src: img.$.src,
                        width: img.$.width,
                        height: img.$.height
                    });
                });
                break;
            case "Main title":
                title = {
                    lang: info.$.lang,
                    value: info._
                };
                break;
            case "Alternative title":
                altTitles.push({
                    lang: info.$.lang,
                    value: info._
                });
                break;
            case "Genres":
                genres[info._.toLowerCase()] = true;
                break;
            case "Themes":
                themes[info._.toLowerCase()] = true;
                break;
            case "Plot Summary":
                summary = info._;
                break;
            case "Premiere date":
                premiereDate = info._;
                break;
            case "Number of episodes":
                numEpisodes = info._;
                break;
            case "Number of pages":
                numPages = info._;
                break;
            case "Number of tankoubon":
                numTankoubon = info._;
                break;
            case "Running time":
                runningTime = info._;
                break;
            case "Vintage":
                vintage.push(info._);
                break;
            case "Opening Theme":
                openings.push(ANN.parseSongString(info._));
                break;
            case "Ending Theme":
                endings.push(ANN.parseSongString(info._));
                break;
            case "Special":
                specials.push(ANN.parseSongString(info._));
                break;
            }
        });
        // build the related prev
        var relatedPrev = [];
        _.each(_relatedPrev, function(entry) {
            relatedPrev.push({
                id: entry.$.id,
                rel: entry.$.rel
            });
        });
        // build the related next
        var relatedNext = [];
        _.each(_relatedNext, function(entry) {
            relatedNext.push({
                id: entry.$.id,
                rel: entry.$.rel
            });
        });
        // get ratings info
        var ratings = {};
        _.each(_ratings, function(rating) {
            ratings = {
                numVotes: rating.$.nb_votes,
                weighted: rating.$.weighted_score,
                bayesian: rating.$.bayesian_score
            };
        });
        // get episodes info
        var episodeList = {};
        _.each(_episodes, function(episode) {
            episodeList[episode.$.num] = _.map(episode.title, function(title) {
                return {
                    lang: title.$.lang,
                    value: title._
                };
            });
        })
        // get the reviews info
        var reviews = [];
        _.each(_reviews, function(review) {
            reviews.push({
                title: review._,
                href: review.$.href
            });
        });
        // get the release info
        var releases = [];
        _.each(_releases, function(release) {
            releases.push({
                title: release._,
                href: release.$.href,
                date: release.$.date
            });
        });
        // get the news info
        var news = [];
        _.each(_news, function(article) {
            news.push({
                title: article._,
                href: article.$.href,
                date: article.$.datetime
            });
        });
        // get the staff info
        var staff = [];
        var staff_ = {};
        _.each(_staff, function(people) {
            var personTasks = _.first(people.task) || null;

            _.each(people.person, function(person) {
                staff_[person.$.id] = {
                    id: person.$.id,
                    name: person._,
                    tasks: personTasks
                };
            });
            _.each(staff_, function(_person) {
                staff.push(_person);
            })
        });
        // get the cast info
        var cast = [];
        var cast_ = {};
        _.each(_cast, function(people) {
            var personRoles = _.first(people.role) || null;

            _.each(people.person, function(person) {
                cast_[person.$.id] = {
                    id: person.$.id,
                    name: person._,
                    roles: personRoles
                };
            });
            _.each(cast_, function(_person) {
                cast.push(_person);
            })
        });
        // get the credit info
        var credits = [];
        var credits_ = {};
        _.each(_credits, function(credit) {
            var companyTasks = _.first(credit.task) || null;

            _.each(credit.company, function(company) {
                credits_[company.$.id] = {
                    id: company.$.id,
                    name: company._,
                    tasks: companyTasks
                };
            });
            _.each(credits_, function(_company) {
                credits.push(_company);
            })
        });
        // Let's scope out what fields we can get AT MAXIMUM from
        // the provided ANN response. We will aim to fill as many
        // of these as we can.
        switch (mediaType) {
        case "anime":
            return {
                "id": id,
                "type": type,
                "title": title,
                "picture": picture,
                "altPictures": altPictures,
                "summary": summary,
                "altTitles": altTitles,
                "genres": genres,
                "themes": themes,
                "vintage": vintage,
                "songs": {
                    "openings": openings,
                    "endings": endings,
                    "specials": specials
                },
                "episodes": {
                    "num": numEpisodes,
                    "runningTime": runningTime,
                    "premiereDate": premiereDate,
                    "list": episodeList
                },
                "related": {
                    "prev": relatedPrev,
                    "next": relatedNext
                },
                "reviews": reviews,
                "release": releases,
                "ratings": ratings,
                "news": news,
                "staff": staff,
                "cast": cast,
                "credits": credits
            };
        case "manga":
            return {
                "id": id,
                "type": type,
                "title": title,
                "picture": picture,
                "altPictures": altPictures,
                "summary": summary,
                "altTitles": altTitles,
                "genres": genres,
                "themes": themes,
                "vintage": vintage,
                "books": {
                    "numTankoubon": numTankoubon,
                    "numPages": numPages
                },
                "related": {
                    "prev": relatedPrev,
                    "next": relatedNext
                },
                "reviews": reviews,
                "release": releases,
                "ratings": ratings,
                "news": news,
                "staff": staff,
                "credits": credits
            };
        default:
            return null;
        }
    },
    /**
     * Takes a non-formatted ANN song string and parses it
     * into a readable object.
     *
     * @method parseSongString
     * @param str {String} The song string.
     * @return {Object} The resulting object.
     */
    parseSongString: function(str) {
        var matches = str.match(/^#([0-9]+):\s(.*)\sby\s(.*)$/i);
        if (matches) {
            var matches2 = matches[3].match(/^(.*)\s\((ep.*)\)$/i);
            return {
                source   : str,
                num      : parseInt(matches[1],10),
                song     : matches[2].replace(/"/g,''),
                artist   : matches2 ? matches2[1] : matches[3],
                episodes : matches2 ? matches2[2] : null
            };
        } else {
            matches = str.match(/^(.*)\sby\s(.*)$/i);
            return {
                source   : str,
                num      : 1,
                song     : matches[1].replace(/"/g,''),
                artist   : matches[2],
                episodes : null
            }
        }
        return null;
    }
});
