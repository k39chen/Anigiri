APIModule({
    id: "TVDB",
    name: "TVDB",
    description: "The TVDB module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs a TVDB search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "search",
            description: "Performs a TVDB search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        })
    ]
});
