APIModule({
    id: "IMDB",
    name: "IMDB",
    description: "The IMDB module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs an IMDB search for an anime given an arbitrary anime id.
         *
         * @method searchById
         * @param id {String} The id of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "searchById",
            description: "Performs an IMDB search for an anime given an arbitrary anime id.",
            parameters: [
                APIParameter("id", "String", "The id of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        }),
        /**
         * Performs an IMDB search for an anime given an arbitrary title string.
         *
         * @method searchByTitle
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "searchByTitle",
            description: "Performs an IMDB search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        })
    ]
});
