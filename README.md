# TypeScript Runtime Error Despite Type Checking

This repository demonstrates a scenario where a TypeScript type error is caught during compilation but the underlying runtime error isn't prevented. This happens when the code passes the type checking but leads to incorrect behavior during execution.

## The Bug
The `add` function is defined to accept two numbers and return their sum. However, the example calls `add` with two strings. TypeScript correctly identifies this as a type error at compile time. But,  Javascript's loose typing causes it to concatenate the strings rather than producing an error, resulting in an unexpected output.

## The Solution
The solution involves stricter type checking to prevent the unexpected string concatenation.