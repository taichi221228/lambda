const sum = ([x, ...xs]: number[]): number =>
  x === undefined ? 0 : x + sum(xs);

const main = () => {
  console.log(sum([...Array(100).keys()]));
};

main();
