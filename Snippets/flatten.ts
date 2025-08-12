// Define a recursive type for nested number arrays
type NestedNumberArray = Array<number | NestedNumberArray>;

export default function flatten(args: NestedNumberArray): number[] {
  let returnArray: number[] = [];
  try {
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        returnArray.push(...flatten(arg));
      } else {
        returnArray.push(arg);
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  return returnArray;
}

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
