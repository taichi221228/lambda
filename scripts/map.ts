export const map = <T, U>([first, ...rest]: T[], fn: (el: T) => U): U[] =>
  first === undefined ? [] : [fn(first), ...map(rest, fn)];
