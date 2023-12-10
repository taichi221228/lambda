const drop = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : xs.slice(x);

const main = () => {
  const numbers = [...Array(100).keys()];
  console.log(drop(10, numbers));
};

main();
