export const head = <T>(arr: T[]) =>
  arr.length === 0 ? Error("Empty array") : arr[0];
