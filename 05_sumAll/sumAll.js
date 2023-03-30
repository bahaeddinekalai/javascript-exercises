const smallFirst = (firstNumber = 1, secondeNumber = 4) => {
  if (firstNumber > secondeNumber) {
    firstNumber = firstNumber + secondeNumber;
    secondeNumber = firstNumber - secondeNumber;
    firstNumber = firstNumber - secondeNumber;
  }
  return [firstNumber, secondeNumber];
};
const validateNumber = (number)=>{
    return(number >= 0 ) &&(typeof number == "number")
}
const sumAll = function (firstNumber = 1, secondeNumber = 4) {
  let result = 0;
  if (validateNumber(firstNumber) && validateNumber(secondeNumber)) {
    [firstNumber, secondeNumber] = smallFirst(firstNumber, secondeNumber);
    for (let i = firstNumber; i < secondeNumber + 1; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
