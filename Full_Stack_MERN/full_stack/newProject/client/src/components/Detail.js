import axios from "axios";
import React, { useEffect, useState } from "react";

const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { id } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people/" + id)
            .then((res) => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    );
};

export default Detail;
