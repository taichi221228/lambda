import { shuffle } from "../libraries/array.ts";

const qsort = ([x, ...xs]: number[]): number[] =>
  x === undefined
    ? []
    : (() => {
        const pivot = [x];
        const smaller = xs.filter((a) => a <= x);
        const larger = xs.filter((b) => b > x);
        return [...qsort(smaller), ...pivot, ...qsort(larger)];
      })();

const main = () => {
  const numbers = shuffle([...Array(5).keys()].map((x) => ++x));
  console.log(qsort(numbers));
};

main();
