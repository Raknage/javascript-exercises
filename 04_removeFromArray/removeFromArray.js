const removeFromArray = function (a, ...args) {
  let newArray = a;
  let index;
  for (let arg in args) {
    index = newArray.findIndex((e) => e === args[arg]);
    if (index != -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
