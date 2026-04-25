/**
 * DAY 8: Strings & Template Literals
 *
 * LESSON:
 * - Strings are immutable sequences of characters
 * - Common methods: length, toUpperCase(), toLowerCase(), indexOf(), includes(), slice(), replace()
 * - Template literals: `Hello ${name}!`
 * - Multi-line strings with backticks
 *
 * Run: node day8.js
 * Expected: Solve TODOs → all ✓ checks
 * topUpperCase converts all letters to uppercase 
 * includes() check if  a word exist inside the string  greeting.includes("hellow") output true
 *.length → count characters
 * .toUpperCase() → uppercase
 * .toLowerCase() → lowercase
 * .indexOf() → find position
 * .includes() → check existence
 * .slice() → cut part of string
 * .replace() → replace text

 */

// Examples
let greeting = "Hello World";
console.log("upper:", greeting.toUpperCase()); // HELLO WORLD
console.log("includes 'World':", greeting.includes("World")); // true

let name = "Alice";
let msg = `Welcome, ${name}!`; // backticks ` insert a variable inside string  output welcome alice!
console.log("template:", msg); // Welcome, Alice!

let multi = `Line 1
Line 2`;
console.log("multi-line:", multi); // no need for \n cleaner

// ─────────────────────────────────────────────
// TODO 1: Create `fullName` by combining `first` and `last` with a space using a template literal.
// let first = "John", last = "Doe";

// your code here
let first = "John",
  last = "Doe";

let fullName = `${first} ${last}`;

// Self-check TODO 1
if (typeof fullName !== "undefined" && fullName === "John Doe") {
  console.log("✓ TODO 1: fullName correct");
} else {
  console.log("✗ TODO 1: use template literal to combine first + last");
}

// ─────────────────────────────────────────────6
// TODO 2: Create `shout` by converting `phrase` to uppercase.
// Create `hasJS` by checking if `phrase` includes "JS".
// let phrase = "I love JS";

// your code here
let phrase = "I love JS";

let shout = phrase.toUpperCase();
let hasJS = phrase.includes("JS");
// Self-check TODO 2
if (typeof shout !== "undefined" && typeof hasJS !== "undefined" && shout === "I LOVE JS" && hasJS === true) {
  console.log("✓ TODO 2: shout and hasJS correct");
} else {
  console.log("✗ TODO 2: use toUpperCase() and includes() on phrase");
}

// ─────────────────────────────────────────────
// TODO 3: Write a function `formatPrice` that takes a number and returns
// "$X.00" using a template literal. e.g. formatPrice(25) → "$25.00"

// your code here
function formatPrice(num) { 
  return `$${num.toFixed(2)}`; // num.toFixed(2) converts number → string forces 2 decimal places
  // ${} → insert formatted number $ → currency symbol
}

// Self-check TODO 3
if (typeof formatPrice === "function" && formatPrice(25) === "$25.00" && formatPrice(5) === "$5.00") {
  console.log("✓ TODO 3: formatPrice works");
} else {
  console.log("✗ TODO 3: define formatPrice(num) returning template string");
}

// Solve all → all ✓ ! Mark Day 8 [x] in TODO.md
