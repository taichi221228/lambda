import { head } from "./head.ts";
import { tail } from "./tail.ts";

export const take = <T>(x: number, arr: T[]): T[] =>
  x === 0 ? [] : [head(arr), ...take(x - 1, tail(arr))];
