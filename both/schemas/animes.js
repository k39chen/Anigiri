/**
 * Third-Party Service Schema
 */
Schemas.ThirdPartyService = new SimpleSchema({
    "id": {
        type: TpsId,
        label: "TPS ID"
    },
    "data": {
        type: Object,
        optional: true,
        blackbox: true
    },
    "lastUpdated": {
        type: Date,
        label: "Last Updated",
        autoValue: function() {
            return new Date;
        }
    }
});
/**
 * Animes Schema
 */
Schemas.Animes = new SimpleSchema({
    /**
     * Third-Party Services
     */
    "ann": {
        type: Schemas.ThirdPartyService,
        label: "Anime News Network",
        defaultValue: {}
    },
    "tvdb": {
        type: Schemas.ThirdPartyService,
        label: "TV DB",
        defaultValue: {}
    },
    "hummingbird": {
        type: Schemas.ThirdPartyService,
        label: "Hummingbird",
        defaultValue: {}
    },
    /**
     * Metadata
     */
    "description": {
        type: String,
        label: "Description",
        defaultValue: null
    },
    "communityRating": {
        type: Number,
        label: "Community Rating",
        defaultValue: null
    },
    "ageRating": {
        type: String,
        label: "Age Rating",
        defaultValue: null
    },
    "genres": {
        type: [String],
        label: "Genres",
        defaultValue: []
    },
    "themes": {
        type: [String],
        label: "Themes",
        defaultValue: []
    },
    /**
     * Images
     */
    "bannerImageUrl": {
        type: "String",
        label: "Banner Image URL",
        defaultValue: null
    },
    "posterImageUrl": {
        type: "String",
        label: "Poster Image URL",
        defaultValue: null
    },
    /**
     * Airing
     */
    "airingStatus": {
        type: String,
        label: "Airing Status",
        defaultValue: null
    },
    "startedAiring": {
        type: Date,
        label: "Started Airing",
        defaultValue: null
    },
    "endedAiring": {
        type: Date,
        label: "Ended Airing",
        defaultValue: null
    },
    /**
     * Episodes
     */
    "episodes": {
        type: [EpisodeId],
        label: "Episodes",
        defaultValue: []
    },
    "episodeCount": {
        type: Number,
        label: "Episode Count",
        defaultValue: null
    },
    "episodeLength": {
        type: Number,
        label: "Episode Length",
        defaultValue: null
    },
    /**
     * Songs
     */
    "openingSongs": {
        type: [SongId],
        label: "Opening Songs",
        defaultValue: []
    },
    "endingSongs": {
        type: [SongId],
        label: "Ending Songs",
        defaultValue: []
    },
    "insertSongs": {
        type: [SongId],
        label: "Insert Songs",
        defaultValue: []
    },
    "lastUpdated": {
        type: Date,
        label: "Last Updated",
        autoValue: function() {
            return new Date;
        }
    }
});
