import React, {useState} from 'react';
import './App.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ExampleWithFetch from './ExampleWithFetch';

function App() {
  const [showComponent, setShowcomponent] = useState(true)
  return (
    <div className="App">
      <label htmlFor="showComponent">Show component</label>
      <input type="checkbox" id="showComponent"
        name="showComponent" checked={showComponent}
        onChange={() => setShowcomponent(!showComponent)}
      />
      
      { showComponent && <ExampleWithFetch/> }
      
    </div>
  );
}

export default App;
