import React, { useReducer } from 'react'

import { createContext } from 'react'

export const TodoContextProvider = createContext()

function reducer(todoState, action) {

if(action.type === 'ADD_TODO') {
  return [...todoState, action.payload.newTodo]
}

if(action.type === 'DELETE') {
  return todoState.filter((todo) => {
    return todo.id !== action.payload.id 
  })
}

  if (action.type === 'TOGGLE_COMPLETE') {
   return todoState.map((ele) => {
      return (ele.id === action.payload.id) ? ({ ...ele, completed: !ele.completed }) : ele
      
      
    })
  }
  return todoState
}
const initialState = [
  { id: '1', title: 'Learn React', completed: true },
  { id: '2', title: 'Frontend', completed: false },
  { id: '3', title: 'Backend', completed: true }
]

export default function TodoProvider({ children }) {

  const [todosList, dispatch] = useReducer(reducer, initialState)

  // const toggleComplete = (id) => {
  //   setTodosList(privTodo => privTodo.map(ele => {

  //       return  ele.id === id ? {...ele, completed: !ele.completed} : ele


  //   }))
  // }

  // const handleTodoDelete = (id) => {
  //   setTodosList(privTodo => privTodo.filter((element) => {
  //     return element.id !== id

  //   }))
  // }

  // const addTodo = (newTodo) => {
  //   setTodosList(privTodo => [...privTodo, newTodo])
  // }

  return (
    <TodoContextProvider.Provider value={{ todosList, dispatch }}>
      {children}
    </TodoContextProvider.Provider>
  )
}
