import React from "react";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ColorForm = (props) => {
  return (
    <Form className="col-sm-6 offset-sm-3 mt-2">
      <Form.Group className="mb-3 row align-items-center" controlId="color">
        <Form.Label className="col-sm-3">Color:</Form.Label>
        <div className="col-sm-9">
          <Form.Control type="text"/>
        </div>
      </Form.Group>
      <Button className="col-sm-11 offset-sm-1" variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ColorForm;
