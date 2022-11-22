export const isBetween = (min: number, max: number, value: number) =>
  value >= min && value < max;

export const memoize = <T extends (...args: any[]) => any>(fn: T) => {
  const cache = new Map();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};
