import { numbers } from "../constants/numbers.ts";
import { map } from "../scripts/map.ts";

const main = () => {
  /**
   * @returns {[2, 4, 6, 8, 10]}
   */
  console.log(map(numbers, (n) => n * 2));
};

main();
