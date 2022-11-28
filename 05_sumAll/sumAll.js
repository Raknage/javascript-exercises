const sumAll = function (n1, n2) {
  let start = Math.min(n1, n2);
  let end = Math.max(n1, n2);
  let sum = 0;

  for (let arg in arguments) {
    if (typeof arguments[arg] != "number") {
      return "ERROR";
    }
  }

  if (start < 0) {
    return "ERROR";
  }

  function add(start, end, sum) {
    if (start === end + 1) {
      return sum;
    }
    sum += start;
    start += 1;
    return add(start, end, sum);
  }

  return add(start, end, sum);
};

// Do not edit below this line
module.exports = sumAll;
