export const map = <T, U>([x, ...xs]: T[], f: (e: T) => U): U[] =>
  x === undefined ? [] : [f(x), ...map(xs, f)];
