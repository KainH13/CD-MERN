import React from "react";
import { NavItem } from "react-bootstrap";

const ViewTodos = (props) => {
  const { todos, setTodos, deleteTodoById } = props;

  const handleCompleted = (todo) => {
    todo.completed = !todo.completed;
    let updateTodos = [...todos];
    setTodos(updateTodos);
  }

  const styled = (completed) => {
    if(completed === true){
      return "card-body col-4 completed"
    }
    else{
      return "card-body col-4 notCompleted"
    }
  }

  return (
    <div className="container col-sm-6 offset-sm-3 mt-2">
      {todos.map((todo, index) => (
        <div className="row" key={index}>
          <div className="d-inline-flex border align-items-center">
            <div className={styled(todo.completed)}>{todo.todo}</div>
            <input
              type="checkbox"
              className="col-2"
              onChange={() => {
                handleCompleted(todo)
              }}
            />
            <button
              className="col-3 btn btn-outline-danger my-2"
              onClick={() => deleteTodoById(todo.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewTodos;
