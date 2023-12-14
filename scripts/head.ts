export const head = <T>(xs: T[]) =>
  xs.length === 0 ? Error("Empty array") : xs[0];
