function getMoneySpent(keyboards, drives, b) {
  let arr = []

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      arr.push(keyboards[i] + drives[j])
    }
  }

  arr = arr.filter((cost) => cost <= b);



  return (!arr.length) ? -1 : Math.max(...arr);
}

// console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([3, 1], [5, 2, 8], 10))