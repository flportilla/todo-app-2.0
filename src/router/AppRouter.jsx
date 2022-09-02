import React, { useEffect } from 'react'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { TodoRoutes } from '../todo/routes/TodoRoutes'


export const AppRouter = () => {

  const { status, checkToken } = useCheckAuth()

  useEffect(() => {
    checkToken()

  }, [status])

  if (status === 'checking') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {
        (status === 'not-authenticated')
          ? <AuthRoutes />
          : <TodoRoutes />
      }
    </>

  )
}
