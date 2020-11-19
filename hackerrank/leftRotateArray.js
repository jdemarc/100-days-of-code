function rotLeft(a, d) {
  const newArr = a.slice();
  
  for (let i = 0; i < d; i++) {
      let start = newArr.shift();
      newArr.push(start);
  }
  
  return newArr;
}