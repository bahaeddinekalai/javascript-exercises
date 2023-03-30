const add = function (firstNumber, secondeNumber) {
  return firstNumber + secondeNumber;
};

const subtract = function (firstNumber, secondeNumber) {
  return firstNumber - secondeNumber;
};

const sum = function (numbersList) {
  let result = 0;
  for (let i = 0; i < numbersList.length; i++) {
    result += parseInt(numbersList[i]);
  }
  return result;
};

const multiply = function (numbersList) {
  let result = 1;
  for (let i = 0; i < numbersList.length; i++) {
    result *= parseInt(numbersList[i]);
  }
  return result;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
