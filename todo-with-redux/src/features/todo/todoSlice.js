import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            state.todos = [...state.todos, {id :nanoid(),todo : action.payload}]
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer