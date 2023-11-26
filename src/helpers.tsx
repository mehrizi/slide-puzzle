export const calculateBackgroundPosition = (index: number): string => {
  const col = index % 3;
  const row = Math.ceil(index / 3);
  const xPosition = col == 0 ? 200 : (col - 1) * 100;
  const yPosition = (row - 1) * 100;
  return `-${xPosition}% -${yPosition}%`;
};

export const calculateTileTop = (index: number): string => {
  return ((Math.ceil(index / 3) - 1) * 33.3).toString() + "%";
};
export const calculateTileLeft = (index: number): string => {
  // if ()
  const left = index % 3 == 0 ? 66.6 : ((index % 3) - 1) * 33.3;
  return left.toString() + "%";
};

export const shuffle = (array: number[]): number[] => {
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
};

export class TileHelper {
  static upward(tiles: number[]) {
    const index = tiles.indexOf(9) +1;
    if (!TileHelper.canUpward(index)) return tiles;
    const currentTile = tiles[index - 3 - 1];
    tiles[index - 3 - 1] = 9;
    tiles[index - 1] = currentTile;
    return tiles;
  }

  static downward(tiles: number[]) {
    const index = tiles.indexOf(9) +1;
    if (!TileHelper.canDownward(index)) return tiles;
    const currentTile = tiles[index + 3 - 1];
    tiles[index + 3 - 1] = 9;
    tiles[index - 1] = currentTile;
    return tiles;
  }
  static rightward(tiles: number[]) {
    const index = tiles.indexOf(9) +1;
    if (!TileHelper.canRightward(index)) return tiles;
    const currentTile = tiles[index];
    tiles[index] = 9;
    tiles[index - 1] = currentTile;
    return tiles;
  }
  static leftward(tiles: number[]) {
    const index = tiles.indexOf(9) +1;
    if (!TileHelper.canLeftward(index)) return tiles;
    const currentTile = tiles[index - 2];
    tiles[index - 2] = 9;
    tiles[index - 1] = currentTile;
    return tiles;
  }

  static canUpward = (index: number) => {
    return index >= 4;
  };
  static canDownward = (index: number) => {
    return index <= 6;
  };
  static canRightward = (index: number) => {
    return index % 3 != 0;
  };
  static canLeftward = (index: number) => {
    return index % 3 != 1;
  };
}
