import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { startOpeningModal } from '../../store/todo/thunk'

export const AddTodoButton = () => {

    const dispatch = useDispatch()

    return (
        <div className="add-task-container">
            <h2 className="add-task-title">Click to add a new Todo</h2>
            <i>
                <BiPlusCircle
                    className="add-todo-icon"
                    onClick={() => dispatch(startOpeningModal())}
                />
            </i>
        </div>
    )
}
