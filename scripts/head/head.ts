export const head = <T>(xs: T[]) => xs[0] ?? Error("Empty array");
