export const sum = ([x, ...xs]: number[]): number =>
  x === undefined ? 0 : x + sum(xs);
