import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "@reach/router";

const PersonList = (props) => {
    const { people, setPeople } = props;

    const removeFromDom = (personID) => {
        setPeople(people.filter((person) => person._id !== personID));
    };

    const deletePerson = (personID) => {
        axios
            .delete(`http://localhost:8000/api/people/${personID}`)
            .then((res) => {
                removeFromDom(personID);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people")
            .then((res) => {
                console.log(res.data);
                setPeople(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {people.map((person, index) => {
                return (
                    <div key={index}>
                        <p>{person.lastName}</p>
                        <p>{person.firstName}</p>
                        <Link to={`/people/${person._id}`}>
                            {person.firstName}'s Page!
                        </Link>
                        <br />
                        <Link to={`/people/edit/${person._id}`}>Edit</Link>
                        <button
                            onClick={(e) => {
                                deletePerson(person._id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PersonList;
