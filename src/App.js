
import { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  function handleUserName(e) {
    setUserName(e.target.value)
  }
  function handelPassword(e) {
    setPassword(e.target.value)
  }

  function handelformSubmit(e) {
    e.preventDefault()
    console.log('submit');
  }
  return (
    <div className="App">
      <form onSubmit={handelformSubmit}>
        <div>
          <label>User Name:</label>
          <input type='text' value={userName} onChange={handleUserName} />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={handelPassword} />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default App;
