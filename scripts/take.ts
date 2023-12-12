export const take = <T>(x: number, arr: T[]): T[] =>
  x === 0 ? [] : [arr[0], ...take(x - 1, arr.slice(1))];
