APIModule({
    id: "ADB",
    name: "AniDB",
    description: "The AniDB module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
        /**
         * Performs an AniDB request for getting an anime's full details.
         *
         * @method getAnime
         * @param aid {String} The AniDB anime id.
         * @return {Object} The anime details.
         */
        APIMethod({
            name: "getAnime",
            description: "Performs an AniDB request for getting an anime's full details.",
            parameters: [
                APIParameter("aid", "String", "The AniDB anime id.")
            ],
            payload: APIPayload("Object", "The anime details.")
        }),
        /**
         * Performs an AniDB search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod({
            name: "search",
            description: "Performs an AniDb search for an anime given an arbitrary title string.",
            parameters: [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            payload: APIPayload("Array", "The list of search results.")
        }),
        /**
         * Performs an AniDB request for fetching batch main requests.
         *
         * @method getMain
         * @return {Object} The bucketed responses.
         */
        APIMethod({
            name: "getMain",
            description: "Performs an AniDB request for fetching batch main requests.",
            parameters: [],
            payload: APIPayload("Array", "The bucketed responses.")
        }),
        /**
         * Performs an AniDB request for currently hot anime.
         *
         * @method getHotAnime
         * @return {Array} The list of hot anime.
         */
        APIMethod({
            name: "getHotAnime",
            description: "Performs an AniDB request for currently hot anime.",
            parameters: [],
            payload: APIPayload("Array", "The list of hot anime.")
        }),
        /**
         * Performs an AniDB request for two similar animes.
         *
         * @method getRandomSimilar
         * @return {Array} The list of similar anime.
         */
        APIMethod({
            name: "getRandomSimilar",
            description: "Performs an AniDB request for two similar animes.",
            parameters: [],
            payload: APIPayload("Array", "The list of similar anime.")
        }),
        /**
         * Performs an AniDB request for random recommendations.
         *
         * @method getRandomRecommendation
         * @return {Array} The list of random recommended animes.
         */
        APIMethod({
            name: "getRandomRecommendation",
            description: "Performs an AniDB request for random recommendations.",
            parameters: [],
            payload: APIPayload("Array", "The list of random recommended animes.")
        })
    ]
});
