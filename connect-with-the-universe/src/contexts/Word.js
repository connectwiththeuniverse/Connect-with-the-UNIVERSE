import { reducer } from './WordReducer';
import { initialState } from './WordTypes';
import React, { useReducer } from 'react';



function Word() {


  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}


export default Word;
