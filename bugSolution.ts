function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a + b;
}

//This will throw an error, preventing the runtime issue.
try {
  let result = add("hello", "world");
  console.log(result);
} catch (error) {
  console.error(error);
}

let result2 = add(5,3);
console.log(result2);