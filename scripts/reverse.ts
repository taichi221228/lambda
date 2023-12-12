export const reverse = <T>([first, ...rest]: T[]): T[] =>
  first === undefined ? [] : [...reverse(rest), first];
