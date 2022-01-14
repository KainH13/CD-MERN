const JokesController = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes", JokesController.createJoke);
    app.get("/api/jokes/:_id", JokesController.findSingleJoke);
    app.put("/api/jokes/:_id", JokesController.updateJoke);
    app.delete("/api/jokes/:_id", JokesController.deleteJoke);
};