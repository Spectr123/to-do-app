import React from "react";
import TodoItem from "../Todoitem/TodoItem";
import styles from "./TodoList.module.scss";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
