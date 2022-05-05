import './App.css';
import React from 'react';
import Cookie from "./components/cokie";
//import {useState} from "react";
import {useStateFromLocalStorage} from "./hooks/useStateFromLocalStorage";
import Shop from "./components/shop";
//import uuid from "uuid";

function App() {

  const [clickCount, setClickCount] = useStateFromLocalStorage('clicksCounts', 0);
  const [powerClick, setPowerClick] = useStateFromLocalStorage('powerClick', 1);
  return (
    <div className="App">
      <h1>{clickCount}. Power: {powerClick}</h1>
      <Cookie setClickCount={setClickCount} clickCount={clickCount} powerClick={powerClick}/>
      <Shop setPowerClick={setPowerClick} powerClick={powerClick} clickCount={clickCount} setClickCount={setClickCount}/>
    </div>
  );
}

export default App;
