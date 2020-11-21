function pageCount(n, p) {
  // n is the number of pages in the book.
  // p is the page we want to go to.

  // The number of turns from the front can be calculated as the floor of the
  // page we want divided by 2.

  const fromFront = Math.floor(p/2);

  // The total [page] turns to get to the end
  // minus the turns from front to the page we want
  // gives us the result of from the back of the book to our target.
  const fromBack = Math.floor(n/2 - fromFront);

  // Return whichever is smaller.
  return Math.min(fromFront, fromBack);
}

console.log(pageCount(11, 4));

// https://www.youtube.com/watch?v=aM2Y2PeXrhk&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA