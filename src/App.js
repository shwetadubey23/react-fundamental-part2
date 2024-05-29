import { useState } from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Learn React', isCompleted: false},
    {id: 2, title: 'Learn JavaScript', isCompleted: true},
    {id: 3, title: 'Learn MongoDb', isCompleted: false}
  ])

const addTodo = (newTodo) => {
  setTasks(previce => [...previce, newTodo])
}

const toggleCheckbox = (id) => {
 setTasks((previce) => {
  return previce.map((completed) => {
    if(completed.id === id) {
    console.log(completed.id, id);
     return {...completed, isCompleted: !completed.isCompleted} 
    } else {
      return completed
    }
  }) 
 })
}
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo ={addTodo}/>
      <Todos tasks={tasks} toggleCheckbox= {toggleCheckbox} />
    </div>
  );
}

export default App;
