const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 });

const mapCurry = (fn) => (obj) => 
  Object.fromEntries(Object.entries(obj).map(fn));

const reduceCurry = (fn) => (obj, initial) => 
  Object.entries(obj).reduce(fn, initial);

const filterCurry = (fn) => (obj) => 
  Object.fromEntries(Object.entries(obj).filter(fn));

const reduceScore = (personnel, initialValue = 0) => 
  reduceCurry((acc, [_, person]) => 
    person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc
  )(personnel, initialValue);

const filterForce = (personnel) => 
  filterCurry(([_, person]) => 
    person.isForceUser && person.shootingScore >= 80
  )(personnel);

const mapAverage = (personnel) => 
  mapCurry(([name, person]) => [
    name, 
    {
      ...person, 
      averageScore: (person.pilotingScore + person.shootingScore) / 2
    }
  ])(personnel);

// console.log("Total force user score:", reduceScore(personnel));
// console.log("Force users with high shooting scores:", filterForce(personnel));
// console.log("Personnel with average scores:", mapAverage(personnel));