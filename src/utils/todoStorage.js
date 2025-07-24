// в будущем я думаю будет не сложно сделать сервер и бд для проекта вместо localStorage

const STORAGE_KEY = "todos";

export function getTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error(e);
  }
}
