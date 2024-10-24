const sumAll = function (num1, num2) {
  if (
    num1 < 1 ||
    num2 < 1 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 !== Math.floor(num1) ||
    num2 !== Math.floor(num2)
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      let n = num1 - num2 + 1;
      return (n * (n + 1)) / 2;
    } else {
      n = num2 - num1 + 1;
      return (n * (n + 1)) / 2;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
