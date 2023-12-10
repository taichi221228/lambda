import { take } from "../scripts/take.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => ++x);
  console.log(take(3, numbers));
};

main();
