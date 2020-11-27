/**
 * Add Elements to the End of an Array Using concat Instead of push
 */

/**
 * Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push.
 * The function should return an array.
 */

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// returns [1, 2, 3, 4, 5]