import './App.css';
import React, {useContext} from 'react';
import Cookie from "./components/cokie";
import Shop from "./components/shop";
import {GameContext} from "./gameСontext";

function App() {
    const {clickCount, powerClick} = useContext(GameContext);

  return (
          <div className="App">
            <h1>{clickCount}. Power: {powerClick}</h1>
            <Cookie />
            <Shop />
          </div>
  );
}

export default App;
