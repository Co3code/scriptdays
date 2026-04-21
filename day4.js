/**
 * DAY 4: Functions & Scope
 *
 * LESSON:
 * - function declaration:  function greet(name) { return "Hi " + name; }
 * - function expression:   const greet = function(name) { return "Hi " + name; };
 * - arrow function:        const greet = (name) => "Hi " + name;
 * - parameters & return values
 * - scope: var (function), let/const (block), global
 *   - variables declared inside a function are NOT accessible outside
 *
 * Run: node day4.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
function square(n) {
  return n * n;
}
console.log("square(4):", square(4)); // 16

const double = (n) => n * 2;
console.log("double(5):", double(5)); // 10

// Scope example
function scopeDemo() {
  let inner = "I'm inside";
  return inner;
}
console.log("scopeDemo():", scopeDemo());
// console.log(inner); // ← would throw ReferenceError

// ─────────────────────────────────────────────
// TODO 1: Write a function `add` that takes two numbers and returns their sum.
// Then call it with 7 and 3 and store the result in `result1`.

// your code here

// Self-check TODO 1
if (typeof add === "function" && result1 === 10) {
  console.log("✓ TODO 1: add(7, 3) =", result1);
} else {
  console.log("✗ TODO 1: define add(a, b) and set result1 = add(7, 3)");
}

// ─────────────────────────────────────────────
// TODO 2: Write an arrow function `isEven` that returns true if a number is even,
// false otherwise. Store isEven(4) in `result2` and isEven(7) in `result3`.

// your code here

// Self-check TODO 2
if (typeof isEven === "function" && result2 === true && result3 === false) {
  console.log("✓ TODO 2: isEven works correctly");
} else {
  console.log("✗ TODO 2: define isEven(n) and set result2/result3");
}

// ─────────────────────────────────────────────
// TODO 3: Write a function `repeat` that takes a string and a number n,
// and returns the string repeated n times (no separator).
// e.g. repeat("ha", 3) → "hahaha"
// Store repeat("hi", 4) in `result4`.

// your code here

// Self-check TODO 3
if (typeof repeat === "function" && result4 === "hihihihi") {
  console.log("✓ TODO 3: repeat works correctly");
} else {
  console.log('✗ TODO 3: define repeat(str, n) and set result4 = repeat("hi", 4)');
}

// Solve all → all ✓ ! Mark Day 4 [x] in TODO.md
