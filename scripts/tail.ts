export const tail = (xs: number[]): number[] => xs.slice(1);

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(tail(numbers));
};

main();
