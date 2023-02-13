import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title">Self Care Center</h1>
      <h2 className="sub-title">Which type of message?</h2>
      <section className="form-box">
        <input 
        type="radio"
        value="affirmation"
        id="affirmation"
        className="radio-button"
        />
        <label 
        forhtml="affirmation"
        >
          Affirmation
         </label>
         <input 
        type="radio"
        value="affirmation"
        id="affirmation"
        className="radio-button"
        />
        <label 
        forhtml="affirmation"
        >
          Affirmation
         </label>
      </section>
      <section className="info-box"></section>
    </div>
  );
}

export default App;
