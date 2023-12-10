const sum = ([x, ...xs]: number[]): number =>
  x === undefined ? 0 : x + sum(xs);

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(sum(numbers));
};

main();
