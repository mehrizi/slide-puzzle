import React, { useState, ChangeEvent, useEffect } from "react";
import Tile from "./Tile";
import EmptyTile from "./EmptyTile";
function shuffle(array: number[]): number[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
type PuzzleProps = {
  image: string;
};
const Puzzle = (props: PuzzleProps) => {
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // First lets generte a random sequence of tiles

  const [tiles, setTiles] = useState<number[]>([
    ...shuffle([1, 2, 3, 4, 5, 6, 7, 8],9),
    16,
  ]);

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
        maxHeight: "90vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {tiles.map((tile: number, index: number) => {
        if (tile == 9) return <EmptyTile index={tile} />;
        else return <Tile key={tile} image={props.image} index={tile} />;
      })}
    </div>
  );
};

export default Puzzle;
