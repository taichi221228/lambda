import { numbers } from "../../constants/numbers.ts";
import { drop } from "./drop.ts";

const main = () => {
  /**
   * @returns {[4, 5]}
   */
  console.log(drop(3, numbers));
};

main();
