function getMoneySpent(keyboards, drives, b) {
  let arr = []

  // Iterate through all combinations and store in an array.
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      arr.push(keyboards[i] + drives[j])
    }
  }

  // Filter everything below or equal to the budget out.
  arr = arr.filter((cost) => cost <= b);

  // If the array is empty, return -1. Otherwise, return the largest element from the array.
  return (!arr.length) ? -1 : Math.max(...arr);
}

// console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([3, 1], [5, 2, 8], 10))