export const concat = <T, U>(xs: T[], ys: U[]): (T | U)[] => [...xs, ...ys];
