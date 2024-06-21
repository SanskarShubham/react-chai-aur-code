import { useContext,createContext } from "react";

export const TodoContext = createContext({

    todos: [],
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider =  TodoContext.Provider
