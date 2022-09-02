import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startOpeningModal } from '../../store/todo/thunk'
import { TodoItemForm } from '../layouts/TodoItemLayout'
import { ModalForm } from './ModalForm'

export const TodoItem = ({ isPending }) => {

    const { todos, isLoadingTodos } = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const pendingTodos = todos.filter(todo => !todo.isComplete)
    const completedTodos = todos.filter(todo => todo.isComplete)

    return (
        <>
            {
                isPending
                    ? pendingTodos.map(todo => (
                        <TodoItemForm
                            isLoadingTodos={isLoadingTodos}
                            key={todo.id}
                            todo={todo}>
                            <button
                                className="todo-item-button"
                                type="button"
                                onClick={() => dispatch(startOpeningModal(todo))}
                                disabled={isLoadingTodos}
                            >
                                Edit
                            </button>
                        </TodoItemForm >
                    ))
                    : completedTodos.map(todo => (
                        <TodoItemForm
                            key={todo.id}
                            todo={todo}
                            children={null}
                            isLoadingTodos={isLoadingTodos}
                        />
                    ))
            }

            <ModalForm />
        </>
    )
}
