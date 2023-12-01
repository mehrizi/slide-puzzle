import { useEffect, useState } from "react";
import { TileHelper } from "../helpers";
import EmptyTile from "./EmptyTile";
import "./Puzzle.scss";
import Tile from "./Tile";

type PuzzleProps = {
  image: string;
  size: number;
};
const Puzzle = (props: PuzzleProps) => {
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [moveCount, setMoveCount] = useState(0);

  let helper = new TileHelper(props.size);
  const [tiles, setTiles] = useState<number[]>(
    helper.shuffle(helper.generateTiles())
  );

  useEffect(() => {
    helper = new TileHelper(props.size);
    setMoveCount(0);
    setTiles(helper.shuffle(helper.generateTiles()));
  }, [props.size]);

  useEffect(() => {
    if (props.image) {
      const img = new Image();
      img.src = props.image;

      // Event listener to get the width and height after the image is loaded
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
      };
    }
  }, [props.image]);

  return (
    <div
      style={{
        width: imageSize?.width,
        height: imageSize?.height,
        maxHeight: "95vh",
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="move-count">moves: {moveCount}</div>
      {tiles.map((tile: number, index: number) => {
        if (tile == props.size * props.size)
          return (
            <EmptyTile
              size={props.size}
              key={tile}
              index={index + 1}
              tiles={tiles}
              onUpdate={(tiles:number[]) => {
                setTiles(tiles);
                setMoveCount(moveCount + 1);
              }}
            />
          );
        else
          return (
            <Tile
              size={props.size}
              key={tile}
              image={props.image}
              tile={tile}
              index={index + 1}
            />
          );
      })}
    </div>
  );
};

export default Puzzle;
