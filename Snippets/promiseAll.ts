export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  return new Promise((resolve, reject) => {
    let results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      // @ts-ignore
      resolve(results);
      return;
    }
    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          results[index] = value;
          unresolved -= 1;
          if (unresolved === 0) {
            // @ts-ignore
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}

async function runPromiseAll() {
  //   const p = await promiseAll([]);
  //   const p0 = Promise.resolve(2);
  //   const p1 = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(3);
  //     }, 10);
  //   });
  const p0 = Promise.reject(2);
  const p1 = Promise.reject(3);

  const res = await promiseAll([p0, p1]);
  console.log(res);
}

runPromiseAll();
