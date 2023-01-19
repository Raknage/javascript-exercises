const findTheOldest = function (array) {
  const year = new Date().getFullYear();
  return array.reduce((oldest, person) => {
    const oldestAge = () => {
      if (!oldest.yearOfDeath) oldest.yearOfDeath = year;
      return oldest.yearOfDeath - oldest.yearOfBirth;
    };
    const personAge = () => {
      if (!person.yearOfDeath) person.yearOfDeath = year;
      return person.yearOfDeath - person.yearOfBirth;
    };

    if (oldestAge() < personAge()) {
      oldest = person;
    }

    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
