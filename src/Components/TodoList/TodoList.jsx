import React from "react";
import TodoItem from "../Todoitem/TodoItem";
import styles from "./TodoList.module.scss";

function TodoList({ incompleteTodos, completedTodos, onToggle, onDelete, onEdit }) {

  return (
    <ul className={styles.list}>
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

      {completedTodos.length > 0 && incompleteTodos.length > 0 && (
        <div className={styles.completedDivider}>
          Выполненные задачи ({completedTodos.length})
        </div>
      )}

      {completedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
