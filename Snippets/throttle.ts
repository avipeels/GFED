type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number
): ThrottleFunction<T> {
  let shouldThrottle = false;
  return function (...args) {
    if (shouldThrottle) return;
    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);
    // @ts-ignore
    func.apply(this, args);
  };
}
let i = 0;

function logit() {
  i++;
  console.log(i);
}
const throttledIncrement = throttle(logit, 6000);

throttledIncrement();
setTimeout(throttledIncrement, 5000);
throttledIncrement();
