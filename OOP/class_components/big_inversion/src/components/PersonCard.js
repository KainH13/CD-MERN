import React, { Component } from "react";

// bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: this.props.age,
        };
    }

    
    render() {
        const { firstName, lastName, hairColor } = this.props;
        
        const addAge = () => {
            let x = this.state.currentAge + 1;
            this.setState({ currentAge: x });
        };
        
        return (
            <Card className="col-6 offset-3 p-2 mt-1">
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>Age: {this.state.currentAge}</p>
                <p>Hair Color: {hairColor}</p>
                <Button
                    variant="outline-primary"
                    className="col-4"
                    onClick={addAge}
                >
                    Birthday!
                </Button>
            </Card>
        );
    }
}

export default PersonCard;
