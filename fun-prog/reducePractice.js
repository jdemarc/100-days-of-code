// Use reduce to solve the following:

// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

console.log(total([1,2,3])); // 6

