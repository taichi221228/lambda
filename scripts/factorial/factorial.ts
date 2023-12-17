export const factorial = (x: number): number =>
  x === 1 ? 1 : x * factorial(x - 1);
