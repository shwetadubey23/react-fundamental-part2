import React from 'react'

import { useContext } from 'react'
import {TodoContextProvider} from './TodoProvider'
import Todo from './Todo'

export default function Todos() {

    const {todosList} = useContext(TodoContextProvider)
    return (
        <div>
            {todosList.map((todo) => {
                return <Todo {...todo} key={todo.id}
                  
                />
            })}
        </div>
    )
}
