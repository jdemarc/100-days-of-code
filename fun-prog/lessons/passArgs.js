/*
  Pass Arguments to Avoid External Dependence in a Function
*/

// Always declare your dependencies explicitly.

// If a function depends on a variable or object being present,
// pass that variable/object as an argument.

// Easier to test
// You know what the input takes
// The function won't depend on anything else.

// The function would always produce the same output for the same inputs.

var fixed = 4;

function incrementer(val) {
  return val + 1;
}

