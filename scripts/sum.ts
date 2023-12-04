const sum = ([x, ...xs]: number[]): number =>
  x === undefined ? 0 : x + sum(xs);

const main = () => {
  const numbers = [...Array(100).keys()];
  console.log(sum(numbers));
};

main();
