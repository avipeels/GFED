function arrayProductExcludingCurrent(args: number[]): number[] {
  try {
    return args.map((_, index) => {
      const arrayExcludingCurrent = args.filter((_, i) => i !== index);
      return arrayExcludingCurrent.reduce((acc, curr) => {
        const currentProduct = acc * curr;
        return currentProduct === 0 ? 0 : currentProduct;
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

console.log(arrayProductExcludingCurrent([1, 2, 3, 4]));
console.log(arrayProductExcludingCurrent([0, 0, -1, 1]));
