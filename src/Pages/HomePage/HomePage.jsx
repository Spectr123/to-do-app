import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import TodoList from "../../Components/TodoList/TodoList";
import useTodos from "../../Hooks/useTodos";

export default function HomePage() {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo} className={styles.form}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
