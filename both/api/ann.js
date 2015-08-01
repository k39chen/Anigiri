APIModule({
    id: "ANN",
    name: "Anime News Network",
    description: "The ANN module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs an ANN request for getting an anime's full details.
         *
         * @method getAnime
         * @param id {Array} The ANN anime id.
         * @return {Array} The anime's details.
         */
        APIMethod({
            name: "getAnime",
            description: "Performs an ANN request for getting an anime's full details.",
            parameters: [
                APIParameter("id", "String", "The ANN anime id.")
            ],
            payload: APIPayload("Object", "The anime's details.")
        }),
        /**
         * Performs an ANN request for getting a set of animes' full details.
         *
         * @method getAnimes
         * @param ids {Array} The ANN anime ids.
         * @return {Array} The animes' details.
         */
        APIMethod({
            name: "getAnimes",
            description: "Performs an ANN request for getting a set of animes' full details.",
            parameters: [
                APIParameter("ids", "Array", "The ANN anime ids.")
            ],
            payload: APIPayload("Array", "The animes' details.")
        }),
        /**
         * Performs an ANN search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "search",
            description: "Performs an ANN search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        })
    ]
});
