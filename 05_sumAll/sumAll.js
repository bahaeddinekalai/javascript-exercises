const sumAll = function (firstNumber, secondeNumber) {
  let result = 0;
  for (let i = firstNumber; i < secondeNumber + 1; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
