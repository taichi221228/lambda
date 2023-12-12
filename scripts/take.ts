import { tail } from "./tail.ts";

export const take = <T>(x: number, arr: T[]): T[] =>
  x === 0 ? [] : [arr[0], ...take(x - 1, tail(arr))];
