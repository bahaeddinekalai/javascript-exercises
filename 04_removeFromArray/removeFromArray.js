const removeFromArray = function (myArray, ...args) {
  for (let arg of args) {
    if (typeof arg == "number" && myArray.indexOf(arg) != -1) {
      myArray.splice(myArray.indexOf(arg), 1);
    }
  }

  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
