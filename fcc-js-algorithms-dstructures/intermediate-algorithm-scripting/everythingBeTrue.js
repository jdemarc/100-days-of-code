/**
 * Everything Be True
 */

// Check if the second argument is truthy on all elements of a collection.

function truthyCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

console.log(truthyCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthyCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));