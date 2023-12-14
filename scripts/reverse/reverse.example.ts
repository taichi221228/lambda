import { numbers } from "../../constants/numbers.ts";
import { reverse } from "./reverse.ts";

const main = () => {
  /**
   * @returns {[5, 4, 3, 2, 1]}
   */
  console.log(reverse(numbers));
};

main();
