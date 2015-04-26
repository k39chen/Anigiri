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
    var ann = xml2js.parseStringSync(response);
    var annAnimes = ann.anime;
    var animes = [];

    // go through each anime in the list of animes
    console.log("Finished converting response to XML. Reformatting to adhere to schema rules.");
    _.each(annAnimes, function(annAnime) {
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
        animes.push(anime);
    });
if (true) return ann;
    return animes;
};
