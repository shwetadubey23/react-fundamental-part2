import React, { useState }  from 'react'
import './App.css'
export default function AddTodo({ dispatch}) { 
  
const [addTodo, setAddTodo] = useState('')

const submitAddTodo = (e) => {
e.preventDefault()
const newTodo = {
    title: addTodo,
    completed: false,
    id: crypto.randomUUID()
}
dispatch({
    type: 'ADD_TODO', payload: {newTodo: newTodo}
})
setAddTodo('')
// console.log('Submit  form');
// console.log(addTodo);
}

const addNewTodo = (e) => {
    setAddTodo(e.target.value)
}

    return (
      <form onSubmit={submitAddTodo}>
        <input type='text' placeholder='Add Todo' name='title' id='title' value={addTodo} onChange={addNewTodo} /> {' '}
        <button type='submit'>Add</button>
      </form>
    )

}
