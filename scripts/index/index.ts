export const index = <T>(i: number, xs: T[]) => xs[i] ?? Error("Empty array");
