export const product = ([x, ...xs]: number[]): number =>
  x === undefined ? 1 : x * product(xs);
