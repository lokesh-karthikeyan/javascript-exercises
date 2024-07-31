const sumAll = function (firstOperand, secondOperand) {
  let sum = 0;

  if (
    Math.sign(firstOperand) !== -1 &&
    Math.sign(secondOperand) !== -1 &&
    Number.isInteger(firstOperand) &&
    Number.isInteger(secondOperand)
  ) {
    if (firstOperand > secondOperand) {
      let temp = firstOperand;
      firstOperand = secondOperand;
      secondOperand = temp;
    }
    for (let i = firstOperand; i <= secondOperand; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
