import { mult } from "$scripts/mult/mult.ts";

const main = () => {
  const mult1 = mult(3);
  const mult2 = mult1(4);

  /**
   * @return {60}
   */
  console.log(mult2(5));
};

main();
