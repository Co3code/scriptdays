/**
 * DAY 6: Array Methods (map, filter, reduce)
 * the three methods are the  "Holy Trinity " of javascript
 * LESSON:
 * - map(): transform each element → new array
 *   numbers.map(n => n * 2) → doubles each
 * - filter(): keep elements matching condition
 *   numbers.filter(n => n > 5) → only >5
 * - reduce(): combine to single value
 *   numbers.reduce((sum, n) => sum + n, 0) → sum
 * - Chaining: arr.map().filter().reduce()
 *
 * Run: node day6.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
const nums = [1, 2, 3, 4, 5];
console.log(
  "double:",
  nums.map((n) => n * 2),
); // [2,4,6,8,10]
console.log(
  "evens:",
  nums.filter((n) => n % 2 === 0),
); // [2,4]
console.log(
  "sum:",
  nums.reduce((sum, n) => sum + n, 0),
); // 15

// ─────────────────────────────────────────────
// TODO 1: Use map to square each number in [1,2,3,4] → [1,4,9,16]
// Store in `squares1`

// your code here
const number = [1, 2, 3, 4];
const squares1 = number.map((n) => n * n); //  n * n: This is the formula that tells JavaScript to multiply the number by itself and put the result into the new array.
console.log(squares1);

// Self-check TODO 1
if (typeof squares1 !== "undefined" && JSON.stringify(squares1) === JSON.stringify([1, 4, 9, 16])) {
  console.log("✓ TODO 1: squares correct");
} else {
  console.log("✗ TODO 1: use map to square [1,2,3,4]");
}

// ─────────────────────────────────────────────
// TODO 2: Use filter to get numbers > 3 from [1,2,3,4,5,6] → [4,5,6]
// Store in `bigNums`
// your code here
const numbers = [1, 2, 3, 4, 5, 6];
const bigNums = numbers.filter((n) => n > 3);
console.log(bigNums);

// Self-check TODO 2
if (typeof bigNums !== "undefined" && JSON.stringify(bigNums) === JSON.stringify([4, 5, 6])) {
  console.log("✓ TODO 2: filter >3 correct");
} else {
  console.log("✗ TODO 2: use filter for numbers >3");
}

// ─────────────────────────────────────────────
// TODO 3: Use reduce to sum doubled evens from [1,2,3,4,5] → 12 (2+4=6)
// Hint: chain map/filter/reduce
// method chaining
// your code here
const number3 = [1, 2, 3, 4, 5];
const result3 = number3
  .filter((n) => n % 2 === 0) // 2 and 4
  .map((n) => n * 2) //   4 and 8 
  .reduce((sum, n) => sum + n, 0); // [2, 4] → doubled → [4, 8] → sum = 12
console.log(result3);

// Self-check TODO 3
if (typeof result3 === "number" && result3 === 12) {
  console.log("✓ TODO 3: chained methods = 12");
} else {
  console.log("✗ TODO 3: chain map/filter/reduce for sum doubled evens");
}

// Solve all → all ✓ ! Mark Day 6 [x] in TODO.md
 