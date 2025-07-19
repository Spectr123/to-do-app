import { useState, useMemo } from "react";

function useTodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const incompleteTodos = useMemo(
    () => todos.filter((todo) => !todo.completed).sort((a, b) => b.id - a.id),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed).sort((a, b) => b.id - a.id),
    [todos]
  );

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return {
    todos,
    incompleteTodos,
    completedTodos,
    toggleTodo,
    addTodo,
    deleteTodo,
    editTodo,
    newTodo,
    setNewTodo,
    handleAddTodo,
  };
}

export default useTodoApp;
