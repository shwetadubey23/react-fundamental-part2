import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './index'

export default function BasicDetail() {
   const returnValue = useContext(AuthContext)
  return (
    <div>
        <h1>BasicDetail</h1>
<h4>name: {returnValue.userName}</h4>
<h4>email: {returnValue.email}</h4>
    </div>
  )
}
