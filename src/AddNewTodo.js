import React, { useContext, useState } from 'react'
import { TodoContextProvider } from './TodoProvider'


export default function AddNewTodo() {
  const [newTask, setNewTask] = useState('')

 const {dispatch} = useContext(TodoContextProvider)

const handleAddTodo = (e) => {
    setNewTask(e.target.value)
}

const submitTodo = (e) => {
e.preventDefault()
const newTodo = {
    title: newTask,
    completed: false,
    id: crypto.randomUUID()
}

dispatch({
  type: 'ADD_TODO',
  payload: {newTodo}})
console.log('submitTodo');
setNewTask('')
}

  return (
    <form onSubmit={submitTodo} >
        <input style={{margin: '1rem', borderRadius: '1rem', backgroundColor: 'paleturquoise'}}
        type='text' placeholder='Add Todo' name='title' id='title' value={newTask}  onChange={handleAddTodo}/> {' '}
        <button type='submit'>Add</button>
    </form>
  )
}
