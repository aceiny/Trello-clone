import React from 'react'
import { useSelector } from 'react-redux'
import AuthPage from '../pages/AuthPage'

const SecureRoutes = ({elem}) => {
    const isAuth = useSelector(state => state.Auth.authenticated)
  return (
    <>
        {isAuth ? elem : <AuthPage/>}
    </>
  )
}

export default SecureRoutes