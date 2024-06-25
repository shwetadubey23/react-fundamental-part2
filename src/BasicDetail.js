import React from 'react'
import { useAuth } from './AuthProvider'
// import { useContext } from 'react'
// import {AuthContext} from './AuthProvider'


export default function BasicDetail() {
//    const returnValue = useContext(AuthContext)
//    console.log('returnValue...',returnValue);

const {auth, setAuth} = useAuth()
// console.log(returnAuth);

const handleLogout = () => {
    setAuth({})
}

  return (
    <div>
       BasicDetail <br/>
       <p>name: {auth.name}</p>
       <p>email: {auth.email}</p>
       <button onClick={handleLogout}>logout</button>
    </div>
  )
}
