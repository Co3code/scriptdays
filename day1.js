/**
 * DAY 1: JavaScript Basics - Variables, Data Types, Operators
 *
 * LESSON:
 * - Variables: let, const, var (use let/const)
 * - Data Types: string, number, boolean, null, undefined, object
 * - Operators: +, -, *, /, %, ==, ===, >, <, &&, ||
 * - console.log() to output
 *
 * Run: node day1.js
 * Expected: All checks pass!
 */

// Examples
let name = "Learner"; // string
const age = 25; // number, can't change
let isReady = true; // boolean

console.log("Hi,", name, "- Age:", age, "- Ready?", isReady);

// TODO 1: Create variable for your city (string), log "I live in [city]"
let city = "";
console.log("I live in", city);

// Self-check TODO 1
if (typeof city === "string" && city.length > 0) {
  console.log(" TODO 1: Good city!");
} else {
  console.log(" TODO 1: Set a city string");
}

// TODO 2: Calculate area of rectangle (length=10, width=5), log it
let length = 10;
let width = 5;
let area = 0;
console.log("Rectangle area:", area);

// Self-check TODO 2
if (area === 50) {
  console.log("✓ TODO 2: Correct area!");
} else {
  console.log("✗ TODO 2: area should be 50");
}

// TODO 3: Check if age >= 18 && isReady, log "Can drive!" or "Wait"
if (age >= 18 && isReady) {
  console.log("Can drive!");
} else {
  console.log("Wait");
}

// Self-check TODO 3 (adjust age/isReady for test)
let checkAge = 20;
let checkReady = true;
const result = checkAge >= 18 && checkReady ? "Can drive!" : "Wait";
if (result === "Can drive!") {
  console.log(" TODO 3: Logic correct!");
} else {
  console.log("✗ TODO 3: Fix condition");
}

// All done? Mark Day 1 in TODO.md and run again to verify.
// Next: node day1.js should show all ✓
