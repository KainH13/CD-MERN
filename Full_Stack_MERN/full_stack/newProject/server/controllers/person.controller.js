const Person = require("../models/person.model");

module.exports = {
    createPerson: (request, response) => {
        Person.create(request.body)
            .then((person) => {
                console.log(person);
                response.json(person);
            })
            .catch((err) => {
                console.log(err);
                response.json(err);
            });
    },

    getAllPeople: (request, response) => {
        Person.find({})
            .then((persons) => {
                console.log(persons);
                response.json(persons);
            })
            .catch((err) => {
                console.log(err);
                response.json(err);
            });
    },

    getPerson: (request, response) => {
        Person.findOne({ _id: request.params.id })
            .then((person) => {
                console.log(person);
                response.json(person);
            })
            .catch((err) => {
                console.log(err);
                response.json(err);
            });
    },

    updatePerson: (request, response) => {
        Person.findOneAndUpdate({ _id: request.params.id }, request.body, {
            new: true,
        })
            .then((updatedPerson) => {
                response.json(updatedPerson);
            })
            .catch((err) => {
                response.json(err);
            });
    },

    deletePerson: (request, response) => {
        Person.deleteOne({ _id: request.params.id })
            .then((deleteConfirmation) => response.json(deleteConfirmation))
            .catch((err) => response.json(err));
    },
};
