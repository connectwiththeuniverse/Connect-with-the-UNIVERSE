import './App.css';
import React, { useReducer } from 'react';



function CustomFunction() {
  const initialState = 0;

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}


function App() {

  return (
    <div className="App" >
      <h1>React Application</h1>
      <CustomFunction />
    </div>
  );

}

export default App;
