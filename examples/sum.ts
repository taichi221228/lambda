import { sum } from "../scripts/sum.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(sum(numbers));
};

main();
