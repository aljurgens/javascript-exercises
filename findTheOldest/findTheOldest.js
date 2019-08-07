let findTheOldest = function(people) {
  let oldest = 0;

  for (let i = 0; i < people.length; i++) {
    // make sure still-living person's current ages are properly computed
    if (people[i].yearOfDeath == undefined) {
      people[i].yearOfDeath = new Date().getFullYear();
    }

    let personsAge = people[i].yearOfDeath - people[i].yearOfBirth;
    let oldestsAge = people[oldest].yearOfDeath - people[oldest].yearOfBirth;

    if (personsAge > oldestsAge) {
      oldest = i;
    }
  }

  return people[oldest];
}

module.exports = findTheOldest
