/**
 * Debugging Notes
 */

// console.log()
// console.clear()

// console.log(typeof seven)

/**
 * JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6)
 * and one type for mutable items: Object. 
 * Note that in JavaScript, arrays are technically a type of object.
 */

// Check your spelling throughout your code.

// Watch for unclosed brackets, parenthesis, backticks, quotes, etc.

// Mixed usage of double and single quotes.

// Use of assignment operator (=) instead of equality operator ('==', '===')

// Missing parenthesis after a function call.

// Passing values to functions in the wrong order.

// Improper traversal of an array - using wrong index values to either begin or end.

// Reinitializing a variable inside of a loop (nested loops)
  // an example...

  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = []; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HERE
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

// Infinite loops... make sure your conditions are valid.