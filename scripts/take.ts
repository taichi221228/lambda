export const take = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : [xs[0], ...take(x - 1, xs.slice(1))];

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(take(3, numbers));
};

main();
