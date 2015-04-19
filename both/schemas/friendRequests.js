Schemas.FriendRequests = new SimpleSchema({
    "senderId": {
        type: UserId,
        label: "Sender ID"
    },
    "recipientId": {
        type: UserId,
        label: "Recipient ID"
    },
    "status": {
        type: AckLevel,
        label: "Status",
        defaultValue: Enums.AckLevel.Pending
    },
    "requestedOn": SchemaTS
});
