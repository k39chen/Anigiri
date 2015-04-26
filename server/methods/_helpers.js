/*========================================================================*
 * ANIME NEWS NETWORK API HELPERS
 *========================================================================*/
/**
 * This will take a raw ANN response then convert it from XML format
 * to JSON format, then afterwards parse the JSON formatted ANN
 * response and reorganize the data into a more user-friendly
 * interface.
 *
 * @method formatAnnResponse
 * @param response {String} The response as a string-represented XML.
 * @return {Array} The list of animes.
 */
formatAnnResponse = function(response) {
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
    result.animes = formatAnnAnimes(ann.anime);
    result.mangas = formatAnnMangas(ann.manga);
    
    if (true) {
        return ann;
    }
    return result;
};
/**
 * This will take a JSON formatted anime ANN response and reorganize
 * the data into a more user-friendly interface.
 *
 * @method formatAnnAnimes
 * @param animes {String} The list of unorganized anime data.
 * @return {Array} The list of animes.
 */
formatAnnAnimes = function(animes) {
    var result = [];

    // go through each anime in the list of animes
    _.each(animes, function(annAnime) {
        // let's bucket all the known data groupings
        var metadata     = annAnime["$"];
        var info         = annAnime["info"];
        var relatedPrev  = annAnime["related-prev"];
        var relatedNext  = annAnime["related-next"];
        var episode      = annAnime["episode"];
        var ratings      = annAnime["ratings"];
        var news         = annAnime["news"];
        var staff        = annAnime["staff"];
        var cast         = annAnime["cast"];
        var credit       = annAnime["credit"];

        // Let's scope out what fields we can get AT MAXIMUM from
        // the provided ANN response. We will aim to fill as many
        // of these as we can.
        var anime = {
            "id": null,
            "type": null,
            "title": null,
            "picture": {
                "src": null,
                "width": null,
                "height": null
            },
            "summary": null,
            "altTitles": [],
            "genres": [],
            "themes": [],
            "songs": {
                "openings": [],
                "endings": [],
                "specials": []
            },
            "episodes": {
                "num": null,
                "runningTime": null,
                "list": [],
                "vintage": []
            },
            "related": {
                "prev": [],
                "next": []
            },
            "ratings": [],
            "news": [],
            "staff": [],
            "cast": [],
            "credit": []
        };
        // add this anime to the final result
        result.push(anime);
    });
    return result;
};
/**
 * This will take a JSON formatted manga ANN response and reorganize
 * the data into a more user-friendly interface.
 *
 * @method formatAnnMangas
 * @param mangas {String} The list of unorganized manga data.
 * @return {Array} The list of animes.
 */
formatAnnMangas = function(mangas) {
    var result = [];

    // go through each manga in the list of mangas
    _.each(mangas, function(annManga) {
        // let's bucket all the known data groupings
        var metadata     = annManga["$"];
        var info         = annManga["info"];
        var relatedPrev  = annManga["related-prev"];
        var relatedNext  = annManga["related-next"];
        var ratings      = annManga["ratings"];
        var news         = annManga["news"];
        var staff        = annManga["staff"];
        var credit       = annManga["credit"];

        // Let's scope out what fields we can get AT MAXIMUM from
        // the provided ANN response. We will aim to fill as many
        // of these as we can.
        var manga = {
            "id": null,
            "type": null,
            "title": null,
            "picture": {
                "src": null,
                "width": null,
                "height": null
            },
            "summary": null,
            "altTitles": [],
            "genres": [],
            "themes": [],
            "books": {
                "numTankoubon": null,
                "numPages": null,
                "vintage": []
            },
            "related": {
                "prev": [],
                "next": []
            },
            "ratings": [],
            "news": [],
            "staff": [],
            "credit": []
        };
        // add this manga to the final result
        result.push(manga);
    });
    return result;
};
/*========================================================================*
 * OUTPUT HELPERS
 *========================================================================*/
printHeader = function(method, params) {
    printBlockSeparator();
    console.log("API Request: ",method);
    console.log("Parameters: ", params);
    printSeparator();
};
printBlockSeparator = function() {
    console.log("=====================================================");
};
printSeparator = function() {
    console.log("-----------------------------------------------------");
};