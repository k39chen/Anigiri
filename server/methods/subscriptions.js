/*========================================================================*
 * SUBSCRIPTIONS API CONFIG
 *========================================================================*/
Subscriptions = {
    // ...
};
/*========================================================================*
 * SUBSCRIPTIONS API METHODS
 *========================================================================*/
/**
 * The subscriptions module contains methods that exposes server-side
 * functionality in a format that is simple for the client to interface
 * and use. This module is also a connecting piece for logically connecting
 * users objects and animes objects.
 *
 * @namespace Subscriptions
 */
Meteor.methods({
    /**
     * Adds an anime subscription to the provided user's list of
     * existing subscriptions.
     *
     * @method add
     * @param user_id {String} The user id for which the subscription will be added.
     * @param anime_id {String} The anime id that this subscription maps to.
     * @return {Object} An instance of the added subscription.
     */
    "Subscriptions.add": function(params) {
        printHeader("Subscriptions.add",params);
        // TODO: Implement this
    },
    /**
     * Removes an anime subscription from the provided user's list of
     * existing subscriptions.
     *
     * @method remove
     * @param subscription_id {String} The id of the subscription to remove.
     */
    "Subscriptions.remove": function(params) {
        printHeader("Subscriptions.remove",params);
        // TODO: Implement this
    },
    /**
     * Sets a value for this subscription's anime generation link.
     *
     * @method setGenerationLink
     * @param subscription_id {String} The subscription id to set the generation link for.
     */
    "Subscriptions.setGenerationLink": function(params) {
        printHeader("Subscriptions.setGenerationLink",params);
        // TODO: Implement this
    },
    /**
     * Adds a song as acknowledged in the subscription.
     *
     * @method addSong
     * @param subscription_id {String} The subscription id.
     * @param song_id {String} The song id to add.
     */
    "Subscriptions.addSong": function(params) {
        printHeader("Subscriptions.addSong",params);
        // TODO: Implement this
    },
    /**
     * Removes a song as acknowledged in the subscription.
     *
     * @method removeSong
     * @param subscription_id {String} The subscription id.
     * @param song_id {String} The song id to remove.
     */
    "Subscriptions.removeSong": function(params) {
        printHeader("Subscriptions.removeSong",params);
        // TODO: Implement this
    },
    /**
     * Adds a list of songs as acknowledged in the subscription.
     *
     * @method addSongs
     * @param subscription_id {String} The subscription id.
     * @param song_ids {Array} The list of song ids to add.
     */
    "Subscriptions.addSongs": function(params) {
        printHeader("Subscriptions.addSongs",params);
        // TODO: Implement this
    },
    /**
     * Removes a list of songs as acknowledged in the subscription.
     *
     * @method removeSongs
     * @param subscription_id {String} The subscription id.
     * @param song_ids {Array} The list of song ids to remove.
     */
    "Subscriptions.removeSongs": function(params) {
        printHeader("Subscriptions.removeSongs",params);
        // TODO: Implement this
    },
    /**
     * Adds an episode as acknowledged in the subscription.
     *
     * @method addEpisode
     * @param subscription_id {String} The subscription id.
     * @param episode_id {String} The episode id to add.
     */
    "Subscriptions.addEpisode": function(params) {
        printHeader("Subscriptions.addEpisode",params);
        // TODO: Implement this
    },
    /**
     * Removes an episode as acknowledged in the subscription.
     *
     * @method removeEpisode
     * @param subscription_id {String} The subscription id.
     * @param episode_id {String} The episode id to remove.
     */
    "Subscriptions.removeEpisode": function(params) {
        printHeader("Subscriptions.removeEpisode",params);
        // TODO: Implement this
    },
    /**
     * Adds a list of episodes as acknowledged in the subscription.
     *
     * @method addEpisodes
     * @param subscription_id {String} The subscription id.
     * @param episode_ids {Array} The list of episode ids to add.
     */
    "Subscriptions.addEpisodes": function(params) {
        printHeader("Subscriptions.addEpisodes",params);
        // TODO: Implement this
    },
    /**
     * Removes a list of episodes as acknowledged in the subscription.
     *
     * @method removeEpisodes
     * @param subscription_id {String} The subscription id.
     * @param episode_ids {Array} The list of episode ids to remove.
     */
    "Subscriptions.removeEpisodes": function(params) {
        printHeader("Subscriptions.removeEpisodes",params);
        // TODO: Implement this
    },
    /**
     * Recommends a subscribed anime to a friend.
     *
     * @method recommendToFriend
     * @param subscription_id {String} The subscription id.
     * @param friend_id {String} The id of the friend user that we want to recommend to.
     * @param qualifier {String} The strength of the recommendation.
     * @param comment {String} A plaintext comment to add to the recommendation email.
     */
    "Subscriptions.recommendToFriend": function(params) {
        printHeader("Subscriptions.recommendToFriend",params);
        // TODO: Implement this
    }
});
/*========================================================================*
 * SUBSCRIPTIONS API HELPERS
 *========================================================================*/
Subscriptions = _.extend(Subscriptions, {
    // ...
});
