const fibonacci = function (n) {
  if (n <= 0) return "OOPS";
  let x = 1;
  let y = 1;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    x = y;
    y = result;
    result = x + y;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
