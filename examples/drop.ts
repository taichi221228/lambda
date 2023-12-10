import { drop } from "../scripts/drop.ts";

const main = () => {
  const numbers = [...Array(5).keys()].map((x) => x + 1);
  console.log(drop(3, numbers));
};

main();
