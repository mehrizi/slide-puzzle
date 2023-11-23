export const calculateBackgroundPosition = (index: number): string => {
  const col = index % 3;
  const row = Math.ceil(index / 3);
  const xPosition = (col - 1) * 100;
  const yPosition = (row - 1) * 100;
  return `${xPosition}% ${yPosition}%`;
};

export const calculateTileTop = (index: number): string => {
  return ((Math.ceil(index / 3) - 1) * 33.3).toString() + "%";
};
export const calculateTileLeft = (index: number): string => {
  // if ()
  const left = index % 3 == 0 ? 66.6 : ((index % 3) - 1) * 33.3;
  return left.toString() + "%";
};
