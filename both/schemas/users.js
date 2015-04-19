Schemas.Users = new SimpleSchema({
    "joinedOn": SchemaTS,
    /**
     * User Profile Information
     */
    "services": {
        type: Object,
        optional: true,
        blackbox: true
    },
    "email": {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email
    },
    /**
     * Metadata
     */
    "emailSchedule": {
        type: String,
        label: "Email Schedule"
    },
    /**
     * List of Subscriptions
     */
    "subscriptions": {
        type: [SubscriptionId],
        label: "Subscriptions",
        defaultValue: []
    },
    /**
     * List of Friends
     */
    "friends": {
        type: [Object],
        label: "Friends",
        defaultValue: []
    },
    "friends.$.userId": {
        type: UserId,
        label: "User ID",
    },
    "friends.$.addedOn": SchemaTS,
    /**
     * List of Friend Requests
     */
    "friendRequests": {
        type: [FriendRequestId],
        label: "Friend Requests",
        defaultValue: []
    },
    /**
     * Outgoing Anime Recommendations
     */
    "animesRecommended": {
        type: [RecommendationId],
        label: "Recommended Animes",
        defaultValue: []
    }
});
