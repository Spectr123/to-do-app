import React from "react";
import styles from "./TodoItem.module.scss";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
