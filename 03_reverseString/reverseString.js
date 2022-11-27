const reverseString = function (str) {
  let splitText = str.split("");
  splitText.reverse();
  return splitText.join("");
};

// Do not edit below this line
module.exports = reverseString;
