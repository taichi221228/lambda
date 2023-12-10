const head = (xs: number[]): number => xs[0];

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(head(numbers));
};

main();
