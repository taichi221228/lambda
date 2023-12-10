import { numbers } from "../constants/numbers.ts";
import { shuffle } from "../libraries/array.ts";
import { qsort } from "../scripts/qsort.ts";

const main = () => {
  console.log(qsort(shuffle(numbers)));
};

main();
