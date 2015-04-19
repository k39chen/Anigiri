Schemas.Recommendations = new SimpleSchema({
    "animeId": {
        type: AnimeId,
        label: "Anime ID"
    },
    "senderId": {
        type: UserId,
        label: "Sender ID"
    },
    "recipientId": {
        type: UserId,
        label: "Recipient ID"
    },
    "strength": {
        type: RecommendationStrength,
        label: "Strength"
    },
    "comment": {
        type: String,
        label: "Comment",
        defaultValue: null
    },
    "recommendedOn": SchemaTS
});
