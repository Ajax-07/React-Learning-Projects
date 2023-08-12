import React from "react";
import "./index.css";
import emojiArray from "./Data";
import Slot from "./Slot";

function App() {
  return (
    <>
      <h1 className="heading"> 🎰 Welcome to Slot Machine 🎰</h1>
      <div className="board">
        {emojiArray.map((value) => {
          return <Slot x={value.x} y={value.y} z={value.z} />;
        })}
      </div>
    </>
  );
}
export default App;
