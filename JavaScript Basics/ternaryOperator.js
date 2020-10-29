/** 
 * Ternary operator
*/

// condition ? expression-if-true : expression-if-false;

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// Chaining ternary operations.

function checkSign(num) {
  return (!num) ? "zero"
  : (num > 0) ? "positive"
  : "negative"
}

checkSign(10);