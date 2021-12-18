import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import ViewTodos from "./components/ViewTodos";

function App() {
  // set up main todo list
  const [todos, setTodos] = useState([]);

  // elevating completed state
  const [completed, setCompleted] = useState(false);

  const deleteTodoById = (id) => {
    setTodos(todos.filter((todo, index) => todo.id !== id));
  };

  return (
    <div className="App">
      <CreateTodo todos={todos} setTodos={setTodos} completed={completed} />
      <ViewTodos
        todos={todos}
        deleteTodoById={deleteTodoById}
        completed={completed}
        setCompleted={setCompleted}
      />
      {console.log(todos)}
    </div>
  );
}

export default App;