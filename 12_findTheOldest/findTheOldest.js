const findTheOldest = function (arrOfObj) {
  let getYear = arrOfObj.reduce((accumulated, item) => {
    let born = item.yearOfBirth;
    let died = item.yearOfDeath ?? new Date().getFullYear();

    return accumulated < died - born
      ? (accumulated = died - born)
      : accumulated;
  }, 0);

  let oldest = arrOfObj.filter(
    (item) =>
      (item.yearOfDeath ?? new Date().getFullYear()) - item.yearOfBirth ===
      getYear,
  );

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
