import React, { useState } from "react";
import './App.css';
import Welcome from "./welcomeComponent";
import Button from "./components/button";

const App = () => {

  const [nama, setName] = useState ("Rafi")
  const [gender, setGender] = useState ("Laki-Laki")

  const handleChangeName = () => {
    setName(nama === "Rafi"  ?  "Abdurrafi" : "Rafi")
    setGender(gender === "Laki-Laki"  ?  "Perempuan" : "Laki-Laki")
  
  }

  return (
    <>
    <div class="App">
      { gender === "Laki-Laki" ? <span>Mr.</span> : <span>Mrs.</span> }
      <span>{ nama }</span>
      <button onClick={handleChangeName}> Change Text </button>
      <hr/>
      <Welcome name="Rafi"/>
      <Button/>
    </div>
      </>
  );
}

export default App;
