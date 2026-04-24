/**
 * DAY 5: Arrays Basics
 *
 * LESSON:
 * - Create: let fruits = ['apple', 'banana', 'cherry'];
 * - Access: fruits[0] → 'apple'
 * - Length: fruits.length → 3
 * - Modify: fruits[1] = 'blueberry'; or fruits.push('date');
 * - Common methods: push(), pop(), shift(), unshift(), indexOf(), includes()
 *
 * Run: node day5.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
let numbers = [10, 20, 30];
console.log("numbers[1]:", numbers[1]); // 20
console.log("length:", numbers.length); // 3
numbers.push(40);
console.log("after push:", numbers); // [10, 20, 30, 40]

// ─────────────────────────────────────────────
// TODO 1: Create an array `colors` with 4 colors: red, green, blue, yellow.
// Log colors.length → should be 4.

// your code here
const colors = ["red", "blue", "violet", "white"];

console.log(colors.length);

// Self-check TODO 1
if (Array.isArray(colors) && colors.length === 4) {
  console.log("✓ TODO 1: colors array has 4 items");
} else {
  console.log("✗ TODO 1: create colors array with 4 colors");
}

// ─────────────────────────────────────────────
// TODO 2: Add 'purple' to the end of colors using push().
// Change colors[0] to 'orange'.
// Log the updated array.

// your code here
colors.push("purple");
colors[0] = "orange";
console.log("change colors to ".colors);

// Self-check TODO 2
if (colors[0] === "orange" && colors.includes("purple")) {
  console.log("✓ TODO 2: modified colors correctly");
  console.log("colors now:", colors);
} else {
  console.log("✗ TODO 2: push 'purple' and set colors[0] = 'orange'");
}

// ─────────────────────────────────────────────
// TODO 3: Write a function `findIndex` that takes an array and a value,
// returns the index of the value (or -1 if not found).
// Test: findIndex(colors, 'blue') → 2, findIndex(colors, 'pink') → -1

// your code here
function findIndex(arr, val) {
  return arr.indexOf(val);
}
// Self-check TODO 3
if (
  typeof findIndex === "function" &&
  findIndex(["a", "b", "c"], "b") === 1 &&
  findIndex(["a", "b", "c"], "d") === -1
) {
  console.log("✓ TODO 3: findIndex works");
} else {
  console.log("✗ TODO 3: define findIndex(arr, val)");git
}

// Solve all → all ✓ ! Mark Day 5 [x] in TODO.md
