import {  calculateTileLeft, calculateTileTop } from "../helpers";

type EmptyTileProps = {
  index: number;
};
const EmptyTile = (props: EmptyTileProps) => {

  return (
    <div
      style={{
        width: "33.3%",
        height: "33.3%",
        border: "1px solid #ccc",
        boxSizing: 'border-box',
        backgroundSize: "300%",
        position: "absolute",
        top: calculateTileTop(props.index),
        left: calculateTileLeft(props.index),
      }}
    >
      Hi
    </div>
  );
};

export default EmptyTile;
