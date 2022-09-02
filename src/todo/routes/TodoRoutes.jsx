import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { TodoPage } from '../pages/TodoPage'

export const TodoRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/todo" element={<TodoPage />} />
                <Route path='/*' element={<Navigate to="/todo" />} />
            </Routes>
        </>
    )
}