import React, { useState } from "react";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateTodo = (props) => {
  const { todos, setTodos } = props;

  // set up form attributes
  const [todo, setTodo] = useState("");

  // handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        todo: todo,
        completed: false,
        id: Math.floor(Math.random() * 10000).toString(),
      },
    ]);

    // clear out inputs so that previous info doesn't stay in there after submit
    setTodo("");
  };

  return (
    <Form className="col-sm-6 offset-sm-3 mt-2" onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Todo:</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          name="todo"
        />
      </Form.Group>
      <Button className="col-sm-3" variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default CreateTodo;
