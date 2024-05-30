import React from 'react'
import Todo from './Todo'

export default function Todos({ tasks, toggleCheckbox, removeTodo }) {
  return (
    <div >
      {tasks.map((task) => {
        return <Todo {...task} key={task.id} 
        toggleCheckbox={toggleCheckbox} 
        removeTodo={removeTodo}
       />
      })}

    </div>
  )
}
