import {
  TileHelper,
  calculateTileLeft,
  calculateTileTop,
  solvableShuffle,
} from "../helpers";

type EmptyTileProps = {
  index: number;
  tiles: number[];
  onUpdate: Function;
  size: number;
};
const EmptyTile = (props: EmptyTileProps) => {
  let helper = new TileHelper(props.size);
  const upward = () => {
    props.onUpdate([...helper.upward(props.tiles)]);
  };

  const downward = () => {
    props.onUpdate([...helper.downward(props.tiles)]);
  };
  const rightward = () => {
    props.onUpdate([...helper.rightward(props.tiles)]);
  };
  const leftward = () => {
    props.onUpdate([...helper.leftward(props.tiles)]);
  };

  const showUpward = () => {
    return helper.canUpward(props.index);
  };
  const showDownward = () => {
    return helper.canDownward(props.index);
  };
  const showRightward = () => {
    return helper.canRightward(props.index);
  };
  const showLeftward = () => {
    return helper.canLeftward(props.index);
  };
  return (
    <div
      className="empty-tile"
      style={{
        width: 100 / props.size + "%",
        height: 100 / props.size + "%",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        backgroundSize: "300%",
        position: "absolute",
        top: calculateTileTop(props.index, props.size),
        left: calculateTileLeft(props.index, props.size),
      }}
    >
      {showUpward() && (
        <button className="down" onClick={upward}>
          down
        </button>
      )}
      {showDownward() && (
        <button className="up" onClick={downward}>
          up
        </button>
      )}
      {showRightward() && (
        <button className="left" onClick={rightward}>
          left
        </button>
      )}
      {showLeftward() && (
        <button className="right" onClick={leftward}>
          right
        </button>
      )}
    </div>
  );
};

export default EmptyTile;
