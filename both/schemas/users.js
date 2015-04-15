Schemas.Users = {
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email
    },
    subscriptions: {
        type: [Object],
        label: "Subscriptions"
    },
    "subscriptions.$.subscriptionId": {
        type: String,
        label: "Subscription ID"
    },
    "subscriptions.$.subscribedOn": {
        type: Date,
        label: "Added On",
        denyUpdate: true,
        autoValue: autoDate
    },
    friends: {
        type: [Object],
        label: "Friends"
    },
    "friends.$.userId": {
        type: String,
        label: "User ID",
    },
    "friends.$.addedOn": {
        type: Date,
        label: "Added On",
        denyUpdate: true,
        autoValue: autoDate
    },
    pendingRequests: {
        type: [Object],
        label: "Pending Requests"
    },
    "pendingRequests.$.requesterId": {
        type: String,
        label: "Requester ID"
    },
    "pendingRequests.$.recipientId": {
        type: String,
        label: "Recipient ID"
    },
    "pendingRequests.$.requestTimestamp": {
        type: Date,
        label: "Request Timestamp",
        denyUpdate: true,
        autoValue: autoDate
    },
    "animesRecommended": {
        type: [Object],
        label: "Recommended Animes"
    },
    "animesRecommended.$.recommenderId": {
        type: String,
        label: "Recommender ID"
    },
    "animesRecommended.$.recommendedOn": {
        type: Date,
        label: "Request Timestamp",
        denyUpdate: true,
        autoValue: autoDate
    },
    emailSchedule: {
        type: String,
        label: "Email Schedule"
    },
    joinedOn: {
        type: Date,
        label: "Joined On",
        denyUpdate: true,
        autoValue: autoDate
    }
};
