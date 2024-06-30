import './App.css';
import Todos from './Todos';
import TodoProvider from './TodoProvider';
import AddNewTodo from './AddNewTodo';

function App() {

  return (
    <div className='App'>
      <TodoProvider>
        <AddNewTodo />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;