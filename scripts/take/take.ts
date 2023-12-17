import { tail } from "$scripts/tail/tail.ts";

export const take = <T>(i: number, xs: T[]): T[] =>
  i === 0 ? [] : [xs[0], ...take(i - 1, tail(xs))];
