import React from 'react'
import BasicDetail from './BasicDetail'
import { useAuth } from './AuthProvider'

export default function UserProfile() {
    const {auth, setAuth} = useAuth()

const handleLogin = () => {
    setAuth({name: 'Shweta', email: 'shweta@gmail.com'})
}

  return (
    <>
    <h1>UserProfile</h1>
   { auth.name ?( <BasicDetail/>) : (<button onClick={handleLogin}>login</button>)}
    </>
  )
}
