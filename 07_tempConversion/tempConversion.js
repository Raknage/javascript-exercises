const convertToCelsius = function (n) {
  return +((n - 32) / 1.8).toFixed(1);
};

const convertToFahrenheit = function (n) {
  return +(n * 1.8 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
