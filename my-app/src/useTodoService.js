import api from "./api/mockApi";

export function useTodoService() {

  const loadTodos = (params) => {
    return api.get("/todos").then((response) => response.data);
  };

  const createTodo = (todoItem) => {
    return api
      .post("/todos", { text: todoItem.trim(), done: false })
      .then((response) => response.data);
  };

  const updateTodo = (updatedTodo) => {
    return api
      .put("/todos/" + updatedTodo.id, {
        ...updatedTodo,
        done: !updatedTodo.done,
      })
      .then((response) => response.data);
  };

  const deleteTodo = (id) => {
    return api.delete("/todos/" + id).then((response) => response.data);
  };

  return { loadTodos, createTodo, updateTodo, deleteTodo };
}
