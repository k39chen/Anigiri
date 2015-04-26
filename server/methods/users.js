/**
 * The users model contains methods that exposes server-side functionality
 * in a format that is simple for the client to interface and use.
 *
 * @namespace Users
 */
Meteor.methods({
    /**
     * Creates a sample user with the most minimal amount of user information.
     * Used for scalability and community testing.
     *
     * @method createSimpleUser
     * @param first_name {String} The first name of the user.
     * @param middle_name {String} The middle name of the user.
     * @param last_name {String} The last name of the user.
     * @return {Object} The user that was just created with the provided information.
     */
    "Users.createSimpleUser": function(params) {
        printHeader("Users.createSimpleUser",params);
        // TODO: Implement this
    },
    /**
     * Sends a friend request provided the originating user id and the
     * target user id.
     *
     * @method sendFriendRequest
     * @param from_user_id {String} The user id for the request sender.
     * @param to_user_id {String} The user id for the request recipient.
     */
    "Users.sendFriendRequest": function(params) {
        printHeader("Users.sendFriendRequest",params);
        // TODO: Implement this
    },
    /**
     * Accepts a friend request provided the originating user id and
     * the target user id.
     *
     * @method acceptFriendRequest
     * @param from_user_id {String} The user id for the request sender.
     * @param to_user_id {String} The user id for the request recipient.
     */
    "Users.acceptFriendRequest": function(params) {
        printHeader("Users.acceptFriendRequest",params);
        // TODO: Implement this
    },
    /**
     * Rejects a friend request provided the originating user id and
     * the target user id.
     *
     * @method rejectFriendRequest
     * @param from_user_id {String} The user id for the request sender.
     * @param to_user_id {String} The user id for the request recipient.
     */
    "Users.rejectFriendRequest": function(params) {
        printHeader("Users.rejectFriendRequest",params);
        // TODO: Implement this
    },
    /**
     * Sets the e-mail cron schedule so that emails are sent on the requested
     * interval.
     *
     * @method setEmailCronSchedule
     * @param user_id {String} The user id for which to set the schedule.
     * @param cron {String} The cron string representing the e-mailing schedule.
     */
    "Users.setEmailCronSchedule": function(params) {
        printHeader("Users.setEmailCronSchedule",params);
        // TODO: Implement this
    },
    /**
     * Removes a friend from the specified user's list of friends.
     *
     * @method removeFriend
     * @param user_id {String} The user id from which to remove the friend.
     * @param friend_id {String} The friend id to remove from the user.
     */
    "Users.removeFriend": function(params) {
        printHeader("Users.removeFriend",params);
        // TODO: Implement this
    },
    /**
     * Sends an invitation join Anigiri to an arbitrary email address.
     *
     * @method sendInvitation
     * @param user_id {String} The sender of the email.
     * @param email {String} The email address of the invitation recipient.
     * @param message {String} A customized message to send to the recipient.
     */
    "Users.sendInvitation": function(params) {
        printHeader("Users.sendInvitation",params);
        // TODO: Implement this
    },
    /**
     * Adds the specified subscription to the user's current subscription list.
     *
     * @method addSubscription
     * @param user_id {String} The user id that the subscription will be added to.
     * @param anime_id {String} The anime id to add to the subscription list.
     */
    "Users.addSubscription": function(params) {
        printHeader("Users.addSubscription",params);
        // TODO: Implement this
    },
    /**
     * Removes the specified anime subscription from the user's current
     * subscription list.
     *
     * @method removeSubscription
     * @param user_id {String} The user id from which the subscription will be removed.
     * @param anime_id {String} The anime id to remove from the subscription list.
     */
    "Users.removeSubscription": function(params) {
        printHeader("Users.removeSubscription",params);
        // TODO: Implement this
    }
});
