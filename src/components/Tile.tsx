import { calculateBackgroundPosition, calculateTileLeft, calculateTileTop } from "../helpers";

type TileProps = {
  image: string ;
  index: number;
  tile: number
  size: number
};
const Tile = (props: TileProps) => {

  return (
    <div
      style={{
        width:  (100/props.size)+"%",
        height: (100/props.size)+"%",
        border: "1px solid #ccc",
        boxSizing: 'border-box',
        backgroundSize: `${props.size*100}%`,
        position: "absolute",
        backgroundImage: `url(${props.image})`,
        transition: 'all .3s',
        top: calculateTileTop(props.index,props.size),
        left: calculateTileLeft(props.index,props.size),
        backgroundPosition: calculateBackgroundPosition(props.tile,props.size)
      }}
    >
      {/* Display additional content or controls inside the div if needed */}
    </div>
  );
};

export default Tile;
