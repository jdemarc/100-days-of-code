function getMoneySpent(keyboards, drives, b) {
  let arr = []

  // Iterate through all combinations and store in an array.
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {

      // If the sum of the two items is in the budget range, add it to the array.
      if (keyboards[i] + drives[j] <= b) {
        arr.push(keyboards[i] + drives[j])
      }
    }
  }

  // If the array is empty, return -1. Otherwise, return the largest element from the array.
  return (!arr.length) ? -1 : Math.max(...arr);
}

// console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([3, 1], [5, 2, 8], 10))