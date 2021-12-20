import React, { useState } from "react";
import './App.css';

import CreateTodo from "./components/CreateTodo";
import ViewTodos from "./components/ViewTodos";

function App() {
  // set up main todo list
  const [todos, setTodos] = useState([]);

  const deleteTodoById = (id) => {
    setTodos(todos.filter((todo, index) => todo.id !== id));
  };

  return (
    <div className="App">
      <CreateTodo todos={todos} setTodos={setTodos}/>
      <ViewTodos
        todos={todos}
        setTodos={setTodos}
        deleteTodoById={deleteTodoById}
      />
    </div>
  );
}

export default App;
