export default function binarySearch(arr: number[], target: number): number {
  try {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let midOfArray = Math.floor((left + right) / 2);
      if (arr[midOfArray] === target) {
        return midOfArray;
      }
      if (arr[midOfArray] > target) {
        right = midOfArray - 1;
      }
      if (arr[midOfArray] < target) {
        left = midOfArray + 1;
      }
    }
    return -1;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
console.log(binarySearch([1, 2, 3, 12, 14, 16], 5)); // -1
console.log(binarySearch([1, 2, 3, 10, 11, 20], 20)); // 5
