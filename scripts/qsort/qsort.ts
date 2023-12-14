export const qsort = ([x, ...xs]: number[]): number[] =>
  x === undefined
    ? []
    : (() => {
        const pivot = [x];
        const smaller = xs.filter((a) => a <= x);
        const larger = xs.filter((b) => b > x);
        return [...qsort(smaller), ...pivot, ...qsort(larger)];
      })();
