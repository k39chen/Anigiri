Schemas = {};

/**
 * Defines basic types for each schema instance.
 */
AnimeId = String;
EpisodeId = String;
FriendRequestId = String;
RecommendationId = String;
SongId = String;
SubscriptionId = String;
UserId = String;

/**
 * Automatically inserts a timestamp date.
 *
 * @property SchemaTS
 */
SchemaTS = {
    type: Date,
    label: "Added On",
    denyUpdate: true,
    autoValue: function() {
        if (this.isInsert) {
            return new Date;
        } else if (this.isUpsert) {
            return {$setOnInsert: new Date};
        } else {
            this.unset();
        }
    }
};
