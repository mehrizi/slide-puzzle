export const calculateBackgroundPosition = (index: number,size:number=3): string => {
  const col = index % size;
  const row = Math.ceil(index / size);
  const xPosition = col == 0 ? (size-1)*100 : (col - 1) * 100;
  const yPosition = (row - 1) * 100;
  return `-${xPosition}% -${yPosition}%`;
};

export const calculateTileTop = (index: number,size:number=3): string => {
  return ((Math.ceil(index / size) - 1) * (100/size)).toString() + "%";
};
export const calculateTileLeft = (index: number,size:number=3): string => {
  // if ()
  const left = index % size == 0 ? (size-1)*(100/size) : ((index % size) - 1) * (100/size);
  return left.toString() + "%";
};


export class TileHelper {
  size:number

  constructor(size:number){
    this.size = size;
  }
  shuffle(T:number[], N: number = 100) {
    for (let i = 0; i <= N; i++) {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          T = this.upward(T);
          break;
        case 1:
          T = this.rightward(T);
          break;
        case 2:
          T = this.leftward(T);
          break;
        case 3:
          T = this.downward(T);
          break;
      }
    }
    return T;
  }

  generateTiles(): number[] {
    const returnArray = [];
    for (let i = 1; i <= this.size * this.size; i++) returnArray.push(i);

    return returnArray;
  }
  upward(tiles: number[]) {
    const index = tiles.indexOf(this.size*this.size) + 1;
    if (!this.canUpward(index)) return tiles;
    const currentTile = tiles[index - this.size - 1];
    tiles[index - this.size - 1] = this.size*this.size;
    tiles[index - 1] = currentTile;
    return tiles;
  }

  downward(tiles: number[]) {
    const index = tiles.indexOf(this.size*this.size) + 1;
    if (!this.canDownward(index)) return tiles;
    const currentTile = tiles[index + this.size - 1];
    tiles[index + this.size - 1] = this.size*this.size;
    tiles[index - 1] = currentTile;
    return tiles;
  }
  rightward(tiles: number[]) {
    const index = tiles.indexOf(this.size*this.size) + 1;
    if (!this.canRightward(index)) return tiles;
    const currentTile = tiles[index];
    tiles[index] = this.size*this.size;
    tiles[index - 1] = currentTile;
    return tiles;
  }
  leftward(tiles: number[]) {
    const index = tiles.indexOf(this.size*this.size) + 1;
    if (!this.canLeftward(index)) return tiles;
    const currentTile = tiles[index - 2];
    tiles[index - 2] = this.size*this.size;
    tiles[index - 1] = currentTile;
    return tiles;
  }

  canUpward = (index: number) => {
    return index >= this.size+1;
  };
  canDownward = (index: number) => {
    return index <= this.size*this.size - this.size;
  };
  canRightward = (index: number) => {
    return index % this.size != 0;
  };
  canLeftward = (index: number) => {
    return index % this.size != 1;
  };
}
