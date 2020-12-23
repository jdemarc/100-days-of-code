/**
 * Everything Be True
 */

// Check if the second argument is truthy on all elements of a collection.

function truthyCheck(collection, pre) {
  // Iterate through the collection.
  // if collection[pre] is true for all users...
  let truthy = true;

  for (let i = 0; i < collection.length; i++) {
    if (!collection[pre]) {
      truthy = false;
      return truthy;
    }
  }

  return truthy;
  // collection.forEach(usr => console.log(usr[pre]));
}

console.log(truthyCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));