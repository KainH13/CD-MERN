import React from 'react';

// bootstrap
import Card from 'react-bootstrap/Card'

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    return (
      <Card className="col-6 offset-3 p-2 mt-1">
        <h1>{ lastName }, { firstName }</h1>
        <p>Age: { age }</p>
        <p>Hair Color: { hairColor }</p>
      </Card>
    );
}

export default PersonCard;