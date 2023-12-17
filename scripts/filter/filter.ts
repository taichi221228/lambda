export const filter = <T>(f: (e: T) => boolean, [x, ...xs]: T[]): T[] =>
  x === undefined ? [] : [...(f(x) ? [x] : []), ...filter(f, xs)];
