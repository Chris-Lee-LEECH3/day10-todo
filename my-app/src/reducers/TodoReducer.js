export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo) => todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case "ADD_TODO":
        return [...state, action.payload];
    case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};