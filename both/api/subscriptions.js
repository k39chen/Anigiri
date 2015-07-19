APIModule({
    id: "Subscriptions",
    name: "Subscriptions",
    description: "The subscriptions module contains methods that exposes server-side functionality in a format that is simple for the client to interface and use. This module is also a connecting piece for logically connecting users objects and animes objects.",
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
        APIMethod({
            name: "add",
            description: "Adds an anime subscription to the provided user's list of existing subscriptions.",
            parameters: [
                APIParameter("user_id", "String", "The user id for which the subscription will be added."),
                APIParameter("anime_id", "String", "The anime id that this subscription maps to.")
            ],
            payload: APIPayload("Object", "An instance of the added subscription.")
        }),
        /**
         * Removes an anime subscription from the provided user's list of
         * existing subscriptions.
         *
         * @method remove
         * @param subscription_id {String} The id of the subscription to remove.
         */
        APIMethod({
            name: "remove",
            description: "Removes an anime subscription from the provided user's list of existing subscriptions.",
            parameters: [
                APIParameter("subscription_id", "String", "The id of the subscription to remove.")
            ]
        }),
        /**
         * Sets a value for this subscription's anime generation link.
         *
         * @method setGenerationLink
         * @param subscription_id {String} The subscription id to set the generation link for.
         */
        APIMethod({
            name: "setGenerationLink",
            description: "Sets a value for this subscription's anime generation link.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id to set the generation link for.")
            ]
        }),
        /**
         * Adds a song as acknowledged in the subscription.
         *
         * @method addSong
         * @param subscription_id {String} The subscription id.
         * @param song_id {String} The song id to add.
         */
        APIMethod({
            name: "addSong",
            description: "Adds a song as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_id", "String", "The song id to add.")
            ]
        }),
        /**
         * Removes a song as acknowledged in the subscription.
         *
         * @method removeSong
         * @param subscription_id {String} The subscription id.
         * @param song_id {String} The song id to remove.
         */
        APIMethod({
            name: "removeSong",
            description: "Removes a song as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_id", "String", "The song id to remove.")
            ]
        }),
        /**
         * Adds a list of songs as acknowledged in the subscription.
         *
         * @method addSongs
         * @param subscription_id {String} The subscription id.
         * @param song_ids {Array} The list of song ids to add.
         */
        APIMethod({
            name: "addSongs",
            description: "Adds a list of songs as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_ids", "Array", "The list of song ids to add.")
            ]
        }),
        /**
         * Removes a list of songs as acknowledged in the subscription.
         *
         * @method removeSongs
         * @param subscription_id {String} The subscription id.
         * @param song_ids {Array} The list of song ids to remove.
         */
        APIMethod({
            name: "removeSongs",
            description: "Removes a list of songs as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("song_ids", "Array", "The list of song ids to remove.")
            ]
        }),
        /**
         * Adds an episode as acknowledged in the subscription.
         *
         * @method addEpisode
         * @param subscription_id {String} The subscription id.
         * @param episode_id {String} The episode id to add.
         */
        APIMethod({
            name: "addEpisode",
            description: "Adds an episode as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_id", "String", "The episode id to add.")
            ]
        }),
        /**
         * Removes an episode as acknowledged in the subscription.
         *
         * @method removeEpisode
         * @param subscription_id {String} The subscription id.
         * @param episode_id {String} The episode id to remove.
         */
        APIMethod({
            name: "removeEpisode",
            description: "Removes an episode as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_id", "String", "The episode id to remove.")
            ]
        }),
        /**
         * Adds a list of episodes as acknowledged in the subscription.
         *
         * @method addEpisodes
         * @param subscription_id {String} The subscription id.
         * @param episode_ids {Array} The list of episode ids to add.
         */
        APIMethod({
            name: "addEpisodes",
            description: "Adds a list of episodes as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_ids", "Array", "The list of episode ids to add.")
            ]
        }),
        /**
         * Removes a list of episodes as acknowledged in the subscription.
         *
         * @method removeEpisodes
         * @param subscription_id {String} The subscription id.
         * @param episode_ids {Array} The list of episode ids to remove.
         */
        APIMethod({
            name: "removeEpisodes",
            description: "Removes a list of episodes as acknowledged in the subscription.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("episode_ids", "Array", "The list of episode ids to remove.")
            ]
        }),
        /**
         * Recommends a subscribed anime to a friend.
         *
         * @method recommendToFriend
         * @param subscription_id {String} The subscription id.
         * @param friend_id {String} The id of the friend user that we want to recommend to.
         * @param qualifier {String} The strength of the recommendation.
         * @param comment {String} A plaintext comment to add to the recommendation email.
         */
        APIMethod({
            name: "recommendToFriend",
            description: "Recommends a subscribed anime to a friend.",
            parameters: [
                APIParameter("subscription_id", "String", "The subscription id."),
                APIParameter("friend_id", "String", "The id of the friend user that we want to recommend to."),
                APIParameter("qualifier", "String", "The strength of the recommendation."),
                APIParameter("comment", "String", "A plaintext comment to add to the recommendation email.")
            ]
        })
    ]
});
