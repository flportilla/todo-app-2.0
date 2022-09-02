import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingTodos } from '../../store/todo/thunk'
import { AddTodoButton } from '../components/AddTodoButton'
import { TodoItem } from '../components/TodoItem'


export const TodoPage = () => {

    const { todos } = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startLoadingTodos())

    }, [todos])

    return (
        <>
            <div className="tasks-container">

                <AddTodoButton />

                <div className="tasks-card">
                    <h1 className="tasks-title">Pending tasks</h1>
                    <hr />
                    <TodoItem isPending />
                </div>

                <div className="tasks-card">
                    <h1 className="tasks-title">Completed tasks</h1>
                    <hr />
                    <TodoItem isPending={false} />
                </div>

                <AddTodoButton />
            </div>

        </>
    )
}
