import { tail } from "./tail.ts";

export const length = <T>(arr: T[]): number =>
  arr.length === 0 ? 0 : 1 + length(tail(arr));
