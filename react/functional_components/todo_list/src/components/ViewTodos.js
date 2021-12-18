import React from "react";

const ViewTodos = (props) => {
  const { todos, deleteTodoById, completed, setCompleted } = props;

  return (
    <div className="container col-sm-6 offset-sm-3 mt-2">
      {todos.map((todo, index) => (
        <div className="row" key={index}>
          <div className="d-inline-flex border align-items-center">
            <div className="card-body col-4">{todo.todo}</div>
            <input
              type="checkbox"
              className="col-2"
              value={todo.completed}
              onChange={() => {
                setCompleted( todo.completed ? false : true )
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
