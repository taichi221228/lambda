import { numbers } from "../constants/numbers.ts";
import { take } from "../scripts/take.ts";

const main = () => {
  console.log(take(3, numbers));
};

main();
