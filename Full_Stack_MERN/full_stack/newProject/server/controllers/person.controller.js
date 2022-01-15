const Person = require("../models/person.model");

module.exports = {
    createPerson: (request, response) => {
        Person.create(request.body)
            .then((person) => response.json(person))
            .catch((err) => response.json(err));
    },

    getAllPeople: (request, response) => {
        Person.find({})
            .then(persons => {
                console.log(persons);
                response.json(persons);
            })
            .catch(err => {
                console.log(err);
                response.json(err);
            })
    }
};
