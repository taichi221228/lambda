import { numbers } from "../constants/numbers.ts";
import { shuffle } from "../libraries/array.ts";
import { qsort } from "../scripts/qsort.ts";

const main = () => {
  /**
   * @returns {[1, 2, 3, 4, 5]}
   */
  console.log(qsort(shuffle(numbers)));
};

main();
