export const qsort = ([n, ...ns]: number[]): number[] =>
  n === undefined
    ? []
    : (() => {
        const pivot = [n];
        const smaller = ns.filter((a) => a <= n);
        const larger = ns.filter((b) => b > n);
        return [...qsort(smaller), ...pivot, ...qsort(larger)];
      })();
