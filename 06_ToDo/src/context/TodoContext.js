import { useContext, createContext } from "react";

export const TodoContext = createContext({
  toDos: [
    {
      id: 1,
      todo: "Learn JavaScript",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, toDo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

//Custom Hook
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
