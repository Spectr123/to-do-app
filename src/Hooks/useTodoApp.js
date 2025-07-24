import { useState, useMemo, useEffect } from "react";
import { getTodos, saveTodos } from "../utils/todoStorage";

// Здесь будут комментарии, потому что это бизнес логика и возможно не всем она будет понятна т.к я тоже человек и могу писать не понятный и местами говно-код)

function useTodoApp() {
  const [todos, setTodos] = useState(() => getTodos());
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);
  const [newTodo, setNewTodo] = useState("");

  const [searchValue, setSearchValue] = useState("");

  // Фильтрация и сортировка задач

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

  // Выполненные задачи сортируем по убыванию id, чтобы новые задачи были сверху

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed).sort((a, b) => b.id - a.id),
    [todos]
  );

  // Фильтрация задач по тексту поиска

  const filteredIncompleteTodos = useMemo(
    () =>
      incompleteTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [incompleteTodos, searchValue]
  );

  // Фильтрация выполненных задач по тексту поиска

  const filteredCompletedTodos = useMemo(
    () =>
      completedTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [completedTodos, searchValue]
  );

  // Функции для управления задачами

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

  // Добавление новой задачи

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false, important: false },
    ]);
  };

  // Удаление задачи

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Редактирование задачи

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Изменение важности задачи

  const toggleImportant = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  // Обработчик добавления новой задачи

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
