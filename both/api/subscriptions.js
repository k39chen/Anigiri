APIModel({
    id: "subscriptions",
    name: "Subscriptions",
    description: "The subscriptions model contains methods that exposes server-side functionality in a format that is simple for the client to interface and use. This model is also a connecting piece for logically connecting users objects and animes objects.",
    methods: [
        /**
         * Adds an anime subscription to the provided user's list of
         * existing subscriptions.
         *
         * @method add
         * @param user_id {String} The user id for which the subscription will be added.
         * @param anime_id {String} The anime id that this subscription maps to.
         * @return {Object} An instance of the added subscription.
         */
        APIMethod("add",
            "Adds an anime subscription to the provided user's list of existing subscriptions.",
            [
                APIParameter("user_id", "String", "The user id for which the subscription will be added."),
                APIParameter("anime_id", "String", "The anime id that this subscription maps to.")
            ],
            APIPayload("Object", "An instance of the added subscription.")
        ),
        /**
         * Removes an anime subscription from the provided user's list of
         * existing subscriptions.
         *
         * @method remove
         * @param subscription_id {String} The id of the subscription to remove.
         */
        APIMethod("remove",
            "Removes an anime subscription from the provided user's list of existing subscriptions.",
            [
                APIParameter("subscription_id", "String", "The id of the subscription to remove.")
            ]
        ),
        /**
         * Sets a value for this subscription's anime generation link.
         *
         * @method setGenerationLink
         * @param subscription_id {String} The subscription id to set the generation link for.
         */
        APIMethod("setGenerationLink",
            "Sets a value for this subscription's anime generation link.",
            [
                APIParameter("subscription_id", "String", "The subscription id to set the generation link for.")
            ]
        ),
        /**
         * Adds a song as acknowledged in the subscription.
         *
         * @method addSong
         * @param subscription_id {String} The subscription id.
         * @param song_id {String} The song id to add.
         */
        APIMethod("addSong",
            "Adds a song as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_id", "String", "The song id to add.")
            ]
        ),
        /**
         * Removes a song as acknowledged in the subscription.
         *
         * @method removeSong
         * @param subscription_id {String} The subscription id.
         * @param song_id {String} The song id to remove.
         */
        APIMethod("removeSong",
            "Removes a song as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_id", "String", "The song id to remove.")
            ]
        ),
        /**
         * Adds a list of songs as acknowledged in the subscription.
         *
         * @method addSongs
         * @param subscription_id {String} The subscription id.
         * @param song_ids {Array} The list of song ids to add.
         */
        APIMethod("addSongs",
            "Adds a list of songs as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_ids", "Array", "The list of song ids to add.")
            ]
        ),
        /**
         * Removes a list of songs as acknowledged in the subscription.
         *
         * @method removeSongs
         * @param subscription_id {String} The subscription id.
         * @param song_ids {Array} The list of song ids to remove.
         */
        APIMethod("removeSongs",
            "Removes a list of songs as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_ids", "Array", "The list of song ids to remove.")
            ]
        ),
        /**
         * Adds an episode as acknowledged in the subscription.
         *
         * @method addEpisode
         * @param subscription_id {String} The subscription id.
         * @param episode_id {String} The episode id to add.
         */
        APIMethod("addEpisode",
            "Adds an episode as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_id", "String", "The episode id to add.")
            ]
        ),
        /**
         * Removes an episode as acknowledged in the subscription.
         *
         * @method removeEpisode
         * @param subscription_id {String} The subscription id.
         * @param episode_id {String} The episode id to remove.
         */
        APIMethod("removeEpisode",
            "Removes an episode as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_id", "String", "The episode id to remove.")
            ]
        ),
        /**
         * Adds a list of episodes as acknowledged in the subscription.
         *
         * @method addEpisodes
         * @param subscription_id {String} The subscription id.
         * @param episode_ids {Array} The list of episode ids to add.
         */
        APIMethod("addEpisodes",
            "Adds a list of episodes as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_ids", "Array", "The list of episode ids to add.")
            ]
        ),
        /**
         * Removes a list of episodes as acknowledged in the subscription.
         *
         * @method removeEpisodes
         * @param subscription_id {String} The subscription id.
         * @param episode_ids {Array} The list of episode ids to remove.
         */
        APIMethod("removeEpisodes",
            "Removes a list of episodes as acknowledged in the subscription.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_ids", "Array", "The list of episode ids to remove.")
            ]
        ),
        /**
         * Recommends a subscribed anime to a friend.
         *
         * @method recommendToFriend
         * @param subscription_id {String} The subscription id.
         * @param friend_id {String} The id of the friend user that we want to recommend to.
         * @param qualifier {String} The strength of the recommendation.
         * @param comment {String} A plaintext comment to add to the recommendation email.
         */
        APIMethod("recommendToFriend",
            "Recommends a subscribed anime to a friend.",
            [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("friend_id", "String", "The id of the friend user that we want to recommend to."),
                APIParameter("qualifier", "String", "The strength of the recommendation."),
                APIParameter("comment", "String", "A plaintext comment to add to the recommendation email.")
            ]
        )
    ]
});
