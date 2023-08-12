import React from "react";

function Match(props) {
  return (
    <>
      <div className="slot">
        <span>
          {props.x} {props.y} {props.z}
        </span>
        <p style={{ color: props.color }}>This is mathching</p>
      </div>
      <hr />
    </>
  );
}

export default Match;
