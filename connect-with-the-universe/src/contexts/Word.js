import { reducer } from './WordReducer';
import { initialState } from './WordTypes';
import React, { useReducer } from 'react';



function Word() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const handleInputChange = (event) => {
    dispatch({ type: 'SET_WORD', payload: event.target.value });
  };

  const generateSentences = () => {
    dispatch({ type: 'GENERATE_SENTENCES' });
  };

  return (
    <div className="App">
      <div className="middledoc">
        <div className="grid-container">
          <div className="grid-item">
            <div className="flex-container">
              <div className="flex-item">
                Sunucu Modülü: <br />
                Methodology: <br />
                <div>
                  <input
                    type="text"
                    value={state.word}
                    onChange={handleInputChange}
                  />
                  <button onClick={generateSentences}>Cümle Oluştur</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          {state.sentences.map((sentence, index) => (
            <div className="grid-item" key={index}>
              <div className="flex-container">
                <div className="flex-item">{sentence}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Word;
