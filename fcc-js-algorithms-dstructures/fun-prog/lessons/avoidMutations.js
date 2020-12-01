/**
 * Avoid mutations and side effects using functional programming
 */

// Changing or altering something is called a mutation.
// The outcome is called a side effect.

// A function that does not cause side effects is called a pure function.

const fixed = 7;

function incrementer() {
  return fixed + 1;
}

const newValue = incrementer();
console.log(newValue);