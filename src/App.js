import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [flag, setFlag] = React.useState("");
  const [flagFromButton, setFlagFromButton] = React.useState("");

  function handleClick() {
    setFlagFromButton(flag);
  }

  React.useEffect(() => {
    axios
      .get("	https://api.adviceslip.com/advice") //using the advice slip api
      .then((response) => {
        const { advice } = response.data.slip;
        setFlag(advice);
      })
      .catch((error) => console.log(error));
  }, [flagFromButton]);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{flag}</h1>
        <button className="button" onClick={handleClick}>
          Give me an advice!
        </button>
      </div>
    </div>
  );
}

export default App;
