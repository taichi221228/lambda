export const sum = ([n, ...ns]: number[]): number =>
  n === undefined ? 0 : n + sum(ns);
