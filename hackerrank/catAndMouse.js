// Given a number line, where x, y, and z exist at a given 'index',
// return whichever cat is closest to the mouse or the mouse if they are equal distance.

function catAndMouse(x, y, z) {
  // x is cat A's position
  // y is cat B's position
  // z is the mouse's position.

  let a = Math.abs(x - z);
  let b = Math.abs(y - z);
  
  // if (a < b) {
  //   return "Cat A"
  // } else if (a > b) {
  //   return "Cat B";
  // } else {
  //   return "Mouse C";
  // }

  return (a < b) ? "Cat A"
    : (a > b) ? "Cat B"
    : "Mouse C"
}

console.log(catAndMouse);