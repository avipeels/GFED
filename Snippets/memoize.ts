type Fn = (this: any, arg: string | number) => unknown;

function expensiveFunction(n: number) {
  console.log("Computing...");
  return n * 2;
}

export default function memoize(func: Fn): Fn {
  const cache = new Map();
  return function (arg) {
    if (cache.has(arg)) {
      const test = cache.get(arg);
      console.log("test", test);
      return test;
    }
    const result = func.call(this, arg);
    // console.log("result", result);
    cache.set(arg, result);
    return result;
  };
}
// @ts-ignore
const memoizedExpensiveFunction = memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(5));
// console.log(memoizedExpensiveFunction(5));
