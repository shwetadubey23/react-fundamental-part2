import { createContext } from 'react';
import './App.css';
import MyComponent from './MyComponent';


// to avoid prov drilling we use context

// how to use context
// step 1: import createContext from React
// step 2: create a context outside the cmponent
// step 3: wrap application in context.Provider

export const MyAppContext = createContext()

function App() {
  function myFunc() {
    console.log('Hello from my func');
  }
  return (
    <MyAppContext.Provider value={myFunc}>
      <div style={{ padding: '2rem', backgroundColor: '#C8E4B2', height: '100vh', margin: '1rem' }}>
        <h1>App</h1>
        <MyComponent myFunc={myFunc} />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
// export {MyAppContext}