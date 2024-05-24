
import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  function handleUserName(e) {
    setUserName(e.target.value)
  }
  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <input type='text' value={userName} onChange={handleUserName} />
      </form>
    </div>
  );
}

export default App;
