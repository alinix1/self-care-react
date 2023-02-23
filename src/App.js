import React, { useState } from "react";
import "./App.css";
import { affirmations, mantras } from "./data.js";
import background from  "./assets/background-img.png";
// import meditation from "./assets/meditation-man.png";

function App() {
  const [selected, setSelected] = useState("affirmation");
  const [statement, setStatement] = useState("🔔");

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
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&family=Inter:wght@400;500;700&family=Montserrat&family=Righteous&family=Rubik:wght@400;500;600;700&family=Shantell+Sans:wght@400;600;700&family=Sono:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <div className="background-img">
      <img src={background}
      alt="picture of rain drops"></img>
      </div>
      <h1 className="title">Self Care Center</h1>
      <h2 className="sub-title">Which type of message?</h2>
      <div className="form-box-container">
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
      </div>
      <section className="info-box">
        <p className="uplifting-message">{statement}</p>
      </section>
    </div>
  );
}

export default App;
