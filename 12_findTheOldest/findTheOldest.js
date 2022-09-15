const findTheOldest = function (people) {
    const currentYear = 2022;
    let living = people.filter((x) => !x.yearOfDeath);
    let dead = people.filter((x) => x.yearOfDeath);

    living = living.sort((x, y) => {
        return currentYear - x.yearOfBirth < currentYear - y.yearOfBirth ? -1 : 1;
    });
    dead = dead.sort((x, y) => {
        return y.yearOfBirth - x.yearOfBirth < y.yearOfBirth - y.yearOfBirth ? -1 : 1;
    });
    console.log({ living, dead });

    if (living.length > 0) {
        return living[0];
    }

    return '';
};

// Do not edit below this line
module.exports = findTheOldest;
