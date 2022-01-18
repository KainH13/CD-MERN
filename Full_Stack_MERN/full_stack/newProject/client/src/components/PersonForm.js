import React, { useState } from "react";

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;

    // use state to track form input values
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    // handle form submission
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});

        setFirstName("");
        setLastName("");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <br />
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </p>
            <p>
                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </p>
            <input type="submit" />
        </form>
    );
};

export default PersonForm;
