Schemas.Subscriptions = new SimpleSchema({
    "subscribedOn": SchemaTS,
    /**
     * Metadata
     */
    "userId": {
        type: UserId,
        label: "User ID"
    },
    "animeId": {
        type: AnimeId,
        label: "Anime ID"
    },
    "status": {
        type: SubscriptionStatus,
        label: "Status",
        defaultValue: Enums.SubscriptionStatus.Backlogged
    },
    "generationLinkUrl": {
        type: String,
        label: "Generation Link URL",
        defaultValue: null
    },
    /**
     * List of Songs
     */
    "songs": {
        type: [Object],
        label: "Songs",
        defaultValue: []
    },
    "songs.$.songId": {
        type: SongId,
        label: "Song ID"
    },
    "songs.$.status": {
        type: AckLevel,
        label: "Status",
        defaultValue: Enums.AckLevel.Pending
    },
    "songs.$.latestActionOn": {
        type: Date,
        label: "Latest Action On",
        autoValue: function() {
            return new Date;
        }
    },
    /**
     * List of Episodes
     */
    "episodes": {
        type: [Object],
        label: "Episodes",
        defaultValue: []
    },
    "episodes.$.episodeId": {
        type: EpisodeId,
        label: "Episode ID"
    },
    "episodes.$.status": {
        type: AckLevel,
        label: "Status",
        defaultValue: Enums.AckLevel.Pending
    },
    "episodes.$.latestActionOn": {
        type: Date,
        label: "Latest Action On",
        autoValue: function() {
            return new Date;
        }
    }
});
