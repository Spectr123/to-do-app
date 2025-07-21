import { useState, useMemo } from "react";

function useTodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const incompleteTodos = useMemo(
    () =>
      todos
        .filter((todo) => !todo.completed)
        .sort((a, b) => {
          if (a.important !== b.important) {
            return a.important ? -1 : 1;
          }
          return b.id - a.id;
        }),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed).sort((a, b) => b.id - a.id),
    [todos]
  );

  const filteredIncompleteTodos = useMemo(
    () =>
      incompleteTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [incompleteTodos, searchValue]
  );

  const filteredCompletedTodos = useMemo(
    () =>
      completedTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [completedTodos, searchValue]
  );

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              important: !todo.completed ? todo.important : false,
            }
          : todo
      )
    );
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false, important: false },
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

  const toggleImportant = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
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
    filteredIncompleteTodos,
    filteredCompletedTodos,
    searchValue,
    setSearchValue,
    toggleTodo,
    addTodo,
    deleteTodo,
    editTodo,
    toggleImportant,
    newTodo,
    setNewTodo,
    handleAddTodo,
  };
}

export default useTodoApp;
