import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.scss";
import {FiEdit2, FiTrash2 } from "react-icons/fi";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    } else if (!editText.trim()) {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') handleSave();
  }
  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ""} ${isEditing ? styles.editing : ""}`}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        {isEditing ? (
          <div className={styles.editContainer}>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              className={styles.editInput}
              autoFocus
            />
          </div>
        ) : (
          <span 
            className={styles.text} 
            onClick={!todo.completed ? handleEditClick : undefined}
            title={todo.text}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className={styles.actions}>
        {!isEditing && !todo.completed && (
          <button onClick={handleEditClick} className={styles.editButton} title="Редактировать">
            <FiEdit2 />
            <span>Ред.</span>
          </button>
        )}
        <button onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }} className={styles.deleteButton} title="Удалить">
          <FiTrash2 />
          <span>Удалить</span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
