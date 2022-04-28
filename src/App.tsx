import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
function App() {
  // let firstValue: number[] = [2, 3, 4];
  // let firstValue: Array<number> = [2, 3, 4];
  let aTuple: [string, number] = ["Manny", 34];
  /* enum Codes {
    first, 
    second,
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>
        <Message message="This is a quick message" />
      </header>
    </div>
  );
}

export default App;
