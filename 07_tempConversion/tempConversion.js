const roundNumber = (number) => {
  return Math.round(number * 10) / 10;
};
const convertToCelsius = function (temp) {
  const celsius = ((temp - 32) * 5) / 9;
  return roundNumber(celsius);
};

const convertToFahrenheit = function () {};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
