import { add } from "./add.ts";

const main = () => {
  const add1 = add(3);

  /**
   * @return {7}
   */
  console.log(add1(4));
};

main();
