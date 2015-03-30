API_MODELS.push(
APIModel("Anime",
    "The animes model contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    [
        /**
         * Performs a search for an anime given an arbitrary title string.
         *
         * @method search
         * @param title_str {String} The title of the anime that we want to search.
         * @return {Array} The list of search results.
         */
        APIMethod("search",
            "Performs a search for an anime given an arbitrary title string.",
            [
                APIParameter("title_str", "String", "The title of the anime that we want to search.")
            ],
            APIPayload("Array", "The list of search results.")
        ),
        /**
         * Fetches from the set of third-party sources to update the
         * requested anime.
         *
         * @method update
         * @param anime_id {String} The id of the anime that we wish to update.
         * @return {Object} The newly updated anime data.
         */
        APIMethod("update",
            "Fetches from the set of third-party sources to update the requested anime.",
            [
                APIParameter("anime_id", "String", "The id of the anime that we wish to update.")
            ]
        ),
        /**
         * Removes an anime from the Anigiri anime repository.
         *
         * @method remove
         * @param anime_id {String} The id of the anime that we wish to remove.
         */
        APIMethod("remove",
            "Removes an anime from the Anigiri anime repository",
            [
                APIParameter("anime_id", "String", "The id of the anime that we wish to remove.")
            ]
        )
    ]
)
);
