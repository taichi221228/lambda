import { filter } from "./filter.ts";
import { numbers } from "$constants/numbers.ts";

const main = () => {
  /**
   * @returns {[1, 2, 3]}
   */
  console.log(filter((a) => a <= 3, numbers));
};

main();
