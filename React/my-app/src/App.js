import React from "react";
import './App.css';
import Welcome from "./welcomeComponent";
import Button from "./components/button";

const App = () => {
  return (
    <>
    <div class="App">
      <h1>Hello</h1>
      <Welcome name="Rafi"/>
      <Button/>
    </div>
      </>
  );
}

export default App;
