APIModule({
    id: "Users",
    name: "Users",
    description: "The users model contains methods that exposes server-side functionality in a format that is simple for the client to interface and use.",
    methods: [
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
        APIMethod({
            name: "createSimpleUser",
            descriptions: "Creates a sample user with the most minimal amount of user information. Used for scalability and community testing.",
            parameters: [
                APIParameter("first_name", "String", "The first name of the user."),
                APIParameter("middle_name", "String", "The middle name of the user."),
                APIParameter("last_name", "String", "The last name of the user.")
            ],
            payload: APIPayload("Object", "The user that was just created with the provided information.")
        }),
        /**
         * Sends a friend request provided the originating user id and the
         * target user id.
         *
         * @method sendFriendRequest
         * @param from_user_id {String} The user id for the request sender.
         * @param to_user_id {String} The user id for the request recipient.
         */
        APIMethod({
            name: "sendFriendRequest",
            descriptions: "Sends a friend request provided the originating user id and the target user id.",
            parameters: [
                APIParameter("from_user_id", "String", "The user id for the request sender."),
                APIParameter("to_user_id", "String", "The user id for the request recipient.")
            ]
        }),
        /**
         * Accepts a friend request provided the originating user id and
         * the target user id.
         *
         * @method acceptFriendRequest
         * @param from_user_id {String} The user id for the request sender.
         * @param to_user_id {String} The user id for the request recipient.
         */
        APIMethod({
            name: "acceptFriendRequest",
            descriptions: "Accepts a friend request provided the originating user id and the target user id.",
            parameters: [
                APIParameter("from_user_id", "String", "The user id for the request sender."),
                APIParameter("to_user_id", "String", "The user id for the request recipient.")
            ]
        }),
        /**
         * Rejects a friend request provided the originating user id and
         * the target user id.
         *
         * @method rejectFriendRequest
         * @param from_user_id {String} The user id for the request sender.
         * @param to_user_id {String} The user id for the request recipient.
         */
        APIMethod({
            name: "rejectFriendRequest",
            descriptions: "Rejects a friend request provided the originating user id and the target user id.",
            parameters: [
                APIParameter("from_user_id", "String", "The user id for the request sender."),
                APIParameter("to_user_id", "String", "The user id for the request recipient.")
            ]
        }),
        /**
         * Sets the e-mail cron schedule so that emails are sent on the requested
         * interval.
         *
         * @method setEmailCronSchedule
         * @param user_id {String} The user id for which to set the schedule.
         * @param cron {String} The cron string representing the e-mailing schedule.
         */
        APIMethod({
            name: "setEmailCronSchedule",
            descriptions: "Sets the e-mail cron schedule so that emails are sent on the requested interval.",
            parameters: [
                APIParameter("user_id", "String", "The user id for which to set the schedule."),
                APIParameter("cron", "String", "The cron string representing the e-mailing schedule.")
            ]
        }),
        /**
         * Removes a friend from the specified user's list of friends.
         *
         * @method removeFriend
         * @param user_id {String} The user id from which to remove the friend.
         * @param friend_id {String} The friend id to remove from the user.
         */
        APIMethod({
            name: "removeFriend",
            descriptions: "Removes a friend from the specified user's list of friends.",
            parameters: [
                APIParameter("user_id", "String", "The user id from which to remove the friend."),
                APIParameter("friend_id", "String", "The friend id to remove from the user.")
            ]
        }),
        /**
         * Sends an invitation join Anigiri to an arbitrary email address.
         *
         * @method sendInvitation
         * @param user_id {String} The sender of the email.
         * @param email {String} The email address of the invitation recipient.
         * @param message {String} A customized message to send to the recipient.
         */
        APIMethod({
            name: "sendInvitation",
            descriptions: "Sends an invitation join Anigiri to an arbitrary email address.",
            parameters: [
                APIParameter("user_id", "String", "The sender of the email."),
                APIParameter("email", "String", "The email address of the invitation recipient."),
                APIParameter("message", "String", "A customized message to send to the recipient.")
            ]
        }),
        /**
         * Adds the specified subscription to the user's current subscription list.
         *
         * @method addSubscription
         * @param user_id {String} The user id that the subscription will be added to.
         * @param anime_id {String} The anime id to add to the subscription list.
         */
        APIMethod({
            name: "addSubscription",
            descriptions: "Adds the specified subscription to the user's current subscription list.",
            parameters: [
                APIParameter("user_id", "String", "The user id that the subscription will be added to."),
                APIParameter("anime_id", "String", "The anime id to add to the subscription list.")
            ]
        }),
        /**
         * Removes the specified anime subscription from the user's current
         * subscription list.
         *
         * @method removeSubscription
         * @param user_id {String} The user id from which the subscription will be removed.
         * @param anime_id {String} The anime id to remove from the subscription list.
         */
        APIMethod({
            name: "removeSubscription",
            descriptions: "Removes the specified anime subscription from the user's current subscription list.",
            parameters: [
                APIParameter("user_id", "String", "The user id from which the subscription will be removed."),
                APIParameter("anime_id", "String", "The anime id to remove from the subscription list.")
            ]
        })
    ]
});
