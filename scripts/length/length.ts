export const length = <T>([x, ...xs]: T[]): number =>
  x === undefined ? 0 : 1 + length(xs);
