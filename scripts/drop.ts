import { tail } from "./tail.ts";

export const drop = <T>(x: number, arr: T[]): T[] =>
  x === 0 ? arr : drop(x - 1, tail(arr));
