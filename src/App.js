import React, { useState } from "react";
import "./App.css";
import { affirmations, mantras } from "./data.js";
// import meditation from  "./assets/meditation.png";

function App() {
  const [selected, setSelected] = useState("affirmation");
  const [statement, setStatement] = useState('🛎️');

  const randomGenerator = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const radioChange = (event) => {
    setSelected(event.target.value);
  };

  const generateStatement = () => {
    selected === "affirmation"
      ? setStatement(randomGenerator(affirmations))
      : setStatement(randomGenerator(mantras));
  };

  return (
    <div>
      <h1 className="title">Self Care Center</h1>
      <h2 className="sub-title">Which type of message?</h2>
      <section className="form-box">
        <input
          name="care-type"
          type="radio"
          value="affirmation"
          id="affirmation"
          defaultChecked={selected === "affirmation" ? true : false}
          onChange={radioChange}
          className="radio-button"
        />
        <label forhtml="affirmation">Affirmation</label>
        <input
          name="care-type"
          type="radio"
          value="mantra"
          id="mantra"
          defaultChecked={selected === "mantra" ? true : false}
          onChange={radioChange}
          className="radio-button"
        />
        <label forhtml="mantra">Mantra</label>
        <button onClick={generateStatement} className="btn">
          Click
        </button>
      </section>
      <section className="info-box">
        <p>{statement}</p>
      </section>
    </div>
  );
}

export default App;
