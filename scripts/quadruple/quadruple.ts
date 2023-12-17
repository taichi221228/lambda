import { double } from "$scripts/double/double.ts";

export const quadruple = (n: number): number => double(double(n));
