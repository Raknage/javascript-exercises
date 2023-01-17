const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((acc, n) => acc + n, 0);
};

const multiply = function (array) {
  return array.reduce((acc, n) => acc * n, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
