const convertToCelsius = function (degree) {
  let fahrenheit;
  fahrenheit = ((degree - 32) * 5) / 9;

  return Number(fahrenheit.toFixed(1));
};

const convertToFahrenheit = function (degree) {
  let celsius;

  celsius = (degree * 9) / 5 + 32;

  return Number(celsius.toFixed(1));
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
