import { index } from "$scripts/index";

export const head = <T>(xs: T[]) => index(0, xs) ?? Error("Empty array");
