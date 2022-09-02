import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks'
import { Link } from 'react-router-dom'
import { startLogin } from '../../store/auth/thunk'

const initialForm = {
    email: '',
    password: ''
}

export const Login = () => {

    const { email, password, onInputChange } = useForm(initialForm)
    const dispatch = useDispatch()

    const onSubmitLogin = (event, { email, password }) => {
        event.preventDefault()
        dispatch(startLogin({ email, password }))
    }

    return (
        <form
            className='form-control'
            onSubmit={(event) => onSubmitLogin(event, { email, password })}
        >
            <h3>Login</h3>
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                autoComplete="on"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <Link
                className="new-user-anchor"
                to='/auth/register'
            >
                new user? Click here</Link>
            <button
                className="btn"
                type="submit"> Submit</button>
        </form>
    )
}
