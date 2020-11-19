function countingValleys(steps, path) {
  let valleys = 0;
  let seaLevel = 0;
  
  for (let i = 0; i < path.length; i++) {
      if (path[i] === 'D') {
          seaLevel--;
      } else {
          if (seaLevel === -1) {
              valleys++;
          }
          
          seaLevel++;
      }
  }
  
  return valleys;
}