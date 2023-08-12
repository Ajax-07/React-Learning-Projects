import React from "react";
import Match from "./Match";
import NonMatch from "./NonMatch";

function Slot(props) {
  const { x, y, z } = props;
  return x === y && y === z ? (
    <Match x={x} y={y} z={z} color="green" />
  ) : (
    <NonMatch x={x} y={y} z={z} color="#b36430" />
  );
}
export default Slot;
