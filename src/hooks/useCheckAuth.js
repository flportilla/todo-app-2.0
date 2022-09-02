import { useSelector, useDispatch } from 'react-redux'
import todoApi from '../api/todoApi'
import { onLogin, onLogout } from '../store/auth/authSlice'

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const checkToken = async () => {

        const token = localStorage.getItem('token')

        if (!token) return dispatch(onLogout())

        try {
            const { data } = await todoApi.get('/auth/renew')
            localStorage.setItem('token', data.token)

            dispatch(
                onLogin({
                    name: data.name,
                    uid: data.uid
                })
            )
        } catch (error) {
            dispatch(onLogout())
            localStorage.clear()
        }
    }
    return { status, checkToken }
}
