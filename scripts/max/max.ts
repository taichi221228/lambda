export const max = ([x, ...xs]: number[], _: boolean = false): number =>
  x === undefined ? Number.MIN_SAFE_INTEGER : x > max(xs) ? x : max(xs);
