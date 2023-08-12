import React from "react";

function NonMatch(props) {
  return (
    <>
      <div className="slot">
        <span>
          {props.x} {props.y} {props.z}
        </span>
        <p style={{color:props.color}}>This is Not mathching</p>
      </div>
      <hr />
    </>
  );
}

export default NonMatch;
