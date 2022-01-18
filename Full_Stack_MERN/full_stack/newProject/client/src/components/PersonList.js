import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "@reach/router";

const PersonList = (props) => {
    const { people, removeFromDom } = props;

    const deletePerson = (personID) => {
        axios
            .delete(`http://localhost:8000/api/people/${personID}`)
            .then((res) => {
                removeFromDom(personID);
            })
            .catch((err) => console.log(err));
    };

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
