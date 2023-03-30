const repeatString = function (textToRepeat, numberOfRepetition) {
  if (numberOfRepetition < 0) {
    return "ERROR";
  }
  let returnString = "";
  for (let i = 0; i < numberOfRepetition; i++) {
    returnString += textToRepeat;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
