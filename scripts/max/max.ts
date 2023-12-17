export const max = ([n, ...ns]: number[]): number =>
  n === undefined ? Number.MIN_SAFE_INTEGER : n > max(ns) ? n : max(ns);
