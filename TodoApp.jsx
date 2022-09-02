import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './src/router/AppRouter'
import { store } from './src/store'

export const TodoApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}
