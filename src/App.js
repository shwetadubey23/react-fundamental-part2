import React, {useState} from 'react';
import './App.css';
import MouseMoveEvent from './MouseMoveEvent';
// import CleanUpFunction from './CleanUpFuctionDemo';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ExampleWithFetch from './ExampleWithFetch';

function App() {
  const [showComponent, setShowcomponent] = useState(true)
  return (
    <div className="App">
      {/* <ExampleWithFetch/> */}
      <label htmlFor="showComponent">Show component</label>
      <input type="checkbox" id="showComponent"
        name="showComponent" checked={showComponent}
        onChange={() => setShowcomponent(!showComponent)}
      />
      
      { showComponent && <MouseMoveEvent />}
      
    </div>
  );
}

export default App;
