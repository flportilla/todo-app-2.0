
import todoApi from '../../api/todoApi'
import { closeModal, openModal } from '../modal/modalSlice'
import { onAddNewTodo, onComplete, onDeleteTodo, onLoading, onLoadTodos, onLogout, onSetActiveTodo, onUpdateTodo } from './todoSlice'

export const startCompletingTodo = (todo) => {
    return async (dispatch) => {

        try {
            await todoApi.put(`/todo/${todo.id}`, { ...todo, isComplete: !todo.isComplete })
            dispatch(onComplete(todo))

        } catch (error) {
            console.log(error)
        }
    }
}

export const startSavingTodo = (activeTodo, newTitle) => {
    return async (dispatch) => {

        try {

            if (!activeTodo) {
                const { data } = await todoApi.post('/todo', { title: newTitle })
                dispatch(onAddNewTodo(data))
                dispatch(closeModal())
                return
            }

            const { data } = await todoApi.put(`/todo/${activeTodo.id}`, { title: newTitle })

            await dispatch(onUpdateTodo(data))
            dispatch(closeModal())
        } catch (error) {
            console.log(error)
        }
    }
}

export const startLoadingTodos = () => {
    return async (dispatch) => {

        try {
            const { data } = await todoApi.get('/todo')
            dispatch(onLoadTodos(data.todos))

        } catch (error) {
            console.log(error)
        }
    }
}

export const startDeletingTodo = (todo) => {
    return async (dispatch) => {
        dispatch(onLoading())
        try {

            await todoApi.delete(`/todo/${todo.id}`)
            dispatch(onDeleteTodo(todo))

        } catch (error) {
            console.log(error)
        }
    }
}

export const startLogoutClean = () => {
    return async (dispatch) => {
        dispatch(onLogout())
        localStorage.clear()
    }
}

export const startOpeningModal = (todo) => {
    return async (dispatch) => {
        dispatch(openModal())
        dispatch(onSetActiveTodo(todo))
    }
}
export const startClosingModal = () => {
    return async (dispatch) => {
        dispatch(closeModal())
    }
}