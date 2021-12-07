import React, { useState } from 'react';

// bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [currentAge, setAge] = useState(age)
    const addAge = () => {
      setAge(currentAge + 1)
    }
    return (
      <Card className="col-6 offset-3 p-2 mt-1">
        <h1>{ lastName }, { firstName }</h1>
        <p>Age: { currentAge }</p>
        <p>Hair Color: { hairColor }</p>
        <Button variant="outline-primary" onClick={ addAge }>Birthday!</Button>
      </Card>
    );
}

export default PersonCard;