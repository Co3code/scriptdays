/**
 * DAY 10: Review Week 1 - Mini Project: Calculator
 *
 * REVIEW:
 * - Variables, operators (Day 1)
 * - Control flow (Day 2)
 * - Functions & scope (Day 4)
 * - Arrays (Day 5) & Array methods (Day 6)
 * - Objects (Day 7)
 * - Strings & template literals (Day 8)
 * - Numbers & Math (Day 9)
 *
 * PROJECT: Build a Calculator object with methods that use all the above.
 *
 * Run: node day10.js
 * Expected: Solve TODOs → all ✓ checks
 */

// ─────────────────────────────────────────────
// CALCULATOR PROJECT
// Build a calculator that stores history and supports:
// - Basic math operations
// - History tracking as an array of strings
// - History stats using array methods
// ─────────────────────────────────────────────

// Examples
let demoCalc = {
  value: 0,
  history: [],
};

// ─────────────────────────────────────────────
// TODO 1: Create a `calculator` object with:
//   - `value` (number, starts at 0)
//   - `history` (array, starts empty)
//   - `add(n)` → adds n to value, pushes "added n → result" to history
//   - `subtract(n)` → subtracts n from value, logs "subtracted n → result"
//   - `reset()` → sets value to 0, pushes "reset → 0" to history
//
// Use template literals for history strings.
// e.g., after calc.add(5), history has "added 5 → 5"

// your code here
let calculator = {
  value: 0,
  history: [],
  add(n) {},
  subtract(n) {},
  reset() {},
  multiply(n) {},
  divide(n) {},
  getStats() {
    return {};
  },
};

// Self-check TODO 1
calculator.reset();
calculator.add(10);
calculator.subtract(3);
let check1 =
  calculator.value === 7 &&
  calculator.history.length === 3 &&
  calculator.history[0].includes("reset") &&
  calculator.history[1] === "added 10 → 10" &&
  calculator.history[2] === "subtracted 3 → 7";

if (check1) {
  console.log("✓ TODO 1: calculator object works");
} else {
  console.log("✗ TODO 1: build calculator with value, history, add, subtract, reset");
}

// ─────────────────────────────────────────────
// TODO 2: Add `multiply(n)` and `divide(n)` methods to calculator.
//   - `multiply(n)` → multiplies value by n, pushes history string
//   - `divide(n)` → divides value by n (if n !== 0), pushes history string.
//     If n === 0, push "error: divide by zero" and do NOT change value.
//   - Use control flow (if/else) in divide for the zero check.

// your code here

// Self-check TODO 2
calculator.reset();
calculator.add(20);
calculator.divide(4); // 5
calculator.multiply(3); // 15
calculator.divide(0); // error, value stays 15

let check2 =
  calculator.value === 15 &&
  calculator.history.some((h) => h.includes("divide by zero")) &&
  calculator.history.some((h) => h.includes("multiplied 3 → 15"));

if (check2) {
  console.log("✓ TODO 2: multiply and divide work");
} else {
  console.log("✗ TODO 2: add multiply(n) and divide(n) with divide-by-zero guard");
}

// ─────────────────────────────────────────────
// TODO 3: Add a `getStats()` method to calculator that returns an object:
//   {
//     totalOperations: <count of history items>,
//     additions: <count of "added" entries>,
//     errors: <count of "error" entries>
//   }
// Use array methods (filter or forEach) to count.

// your code here

// Self-check TODO 3
calculator.reset();
calculator.add(5);
calculator.add(10);
calculator.divide(0);
let stats = calculator.getStats ? calculator.getStats() : {};
let check3 =
  typeof calculator.getStats === "function" &&
  stats.totalOperations === 3 &&
  stats.additions === 2 &&
  stats.errors === 1;

if (check3) {
  console.log("✓ TODO 3: getStats works");
} else {
  console.log("✗ TODO 3: add getStats() returning { totalOperations, additions, errors }");
}

// Solve all → all ✓ ! Mark Day 10 [x] in TODO.md
