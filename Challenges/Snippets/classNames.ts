export default function classNames(...args: string[] | any[]): string {
  const returnArray: string | string[] = [];
  try {
    if (!args) {
      return "";
    }
    args.forEach((arg) => {
      if (typeof arg === "string" || (typeof arg === "number" && arg)) {
        returnArray.push(arg.toString());
      }
      if (typeof arg === "object" && arg && !Array.isArray(arg)) {
        Object?.keys(arg).forEach((key) => {
          if (arg[key]) {
            returnArray.push(key);
          }
        });
      }
      if (typeof arg === "object" && Array.isArray(arg)) {
        returnArray.push(classNames(...arg));
      }
    });
    return returnArray.join(" ").trim();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

console.log(classNames("a", "b", "c", { bar: true, foo: false }));
console.log(classNames("foo", "bar"));
console.log(classNames("foo", { bar: true }));
console.log(classNames({ "foo-bar": true }));
console.log(classNames({ "foo-bar": false }));
console.log(classNames({ foo: true }, { bar: true }));
console.log(classNames({ foo: true, bar: true }));
console.log(classNames({ foo: true, bar: false, qux: true }));
console.log(
  classNames(
    "foo",
    {
      bar: true,
      duck: false,
    },
    "baz",
    { quux: true }
  )
);
console.log(classNames("a", ["b", { c: true, d: false }]));
console.log(classNames(null, false, "bar", undefined, { baz: null }, ""));
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""));
