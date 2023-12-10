export const drop = (x: number, xs: number[]): number[] =>
  x === 0 ? [] : xs.slice(x);

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => x + 1);
  console.log(drop(3, numbers));
};

main();
