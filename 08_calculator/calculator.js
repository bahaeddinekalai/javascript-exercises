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

const power = function (firstNumber, secondeNumber) {
  return Math.pow(firstNumber, secondeNumber);
};

const factorial = function (number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
