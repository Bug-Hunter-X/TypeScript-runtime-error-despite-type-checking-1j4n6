function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type error expected
console.log(result); // This will cause a runtime error