import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from '../TodoApp'
import './styles.css'

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)
