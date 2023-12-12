export const drop = <T>(x: number, [first, ...rest]: T[]): T[] =>
  x === 0 ? [first, ...rest] : drop(x - 1, rest);
