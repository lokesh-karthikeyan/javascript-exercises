const add = function (operandOne, operandTwo) {
  return operandOne + operandTwo;
};

const subtract = function (operandOne, operandTwo) {
  return operandOne - operandTwo;
};

const sum = function (array) {
  return array.reduce(
    (accumulated, currentValue) => (accumulated += currentValue),
    0,
  );
};

const multiply = function (array) {
  return array.reduce(
    (accumulated, currentValue) => (accumulated *= currentValue),
    1,
  );
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

add(0, 0);
add(2, 2);
add(2, 6);

subtract(10, 4);

sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);

multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);

power(4, 3);

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
