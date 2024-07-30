const repeatString = function (string, number) {
  let newString;

  if (number === 0) {
    return (newString = "");
  }

  if (number < 0) {
    return (newString = "ERROR");
  }

  for (let i = 1; i <= number; i++) {
    if (newString === undefined) {
      newString = string;
    } else {
      newString += string;
    }
  }
  return newString;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
