import { tail } from "../scripts/tail.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(tail(numbers));
};

main();
