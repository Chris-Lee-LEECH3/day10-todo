import { createContext } from "react";

export const TodoContext = createContext();

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: true },
];