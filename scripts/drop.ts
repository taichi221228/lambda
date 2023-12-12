export const drop = <T>(x: number, arr: T[]) => (x === 0 ? [] : arr.slice(x));
