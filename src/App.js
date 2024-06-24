import { useReducer } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';


function reducer(todoState, action) {
if(action.type === 'DELETE'  ) {
 return todoState.filter((todo) => {
  return todo.id !== action.payload.id 
 })
// console.log('Deleting todo');
// console.log(action.payload.id);
}

if(action.type === 'TOGGEL_COMPLETED') {
  return todoState.map((todo) => {
    if(todo.id === action.payload.id) {
      return {...todo, completed: !todo.completed}
    }
    // console.log('Toggle');
    return todo
  })
}

if(action.type === 'ADD_TODO') {
return [...initialState, action.payload.newTodo]
}

return todoState
}

const initialState = [
    {id: "1", title: 'learn useReducer', completed: true},
    {id: "2", title: 'learn react', completed: false}, 
    {id: "3", title: 'become full stack', completed: false}
] 


function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState)
  
 
  return (
    <div className="App">
    <AddTodo dispatch={dispatch}/>
     <Todos todoState = {todoState} dispatch = {dispatch} />
    </div>
  );
}

export default App;
