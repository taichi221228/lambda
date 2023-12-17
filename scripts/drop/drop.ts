import { tail } from "$scripts/tail/tail.ts";

export const drop = <T>(i: number, xs: T[]): T[] =>
  i === 0 ? xs : drop(i - 1, tail(xs));
