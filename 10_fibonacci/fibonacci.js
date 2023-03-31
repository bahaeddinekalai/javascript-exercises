const fibonacci = function (number) {
  number = parseInt(number);
  if (number < 1) return "OOPS";
  if (number == 1 || number == 2) return 1;
  let firstNumber = 1;
  let secondeNumber = 1;
  let result;
  for (let i = 3; i <= number; i++) {
    result = secondeNumber + firstNumber;
    secondeNumber = firstNumber;
    firstNumber = result;
  }
  return result;
};
console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
