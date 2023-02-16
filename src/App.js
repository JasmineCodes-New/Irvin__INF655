import React, { useState } from "react";

function TodoList(props) {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" checked={todo.completed} />
          {todo.description}
        </li>
      ))}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { description, completed: false }]);
    setDescription("");
  };

  return (
    <div>
      <TodoList todos={todos} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoApp;
