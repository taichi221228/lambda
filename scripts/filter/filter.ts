export const filter = <T>(f: (x: T) => boolean, [x, ...xs]: T[]): T[] =>
  x === undefined ? [] : [...(f(x) ? [x] : []), ...filter(f, xs)];
