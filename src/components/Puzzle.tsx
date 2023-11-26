import React, { useState, ChangeEvent, useEffect } from "react";
import Tile from "./Tile";
import EmptyTile from "./EmptyTile";
import { TileHelper, solvableShuffle } from "../helpers";
import "./Puzzle.scss";

type PuzzleProps = {
  image: string;
};
const Puzzle = (props: PuzzleProps) => {
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // First lets generte a random sequence of tiles

  // const [tiles, setTiles] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8,9]);
  let T:number[] = [1, 2, 3, 4, 5, 6, 7, 8,9];
  for (let i=0;i<=100;i++){
    switch(Math.floor(Math.random()*4)){
      case 0:
        T=TileHelper.upward(T)
        break
      case 1:
        T=TileHelper.rightward(T)
        break
      case 2:
        T=TileHelper.leftward(T)
        break
      case 3:
        T=TileHelper.downward(T)
        break

    }
  }

  const [tiles, setTiles] = useState<number[]>([...T]);

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
        // maxWidth: "95hw",
        // maxHeight: "100%",
        maxWidth: "100%",
        // overflow: "hidden",
        position: "relative",
      }}
    >
      {tiles.map((tile: number, index: number) => {
        if (tile == 9)
          return (
            <EmptyTile
              key={tile}
              index={index + 1}
              tiles={tiles}
              onUpdate={setTiles}
            />
          );
        else
          return (
            <Tile
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
