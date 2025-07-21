import Title from "../../Components/Title/Title";
import styles from "./HomePage.module.scss";
import TodoList from "../../Components/TodoList/TodoList";
import useTodoApp from "../../Hooks/useTodoApp";
import NewTaskCreater from "../../Components/NewTaskCreater/NewTaskCreater";

export default function HomePage() {
  const {
    incompleteTodos,
    completedTodos,
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
      <Title />
      <NewTaskCreater
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        incompleteTodos={incompleteTodos}
        completedTodos={completedTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onToggleImportant={toggleImportant}
      />
    </div>
  );
}
