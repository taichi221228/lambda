import { numbers } from "$constants/numbers.ts";
import { double } from "./double.ts";

const main = () => {
  /**
   * @returns {2}
   */
  console.log(double(numbers[0]));
};

main();
