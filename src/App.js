
import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  function handleUserName(e) {
    setUserName(e.target.value)
  }
  function handelformSubmit(e) {
   e.preventDefault()
console.log('submit');
  }
  return (
    <div className="App">
      <form onSubmit={handelformSubmit}>
        <label>Name:</label>
        <input type='text' value={userName} onChange={handleUserName} />
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default App;
