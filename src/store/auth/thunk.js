import todoApi from "../../api/todoApi"
import { onChecking, onClearErrorMessage, onLogin, onLogout } from "./authSlice"
import Swal from "sweetalert2"
import { startLogoutClean } from "../todo/thunk"

export const startCreatingUser = ({ name, email, password }) => {
    return async (dispatch) => {
        dispatch(onChecking())

        try {

            const { data } = await todoApi.post('/auth/register', { name, email, password })
            localStorage.setItem('token', data.token)

            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {

            console.error(error)
            const errorMessage = error.response.data.errors[0]?.msg

            Swal.fire('Something went wrong', errorMessage, 'error')

            dispatch(onLogout({ errorMessage }))
            setTimeout(() => dispatch(onClearErrorMessage(), 10))

        }
    }
}

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(onChecking())

        try {

            const { data } = await todoApi.post('/auth/login', { email, password })

            localStorage.setItem('token', data.token)

            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {

            console.error(error)
            const errorMessage = error.response.data.errors[0]?.msg

            Swal.fire('Something went wrong', errorMessage, 'error')

            dispatch(onLogout({ errorMessage }))
            setTimeout(() => dispatch(onClearErrorMessage(), 10))

        }
    }
}

export const startLogout = () => {
    return (dispatch) => {

        dispatch(startLogoutClean())
        dispatch(onLogout())
    }
}