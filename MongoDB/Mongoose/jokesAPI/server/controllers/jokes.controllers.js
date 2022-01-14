const Joke = require("../models/jokes.model");

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err) => {
                console.log("Find All failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    findOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneJoke) => {
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => {
                console.log("Find One failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newlyCreatedJoke) => {
                console.log(newlyCreatedJoke);
                res.json(newlyCreatedJoke);
            })
            .catch((err) => {
                console.log("Create failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => {
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err) => {
                console.log("Update failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                console.log("Delete failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },
};
