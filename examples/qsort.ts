import { shuffle } from "../libraries/array.ts";
import { qsort } from "../scripts/qsort.ts";

const main = () => {
  const numbers = shuffle([...Array(5).keys()].map((x) => ++x));
  console.log(qsort(numbers));
};

main();
