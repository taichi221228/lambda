export const reverse = <T>([x, ...xs]: T[]): T[] =>
  x === undefined ? [] : [...reverse(xs), x];
