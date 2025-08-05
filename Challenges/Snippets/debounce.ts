function debounce(func: Function, wait: number = 0): Function {
  let timeoutId: NodeJS.Timeout;
  try {
    return function (this: any, ...args: any[]) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  } catch (error) {
    throw "Not implemented";
  }
}

debounce(() => {
  console.log("debounced", "arg");
}, 5000)();
