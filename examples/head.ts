import { head } from "../scripts/head.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(head(numbers));
};

main();
