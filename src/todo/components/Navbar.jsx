import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiUserCheck, BiLogOut } from 'react-icons/bi'
import { startLogout } from '../../store/auth/thunk'

export const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <nav className="navbar">
            <div className="user-icon-container">
                <BiUserCheck className="user-icon" />
                <span className="current-user-name"> Welcome {user.name}</span>
            </div>

            <div className="logout-icon-container">
                <BiLogOut
                    onClick={() => dispatch(startLogout())}
                    className="logout-icon" />
            </div>
        </nav>
    )
}
