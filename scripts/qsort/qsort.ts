import { filter } from "$scripts/filter/filter.ts";

export const qsort = ([n, ...ns]: number[]): number[] =>
  n === undefined
    ? []
    : [
        ...qsort(filter((a) => a <= n, ns)),
        n,
        ...qsort(filter((b) => b > n, ns)),
      ];
