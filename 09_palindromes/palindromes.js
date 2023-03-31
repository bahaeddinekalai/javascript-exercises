const onlyAToZ = (str) => {
  const notInAZ = [" ", "!", ",", "."];
  for (let notIn of notInAZ) {
    str = str.replaceAll(notIn, "");
  }
  return str;
};
const palindromes = function (str) {
  str = str.toUpperCase();
  str = onlyAToZ(str);

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
  //console.log(str[0]);
};

// Do not edit below this line
module.exports = palindromes;
