/**
 * Spinal Tap Case
 */

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  // Find either any whitespace any number of times or an underscore any number of times.
  let re = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(re, '-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("TheAndyGriffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));