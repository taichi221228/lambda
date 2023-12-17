export const index = <T>(x: keyof typeof xs, xs: T[]) =>
  xs[x] ?? Error("Empty array");
