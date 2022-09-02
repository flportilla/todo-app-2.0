import React from 'react'
import { useForm } from '../../hooks'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startCreatingUser } from '../../store/auth/thunk'
import Swal from 'sweetalert2'

const initialForm = {
    name: '',
    email: '',
    password: '',
    password2: ''
}

export const Register = () => {

    const { name, email, password, password2, onInputChange } = useForm(initialForm)
    const dispatch = useDispatch()

    const onSubmitRegister = (event, { name, email, password }) => {
        event.preventDefault()

        if (password2 !== password) {
            return Swal.fire("Passwords don't match", 'Please check your passwords', 'warning')
        }

        dispatch(startCreatingUser({ name, email, password }))
    }

    return (
        <form
            className='form-control'
            onSubmit={(event) => onSubmitRegister(event, { name, email, password })}
        >
            <h3>Register</h3>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onInputChange}
            />
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
            <input
                autoComplete="on"
                type="password"
                placeholder="Repeat password"
                name="password2"
                value={password2}
                onChange={onInputChange}
            />
            <Link
                className='new-user-anchor'
                to="/auth/login">
                Go back to login
            </Link>
            <button
                className="btn"
                type="submit"> Submit</button>
        </form>
    )
}
