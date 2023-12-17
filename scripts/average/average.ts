import { sum } from "$scripts/sum/sum.ts";
import { length } from "$scripts/length/length.ts";

export const average = (xs: number[]) => sum(xs) / length(xs);
