import { tail } from "./tail.ts";

export const length = (xs: number[]): number =>
  xs.length === 0 ? 0 : 1 + length(tail(xs));
