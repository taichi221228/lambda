const tail = (xs: number[]): number[] => xs.slice(1);

const main = () => {
  const numbers = [...Array(100).keys()];
  console.log(tail(numbers));
};
