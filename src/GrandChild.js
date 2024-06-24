import React, {useContext} from 'react'
import { MyAppContext } from './App'

// step 1: import useContext 
//  step 2: import context veriable which is made for provider

export default function GrandChild() {
   const returnValMyFunc = useContext(MyAppContext)
    return (
        <div style={{ padding: '2rem', backgroundColor: '#FFD9B7' }}>
            <h1>GrandChild</h1>
            <button onClick={returnValMyFunc} >Call My Func</button>
        </div>
    )
}
