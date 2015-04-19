Schemas.Episodes = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    season: {
        type: Number,
        label: "Season",
        optional: true,
        min: 0
    },
    episode: {
        type: Number,
        label: "Episode",
        min: 0
    },
    index: {
        type: Number,
        label: "Index",
        min: 0
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    },
    airedOn: {
        type: Date,
        label: "Aired On",
        optional: true
    },
    imageUrl: {
        type: String,
        label: "Image URL",
        optional: true
    }
});
