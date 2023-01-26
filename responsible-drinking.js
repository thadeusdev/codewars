function hydrate(s) {
  // your code here
  const number = s.match(/\d/g).reduce((accumulator, value) => accumulator + parseInt(value), 0)
  return `${number} glass${number !==1 ? 'es' : ''} of water`
}

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"))

// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
