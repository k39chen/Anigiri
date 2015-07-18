APIModel({
    id: "Animes",
    name: "Animes",
    description: "The animes model contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs a search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "search",
            description: "Performs a search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        }),
        /**
         * Performs a search on ANN for an anime given an arbitrary title string.
         *
         * @method searchANN
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "searchANN",
            description: "Performs a search on ANN for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of ANN search results.")
        }),
        /**
         * Performs a search on Hummingbird for an anime given an arbitrary title string.
         *
         * @method searchHB
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "searchHB",
            description: "Performs a search on Hummingbird for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        }),
        /**
         * Fetches from the set of third-party sources to update the
         * requested anime.
         *
         * @method update
         * @param anime_id {String} The id of the anime that we wish to update.
         * @return {Object} The newly updated anime data.
         */
        APIMethod({
            name: "update",
            description: "Fetches from the set of third-party sources to update the requested anime.",
            parameters: [
                APIParameter("anime_id", "String", "The id of the anime that we wish to update.")
            ]
        }),
        /**
         * Removes an anime from the Anigiri anime repository.
         *
         * @method remove
         * @param anime_id {String} The id of the anime that we wish to remove.
         */
        APIMethod({
            name: "remove",
            description: "Removes an anime from the Anigiri anime repository",
            parameters: [
                APIParameter("anime_id", "String", "The id of the anime that we wish to remove.")
            ]
        })
    ]
});