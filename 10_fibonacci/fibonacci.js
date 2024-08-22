const fibonacci = function (number) {
  let position = Number(number);

  if (position === "NaN") {
    return;
  }

  if (position < 0) {
    return "OOPS";
  }

  if (position >= 0) {
    let fibonacciArray = [];

    fibonacciArray.push(0);
    fibonacciArray.push(1);

    if (position === 0) return fibonacciArray[position];
    if (position === 1) return fibonacciArray[position];

    fibonacciArray.length = position + 1;
    for (let index = 2; index < fibonacciArray.length; index++) {
      fibonacciArray[index] =
        fibonacciArray[index - 1] + fibonacciArray[index - 2];
    }
    return fibonacciArray[position];
  }
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
