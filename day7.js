/**
 * DAY 7: Objects & JSON
 *
 * LESSON:
 * - Create: let person = {name: 'Alice', age: 30};
 * - Access: person.name or person['name']
 * - Add/modify: person.city = 'NYC'; person.age++;
 * - JSON: JSON.stringify(obj), JSON.parse(jsonString)
 * - Object methods: Object.keys(), Object.values(), Object.entries()
 *
 * Run: node day7.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
let user = { name: "Bob", score: 95 };
console.log("user.name:", user.name);
user.score += 5;
console.log("updated:", user);

let json = JSON.stringify(user);
console.log("JSON:", json);
let parsed = JSON.parse(json);
console.log("parsed:", parsed.name);

// ─────────────────────────────────────────────
// TODO 1: Create `book` object: title='JS Guide', pages=350, author='Jane'
// Log book.title

// your code
const book = {
  title: "JS Guide",
  pages: 350,
  author: "Jane",
};
console.log(book.title);

// Self-check TODO 1
if (typeof book === "object" && book.title === "JS Guide") {
  console.log("✓ TODO 1: book object correct");
} else {
  console.log("✗ TODO 1: create book object");
}

// ─────────────────────────────────────────────
// TODO 2: Add 'price':25 to book, change pages to 400
// Use Object.keys(book) to log all keys

// your code here
book.pages = 400;
book.price = 25;

// use object.key(book) to log all keys
console.log("keys", Object.keys(book));

// Self-check TODO 2
if (book.price === 25 && book.pages === 400 && Object.keys(book).length === 4) {
  console.log("✓ TODO 2: modified book + keys logged");
  console.log("keys:", Object.keys(book));
} else {
  console.log("✗ TODO 2: add price, update pages, log keys");
}

// ─────────────────────────────────────────────
// TODO 3: Write function `getTotalScore` that takes array of users
// [{name:'A',score:90}, {name:'B',score:85}] → 175
// Use reduce on Object.values(user.score)

// your code here

function getTotalScore(users) {
  let total = 0;

 //Start at the first user, go through each user one by one, and stop when you reach the end
 //let i = 0 - start at index 0 (first item)  arrays always start at 0
 //i < users.length keep loopinmng while i is inside the array user.length = total number of users prevent from goind out of bounds
  for (let i = 0; i < users.length; i++) {
    total += users[i].score;  //current user object .score - access score property
    // total += users[i].score;  add each score to total. means that total + value and store it back 
  }

  return total;
}

// Self-check TODO 3
const testUsers = [
  { name: "A", score: 90 },
  { name: "B", score: 85 },
];
const total = getTotalScore(testUsers);
if (typeof getTotalScore === "function" && total === 175) {
  console.log("✓ TODO 3: getTotalScore =", total);
} else {
  console.log("✗ TODO 3: define getTotalScore(users)");
}

// Solve all → all ✓ ! Mark Day 7 [x] in TODO.md
