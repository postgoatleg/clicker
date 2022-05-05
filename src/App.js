import './App.css';
import Cookie from "./components/cokie";
import {useState} from "react";

function App() {

  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="App">
    <h1>{clickCount}</h1>
    <Cookie setClickCount={setClickCount} clickCount={clickCount}/>
    </div>
  );
}

export default App;
