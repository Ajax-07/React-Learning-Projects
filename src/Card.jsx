import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.pic} alt="" className="pic" />
      <div className="desc">
        <p>{props.ottName}</p> <hr />
        <h3>{props.title}</h3>
        <a href={props.link} target="_b" className="button">
          WATCH NOW
        </a>
      </div>
    </div>
  );
}
export default Card;
