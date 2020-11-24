function angryProfessor(k, a) {
  let arrivals = a.filter(el => el <= 0);
  
  return (k <= arrivals.length) ? 'NO' : 'YES'
}

