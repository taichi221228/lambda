const take = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : [xs[0], ...take(x - 1, xs.slice(1))];

const main = () => {
  const numbers = [...Array(100).keys()];
  console.log(take(10, numbers));
};

main();
