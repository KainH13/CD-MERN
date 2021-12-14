import React, { useState } from "react";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ColorForm = (props) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.newBlock( color )
  };

  return (
    <Form onSubmit={ handleSubmit } className="col-sm-6 offset-sm-3 mt-2">
      <Form.Group className="mb-3 row align-items-center" controlId="color">
        <Form.Label className="col-sm-3">Color:</Form.Label>
        <div className="col-sm-9">
          <Form.Control type="text" onChange={ (e) => setColor(e.target.value) }/>
        </div>
      </Form.Group>
      <Button className="col-sm-11 offset-sm-1" variant="primary" type="submit">
        Add Block
      </Button>
    </Form>
  );
};

export default ColorForm;
