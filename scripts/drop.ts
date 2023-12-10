export const drop = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : xs.slice(x);
