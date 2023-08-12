import React from "react";
import "./index.css";
import Card from "./Card";
import dataArray from "./Data";

function App() {
  return (
    <>
      <h1>My favourite movies and show</h1>
      <div className="cards">
        {dataArray.map(
          (value)=>{
            return (
              <Card
              key={value.key}
              pic={value.pic}
              ottName={value.ottName}
              title={value.title}
              link={value.link}
            />
            )
          }
        )}
      </div>
    </>
  );
}

export default App;
