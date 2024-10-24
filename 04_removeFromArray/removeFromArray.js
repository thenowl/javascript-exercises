const removeFromArray = function (array, ...indefiniteArgs) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < indefiniteArgs.length; j++) {
      if (array[i] === indefiniteArgs[j]) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
