export const sum = ([head, ...rest]: number[]): number =>
  head === undefined ? 0 : head + sum(rest);
