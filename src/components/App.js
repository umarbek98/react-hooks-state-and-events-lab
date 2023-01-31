import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false) 
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"
  const btnText = isDarkMode ? "Dark Mode" : "Light Mode" 

  function handleClick(){
    setIsDarkMode(prevValue => !prevValue)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{btnText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
