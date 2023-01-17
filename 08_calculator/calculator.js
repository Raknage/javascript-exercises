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

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
