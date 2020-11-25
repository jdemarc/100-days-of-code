function viralAdvertising(n) {
  let liked = 2;
  let shared = 5;
  
  for (let i = 1; i < n; i++) {
      shared = Math.floor(shared/2) * 3;
      liked += Math.floor(shared/2);
  }
  
  return liked;
}