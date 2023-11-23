import React, { useState, ChangeEvent, useEffect } from "react";
import { calculateBackgroundPosition, calculateTileLeft, calculateTileTop } from "../helpers";

type TileProps = {
  image: string ;
  index: number;
};
const Tile = (props: TileProps) => {

  return (
    <div
      style={{
        // float: "left",
        width: "33.3%",
        height: "33.3%",
        border: "1px solid #ccc",
        boxSizing: 'border-box',
        backgroundSize: "300%",
        position: "absolute",
        backgroundImage: `url(${props.image})`,
        top: calculateTileTop(props.index),
        left: calculateTileLeft(props.index),
        backgroundPosition: calculateBackgroundPosition(props.index)
      }}
    >
      {/* Display additional content or controls inside the div if needed */}
    </div>
  );
};

export default Tile;
