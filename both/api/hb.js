APIModule({
    id: "HB",
    name: "Hummingbird",
    description: "The Hummingbird module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs an Hummingbird request for getting an anime's full details.
         *
         * @method getAnime
         * @param id {String} The Hummingbird anime id.
         * @return {Object} The anime details.
         */
        APIMethod({
            name: "getAnime",
            description: "Performs an Hummingbird request for getting an anime's full details.",
            parameters: [
                APIParameter("id", "String", "The Humminggird anime id.")
            ],
            payload: APIPayload("Array", "The anime details.")
        }),
        /**
         * Performs a Hummingbird search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "search",
            description: "Performs a Hummingbird search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        })
    ]
});
