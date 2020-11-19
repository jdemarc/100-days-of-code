function jumpingOnClouds(c) {
  let n = 0;

  for (let i = 0; i < c.length - 1;) {
    i += (c[i+2] ? 1 : 2);
    n++;
  }
  
  return n;
}

// https://stackoverflow.com/questions/58629804/jumping-on-the-clouds-hackerrank