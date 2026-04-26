/**
 * DAY 9: Numbers & Math
 *
 * LESSON:
 * - parseInt() converts a string → whole number (integer)
 * - parseFloat() converts a string → decimal number
 * - Math.round() rounds to nearest whole number
 * - Math.floor() rounds down to nearest whole number
 * - Math.ceil() rounds up to nearest whole number
 * - Math.max(a, b, c...) returns the largest number
 * - Math.min(a, b, c...) returns the smallest number
 * - Math.random() returns a decimal between 0 (inclusive) and 1 (exclusive)
 * - toFixed(n) formats a number to n decimal places (returns string)
 * - isNaN(value) checks if a value is "Not a Number"
 *
 * Run: node day9.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
let strNum = "42";
console.log("parseInt:", parseInt(strNum)); // 42

let priceStr = "19.99";
console.log("parseFloat:", parseFloat(priceStr)); // 19.99

let score = 87.6;
console.log("round:", Math.round(score)); // 88
console.log("floor:", Math.floor(score)); // 87
console.log("ceil:", Math.ceil(score)); // 88

console.log("max:", Math.max(10, 5, 20)); // 20
console.log("min:", Math.min(10, 5, 20)); // 5

let randomVal = Math.random(); // 0 to 1 (not including 1)
console.log("random:", randomVal);

let fixedNum = (3.14159).toFixed(2);
console.log("toFixed:", fixedNum); // "3.14"

console.log("isNaN:", isNaN("hello")); // true

// ─────────────────────────────────────────────
// TODO 1: Convert `ageString` to an integer and store it in `ageInt`.
// Convert `priceString` to a float and store it in `priceFloat`.

// your code here
let ageString = "25";
let priceString = "99.99";

let ageInt = parseInt(ageString); // ← fix this
let priceFloat = parseFloat(priceString);

console.log(ageInt, priceFloat);

// Self-check TODO 1
if (typeof ageInt !== "undefined" && typeof priceFloat !== "undefined" && ageInt === 25 && priceFloat === 99.99) {
  console.log("✓ TODO 1: ageInt and priceFloat correct");
} else {
  console.log("✗ TODO 1: use parseInt() and parseFloat() on the strings");
}

// ─────────────────────────────────────────────
// TODO 2: Round `rawScore` down to the nearest whole number and store in `roundedDown`.
// Round `rawScore` up to the nearest whole number and store in `roundedUp`.

// your code here
let rawScore = 73.2;

let roundedDown = Math.floor(rawScore); // ← fix this
let roundedUp = Math.ceil(rawScore);

// Self-check TODO 2
if (typeof roundedDown !== "undefined" && typeof roundedUp !== "undefined" && roundedDown === 73 && roundedUp === 74) {
  console.log("✓ TODO 2: roundedDown and roundedUp correct");
} else {
  console.log("✗ TODO 2: use Math.floor() and Math.ceil() on rawScore");
}

// ─────────────────────────────────────────────
// TODO 3: Write a function `getRandomInt` that takes `min` and `max` (both integers)
// and returns a random integer between min and max (inclusive).
// Hint: use Math.random(), Math.floor(), and a little math.

// your code here
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // return a random integer between min and max (inclusive)
}

// Self-check TODO 3
let r1 = getRandomInt(1, 10);
let r2 = getRandomInt(1, 10);
if (
  typeof getRandomInt === "function" &&
  r1 >= 1 &&
  r1 &&
  r1 === r1 &&
  r1 >= 1 &&
  r1 &&
  r1 === r1 &&
  r2 >= 1 &&
  r2 &&
  r2 === r2
) {
  if (getRandomInt(5, 5) === 5) {
    console.log("✓ TODO 3: getRandomInt works");
  } else {
    console.log("✗ TODO 3: range must be inclusive of min and max");
  }
} else {
  console.log("✗ TODO 3: define getRandomInt(min, max) returning a random integer in range");
}

// Solve all → all ✓ ! Mark Day 9 [x] in TODO.md
