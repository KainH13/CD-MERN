import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// components
import PersonForm from "../components/PersonForm";

const Update = (props) => {
    const { id } = props;

    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/people/${id}`)
            .then((res) => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updatePerson = (person) => {
        axios
            .put(`http://localhost:8000/api/people/${id}`, person)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        navigate("/people");
    };

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                />
            )}
        </div>
    );
};

export default Update;
