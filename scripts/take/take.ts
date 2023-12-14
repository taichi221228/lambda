import { tail } from "../tail/tail.ts";

export const take = <T>(x: number, xs: T[]): T[] =>
  x === 0 ? [] : [xs[0], ...take(x - 1, tail(xs))];
