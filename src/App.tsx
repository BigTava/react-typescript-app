import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

const initialState = {
  name: "Manny",
  message: "Typescript is cool!",
};

// do not use this in production. Define the type
type State = Readonly<typeof initialState>;

function App() {
  // let firstValue: number[] = [2, 3, 4];
  // let firstValue: Array<number> = [2, 3, 4];
  let aTuple: [string, number] = ["Manny", 34];
  /* enum Codes {
    first, 
    second,
  }*/
  let state: State = initialState;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>
        <Message name={state.name} message="This is a quick message" />
      </header>
    </div>
  );
}

export default App;
