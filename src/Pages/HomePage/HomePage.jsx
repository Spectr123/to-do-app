import React from "react";
import Title from "../../Components/Title/Title";
import styles from "./HomePage.module.scss";
import TodoList from "../../Components/TodoList/TodoList";
import useTodoApp from "../../Hooks/useTodoApp";
import NewTaskCreater from "../../Components/NewTaskCreater/NewTaskCreater";
import SearchTask from "../../Components/SearchTask/SearchTask";

export default function HomePage() {
  const {
    filteredIncompleteTodos,
    filteredCompletedTodos,
    searchValue,
    setSearchValue,
    toggleTodo,
    deleteTodo,
    editTodo,
    toggleImportant,
    newTodo,
    setNewTodo,
    handleAddTodo,
  } = useTodoApp();

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <Title />
        <SearchTask searchValue={searchValue} onSearchChange={setSearchValue} />
      </div>
      <NewTaskCreater
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        incompleteTodos={filteredIncompleteTodos}
        completedTodos={filteredCompletedTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onToggleImportant={toggleImportant}
      />
    </div>
  );
}
