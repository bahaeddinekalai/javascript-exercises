const removeFromArray = function (myArray, numberToRemove) {
  myArray.splice(myArray.indexOf(numberToRemove), 1);
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
