import React, { useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

// components
import DeleteButton from "./DeleteButton";

const PersonList = (props) => {
    const { people, removeFromDom } = props;

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
                        <br />
                        <DeleteButton
                            personID={person._id}
                            successCallback={() => removeFromDom(person._id)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PersonList;
