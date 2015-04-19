Schemas.Episodes = new SimpleSchema({
    "title": {
        type: String,
        label: "Title"
    },
    "index": {
        type: Number,
        label: "Index",
        min: 0
    },
    "season": {
        type: Number,
        label: "Season",
        min: 0,
        defaultValue: null
    },
    "episode": {
        type: Number,
        label: "Episode",
        min: 0,
        defaultValue: 0
    },
    "description": {
        type: String,
        label: "Description",
        defaultValue: null
    },
    "airedOn": {
        type: Date,
        label: "Aired On",
        defaultValue: null
    },
    "imageUrl": {
        type: String,
        label: "Image URL",
        defaultValue: null
    }
});
