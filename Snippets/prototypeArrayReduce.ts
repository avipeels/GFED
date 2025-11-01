interface Array<T> {
  myReduce<U>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}
// @ts-ignore
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const length = this.length;
  if (noInitialValue && length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let acc = noInitialValue ? this[0] : initialValue;
  const startingIndex = noInitialValue ? 1 : 0;
  for (let k = startingIndex; k < length; k++) {
    // @ts-ignore
    if (Object.hasOwn(this, k)) {
      // @ts-ignore
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};

const add = (prev: number, current: number) => prev + current;
// @ts-ignore

const testArray = [];
// @ts-ignore

const result = testArray.myReduce(add);
console.log("result", result);
