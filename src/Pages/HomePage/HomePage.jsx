import React from "react";
import styles from "./HomePage.module.scss";
import TodoList from "../../Components/TodoList/TodoList";
import useTodoApp from "../../Hooks/useTodoApp";

export default function HomePage() {
  const {
    incompleteTodos,
    completedTodos,
    toggleTodo,
    deleteTodo,
    editTodo,
    newTodo,
    setNewTodo,
    handleAddTodo,
  } = useTodoApp();

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
      <TodoList
        incompleteTodos={incompleteTodos}
        completedTodos={completedTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}
