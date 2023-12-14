import { tail } from "$scripts/tail/tail.ts";

export const drop = <T>(x: number, xs: T[]): T[] =>
  x === 0 ? xs : drop(x - 1, tail(xs));
