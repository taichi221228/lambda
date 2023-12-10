const head = (xs: number[]): number => xs[0];

const main = () => {
  const numbers = [...Array(100).keys()];
  console.log(head(numbers));
};

main();
