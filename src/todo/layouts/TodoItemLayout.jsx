import React from 'react'
import { useDispatch } from 'react-redux'
import { startCompletingTodo, startDeletingTodo } from '../../store/todo/thunk'

export const TodoItemForm = ({ todo, children, isLoadingTodos }) => {

    const dispatch = useDispatch()

    return (
        <form className="todo-item-form">
            <label className='todo-item-label'>
                <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => dispatch(startCompletingTodo(todo))}
                />
                <span className="todo-item-title">{todo.title}</span>
                <hr />
            </label>
            <>
                {children}
            </>
            <button
                disabled={isLoadingTodos}
                type="button"
                className="todo-item-button"
                onClick={() => dispatch(startDeletingTodo(todo))}
            >
                Delete
            </button>
        </form>
    )
}
