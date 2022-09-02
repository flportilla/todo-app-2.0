import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {

        isLoadingTodos: true,
        todos: [],
        activeTodo: null

    },
    reducers: {
        onSetActiveTodo: (state, { payload }) => {
            state.activeTodo = payload
        },
        onAddNewTodo: (state, { payload }) => {

            state.todos.unshift(payload)
            state.activeTodo = null
        },
        onUpdateTodo: (state, { payload }) => {
            state.activeTodo = null
            state.todos = state.todos.map(todo => {

                if (todo.id === payload.id) {
                    return payload
                }
                return todo
            })
        },
        onComplete: (state, { payload }) => {
            state.activeTodo = null
            state.todos = state.todos.map(todo => {

                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                }
                return todo
            })
        },
        onDeleteTodo: (state, { payload }) => {
            state.isLoadingTodos = false,
                state.todos = state.todos.filter(todo => todo.id !== payload.id)
            state.activeTodo = null

        },
        onLoadTodos: (state, { payload = [] }) => {
            state.isLoadingTodos = false
            payload.map(todo => {

                const exist = state.todos.some(dbTodo => dbTodo.id === todo.id)

                if (!exist) {
                    state.todos.push(todo)
                }
            })
        },
        onLogout: (state) => {
            state.isLoadingTodos = true,
                state.todos = [],
                state.activeTodo = null
        },
        onLoading: (state) => {
            state.isLoadingTodos = true
        }
    },
});

export const {
    onAddNewTodo,
    onDeleteTodo,
    onSetActiveTodo,
    onUpdateTodo,
    onComplete,
    onLoadTodos,
    onLogout,
    onLoading
} = todoSlice.actions;