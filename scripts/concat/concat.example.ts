import { numbers } from "$constants/numbers.ts";
import { concat } from "./concat.ts";

const main = () => {
  /**
   * @returns {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
   */
  console.log(concat(numbers, numbers));
};

main();
