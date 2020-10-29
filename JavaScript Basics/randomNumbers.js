/**
 * Random number generation.
 */

// Math.random() generates a random number between [0, 1);
// 0 is inclusive, but it doesn't quite reach 1.

function randomFraction() {
  return Math.random();
}

randomFraction();

// Generate a random whole number between 0 and 9.

function randomOneToTen() {
  return Math.floor(Math.random() * 10);
}

randomOneToTen();

// Generate whole numbers within a specific range.
// Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

  // Between 10 and 50
  // Math.floor(Math.random() * (50 - 10 + 1) + 10)
  // Math.floor(Math.random() * 41) + 10)
}

let ans = randomRange(10, 50);
console.log(ans);

