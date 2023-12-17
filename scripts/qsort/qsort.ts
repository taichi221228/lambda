import { filter } from "$scripts/filter/filter.ts";

export const qsort = ([n, ...ns]: number[]): number[] =>
  n === undefined
    ? []
    : (() => {
        const pivot = [n];
        const smaller = filter((a) => a <= n, ns);
        const larger = filter((b) => b > n, ns);
        return [...qsort(smaller), ...pivot, ...qsort(larger)];
      })();
