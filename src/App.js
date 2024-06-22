import { useReducer } from 'react';
import './App.css';


function App() {
  function reducer(state, action) {
    if (action.type === "INCRMENT") {
      return { ...state, count: state.count + 1 }
    }

    if (action.type === "Decrement") {
      return { ...state, count: state.count - 1 }
    }

    if (action.type === "RESET") {
      return { ...state, count: 0 }
    }

    return state
  }

  const initialState = { count: 0 }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrease = () => {
    dispatch({
      type: "INCRMENT"
    })
  }

  const handleDecrease = () => {
    dispatch({
      type: "Decrement"
    })
  }

  const handleReset = () => {
    dispatch({
      type: "RESET"
    })
  }

  return (
    <div className="App">
      <h1>UseReducer</h1>
      <hr />
      <h2>Counter Application</h2>
      <h2>{state.count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
