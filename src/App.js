import './App.css';
import React from 'react';
import Cookie from "./components/cokie";
import Shop from "./components/shop";
import InfoPanel from "./components/infoPanel";

function App() {

  return (
          <div className="App">
              <InfoPanel/>
              <Cookie />
              <Shop />
          </div>
  );
}

export default App;
