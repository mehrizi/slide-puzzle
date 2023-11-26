import { TileHelper, calculateTileLeft, calculateTileTop, solvableShuffle } from "../helpers";

type EmptyTileProps = {
  index: number;
  tiles: number[];
  onUpdate: Function;
};
const EmptyTile = (props: EmptyTileProps) => {
  
  const upward = () => {
    props.onUpdate([...TileHelper.upward(props.tiles)]);
  };

  const downward = () => {
    props.onUpdate([...TileHelper.downward(props.tiles)]);
  };
  const rightward = () => {
    props.onUpdate([...TileHelper.rightward(props.tiles)]);
  };
  const leftward = () => {
    props.onUpdate([...TileHelper.leftward(props.tiles)]);
  };

  const showUpward = () => {
    return props.index >= 4;
  };
  const showDownward = () => {
    return props.index <= 6;
  };
  const showRightward = () => {
    return props.index %3!=0;
  };
  const showLeftward = () => {
    return props.index %3!=1;
  };
  return (
    <div
    className="empty-tile"
      style={{
        width: "33.3%",
        height: "33.3%",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        backgroundSize: "300%",
        position: "absolute",
        top: calculateTileTop(props.index),
        left: calculateTileLeft(props.index),
      }}
    >
      {showUpward() && <button className='down' onClick={upward}>down</button>}
      {showDownward() && <button className='up' onClick={downward}>up</button>}
      {showRightward() && <button className='left' onClick={rightward}>left</button>}
      {showLeftward() && <button className='right' onClick={leftward}>right</button>}
    </div>
  );
};

export default EmptyTile;
