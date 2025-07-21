import styles from "./NewTaskCreater.module.scss";

export default function NewTaskCreater({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo} className={styles.form}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Добавить новую задачу"
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        Добавить
      </button>
    </form>
  );
}
