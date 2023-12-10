import { numbers } from "../constants/numbers.ts";
import { take } from "../scripts/take.ts";

const main = () => {
  /**
   * @returns {[1, 2, 3]}
   */
  console.log(take(3, numbers));
};

main();
