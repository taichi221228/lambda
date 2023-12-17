export const product = ([n, ...ns]: number[]): number =>
  n === undefined ? 1 : n * product(ns);
