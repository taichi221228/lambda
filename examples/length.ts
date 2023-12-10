import { length } from "../scripts/length.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(length(numbers));
};

main();
