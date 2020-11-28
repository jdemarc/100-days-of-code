// Use reduce to solve the following:

// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

//console.log(total([1,2,3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
  return arr.reduce((acc, cur) => acc + cur, '')
}

// console.log(stringConcat([1,2,3])); // "123"

