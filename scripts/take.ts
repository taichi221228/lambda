export const take = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : [xs[0], ...take(x - 1, xs.slice(1))];
