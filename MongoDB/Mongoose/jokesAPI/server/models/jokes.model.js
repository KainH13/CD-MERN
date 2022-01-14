const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Joke setup required."],
        },
        punchline: {
            type: String,
            required: [true, "Punchline required, don't leave us hanging!"],
        },
    },
    { timestamps: true }
);

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;
