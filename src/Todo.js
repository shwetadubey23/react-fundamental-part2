import React from 'react'
import { useContext } from 'react'
import { TodoContextProvider } from './TodoProvider'



export default function Todo({ id, title, completed }) {
    const { dispatch } = useContext(TodoContextProvider)

    const toggleComplete = () => {
        dispatch({
            type: 'TOGGLE_COMPLETE', payload: { id: id }
        })
        console.log('Call dispatch');
    }

    const handleTodoDelete = () => {
        dispatch({
            type: 'DELETE' , payload: {id: id}
        })
    }

    return (
        <div style={{ margin: '1rem', padding: '1rem', backgroundColor: 'paleturquoise', borderRadius: '1rem' }}>
            <p>id: {id} </p>
            <p>Title: {title} </p>
            <p>Completed: {completed ? 'true' : 'false'} </p>
            <button onClick={toggleComplete}>Toggle Complete</button>
            <button onClick={ handleTodoDelete}>Delete</button>
        </div>
    )
}
