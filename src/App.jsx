import { useState } from "react";
import "./styles.css";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo() {
    if (!value) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), name: value, completed: false },
    ]);
    setValue("");
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id, e) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: e.target.checked };
        }

        return todo;
      })
    );
  }

  return (
    <>
      <h1>Todo App</h1>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
